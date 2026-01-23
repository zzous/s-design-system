/** @type { import('@storybook/react').Preview } */
import '@mdi/font/css/materialdesignicons.css';

const preview = {
    parameters: {
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
};

// GitHub Pages base path를 위한 base 태그 추가
export const previewHead = (head) => {
    // 프로덕션 빌드일 때만 base 태그 추가 (환경 변수로 확인)
    if (process.env.NODE_ENV === 'production' || process.env.GITHUB_PAGES === 'true') {
        return `
            ${head}
            <base href="/s-design-system/" />
        `;
    }
    return head;
};

export default preview;
