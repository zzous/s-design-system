import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
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
        // /assets/@mdi/... -> /s-design-system/assets/@mdi/...
        content = content.replace(
            /url\(["']?(\/assets\/@mdi\/[^"')]+)["']?\)/g,
            (match, path) => {
                if (!path.startsWith(basePath)) {
                    modified = true;
                    return `url("${basePath}${path.substring(1)}")`;
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

// .nojekyll 파일 복사
import { copyFileSync, existsSync } from 'fs';

console.log('Fixing Storybook files for GitHub Pages...');
walkDir(storybookStaticDir);

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
