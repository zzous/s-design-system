import { readFileSync, writeFileSync, readdirSync, statSync, copyFileSync, existsSync, mkdirSync, cpSync } from 'fs';
import { join } from 'path';

const storybookStaticDir = 'storybook-static';
const basePath = '/s-design-system/';

function fixHtmlFile(filePath) {
    try {
        let content = readFileSync(filePath, 'utf-8');
        let modified = false;

        // 1. 모든 절대 경로를 base path 포함 경로로 수정
        // /assets/... -> /s-design-system/assets/...
        // /sb-preview/... -> /s-design-system/sb-preview/...
        content = content.replace(
            /(href|src)=["'](\/(?:assets|sb-preview|iframe\.html)[^"']*)["']/g,
            (match, attr, path) => {
                if (!path.startsWith(basePath)) {
                    modified = true;
                    return `${attr}="${basePath}${path.substring(1)}"`;
                }
                return match;
            }
        );

        // 2. preload link 태그의 href 수정
        content = content.replace(
            /<link([^>]*rel=["']preload["'][^>]*href=["'])(\/[^"']+)(["'][^>]*>)/g,
            (match, before, path, after) => {
                if (path.startsWith('/') && !path.startsWith(basePath) &&
                    (path.startsWith('/assets/') || path.startsWith('/sb-preview/'))) {
                    modified = true;
                    return `<link${before}${basePath}${path.substring(1)}${after}`;
                }
                return match;
            }
        );

        if (modified) {
            writeFileSync(filePath, content, 'utf-8');
            console.log(`Fixed: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error fixing ${filePath}:`, error.message);
    }
}

function fixCssFile(filePath) {
    try {
        let content = readFileSync(filePath, 'utf-8');
        let modified = false;

        // CSS 내부의 url() 경로 수정
        // url('/public/assets/...') -> url('/s-design-system/assets/...')
        // url('/assets/...') -> url('/s-design-system/assets/...')
        content = content.replace(
            /url\(["']?(\/(?:public\/)?assets\/[^"')]+)["']?\)/g,
            (match, path) => {
                // public/assets -> assets로 변경하고 base path 추가
                let newPath = path.replace(/^\/public\//, '/');
                if (!newPath.startsWith(basePath)) {
                    modified = true;
                    return `url("${basePath}${newPath.substring(1)}")`;
                }
                return match;
            }
        );

        // @mdi/font 경로 수정 (잘못된 경로 패턴)
        // /assets/@mdi/... -> 실제 node_modules 경로를 찾아서 수정
        // 또는 빌드 시 복사된 경로로 수정
        content = content.replace(
            /url\(["']?(\/assets\/@mdi\/[^"')]+)["']?\)/g,
            (match, path) => {
                if (!path.startsWith(basePath)) {
                    modified = true;
                    // @mdi/font는 일반적으로 node_modules에서 처리되므로
                    // 실제 파일이 assets에 복사되어 있는지 확인 필요
                    // 일단 경로만 수정
                    return `url("${basePath}${path.substring(1)}")`;
                }
                return match;
            }
        );

        // @import 문에서 @mdi/font 참조 수정
        content = content.replace(
            /@import\s+["'](\/assets\/@mdi\/[^"']+)["']/g,
            (match, path) => {
                if (!path.startsWith(basePath)) {
                    modified = true;
                    return `@import "${basePath}${path.substring(1)}"`;
                }
                return match;
            }
        );

        // CSS 내부에서 @mdi/font를 참조하는 모든 경로 수정
        // href나 src 속성에서도 수정
        content = content.replace(
            /(href|src)=["'](\/assets\/@mdi\/[^"']+)["']/g,
            (match, attr, path) => {
                if (!path.startsWith(basePath)) {
                    modified = true;
                    return `${attr}="${basePath}${path.substring(1)}"`;
                }
                return match;
            }
        );

        if (modified) {
            writeFileSync(filePath, content, 'utf-8');
            console.log(`Fixed CSS: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error fixing CSS ${filePath}:`, error.message);
    }
}

function fixJsFile(filePath) {
    try {
        let content = readFileSync(filePath, 'utf-8');
        let modified = false;

        // JavaScript 내부의 경로 수정 (동적 import, fetch 등)
        // '/assets/...' -> '/s-design-system/assets/...'
        // '/sb-preview/...' -> '/s-design-system/sb-preview/...'
        content = content.replace(
            /["'](\/(?:assets|sb-preview|iframe\.html)[^"']+)["']/g,
            (match, path) => {
                if (!path.startsWith(basePath)) {
                    modified = true;
                    return `"${basePath}${path.substring(1)}"`;
                }
                return match;
            }
        );

        if (modified) {
            writeFileSync(filePath, content, 'utf-8');
            console.log(`Fixed JS: ${filePath}`);
        }
    } catch (error) {
        console.error(`Error fixing JS ${filePath}:`, error.message);
    }
}

function walkDir(dir) {
    const files = readdirSync(dir);

    for (const file of files) {
        const filePath = join(dir, file);
        const stat = statSync(filePath);

        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file.endsWith('.html')) {
            fixHtmlFile(filePath);
        } else if (file.endsWith('.css')) {
            fixCssFile(filePath);
        } else if (file.endsWith('.js')) {
            fixJsFile(filePath);
        }
    }
}

// @mdi/font CSS 파일 복사
function copyMdiFont() {
    const mdiFontPath = 'node_modules/@mdi/font/css/materialdesignicons.css';
    const mdiFontDest = join(storybookStaticDir, 'assets', '@mdi', 'font', 'css');
    const mdiFontDestFile = join(mdiFontDest, 'materialdesignicons.css');

    if (existsSync(mdiFontPath)) {
        // 디렉토리 생성
        mkdirSync(mdiFontDest, { recursive: true });

        // CSS 파일 복사
        copyFileSync(mdiFontPath, mdiFontDestFile);
        console.log('Copied @mdi/font CSS file');

        // @mdi/font의 폰트 파일들도 복사 (필요한 경우)
        const mdiFontsSource = 'node_modules/@mdi/font/fonts';
        const mdiFontsDest = join(storybookStaticDir, 'assets', '@mdi', 'font', 'fonts');
        if (existsSync(mdiFontsSource)) {
            mkdirSync(mdiFontsDest, { recursive: true });
            try {
                cpSync(mdiFontsSource, mdiFontsDest, { recursive: true });
                console.log('Copied @mdi/font font files');
            } catch (error) {
                console.warn('Could not copy @mdi/font fonts:', error.message);
            }
        }
    }
}

console.log('Fixing Storybook files for GitHub Pages...');
walkDir(storybookStaticDir);

// @mdi/font 파일 복사
copyMdiFont();

// .nojekyll 파일 복사
const nojekyllSource = 'public/.nojekyll';
const nojekyllDest = join(storybookStaticDir, '.nojekyll');
if (existsSync(nojekyllSource)) {
    copyFileSync(nojekyllSource, nojekyllDest);
    console.log('Copied .nojekyll file');
} else {
    // .nojekyll 파일이 없으면 생성
    writeFileSync(nojekyllDest, '');
    console.log('Created .nojekyll file');
}

console.log('Done!');
