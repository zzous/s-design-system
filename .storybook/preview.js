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

export default preview;
