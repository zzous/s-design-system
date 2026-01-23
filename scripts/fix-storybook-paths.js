import { readFileSync, writeFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';

const storybookStaticDir = 'storybook-static';
const basePath = '/s-design-system/';

function fixHtmlFile(filePath) {
    try {
        let content = readFileSync(filePath, 'utf-8');
        let modified = false;

        // CSS 파일 경로 수정 (절대 경로를 base path 포함 경로로)
        // /assets/... -> /s-design-system/assets/...
        content = content.replace(
            /(href|src)=["'](\/assets\/[^"']+)["']/g,
            (match, attr, path) => {
                if (!path.startsWith(basePath)) {
                    modified = true;
                    return `${attr}="${basePath}${path.substring(1)}"`;
                }
                return match;
            }
        );

        // preload link 태그의 href 수정 (더 정확한 패턴)
        content = content.replace(
            /<link([^>]*rel=["']preload["'][^>]*href=["'])(\/assets\/[^"']+\.css[^"']*)(["'][^>]*>)/g,
            (match, before, path, after) => {
                if (!path.startsWith(basePath)) {
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

function walkDir(dir) {
    const files = readdirSync(dir);

    for (const file of files) {
        const filePath = join(dir, file);
        const stat = statSync(filePath);

        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file.endsWith('.html')) {
            fixHtmlFile(filePath);
        }
    }
}

console.log('Fixing Storybook HTML files for GitHub Pages...');
walkDir(storybookStaticDir);
console.log('Done!');
