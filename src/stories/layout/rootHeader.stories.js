import {RootHeader} from '@';

export default {
    title: 'Layout/RootHeader',
    component: RootHeader,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { RootHeader },
    setup() { return { args }; },
    template: `
        <div :style="{padding: '24px 48px'}">
          <RootHeader :userInfo="args.userInfo" :user-menus="args.userMenus" :isLoggedIn="args.isLoggedIn" />
        </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
    isLoggedIn: true,
    userInfo: {
        name: 'UserA',
        picture: {
            format: 'png',
            data: 'iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAAdgAAAHYBTnsmCAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAKXSURBVDiNhZPNb4xRGMV/z/vemenotNMx6mtUBylSRGwsCBsLkTSREBXxERISW8RGSEoXhIV/wEZssKpIEIkIwmKQkGgwgg6a+mg7He109P24j8W0oxGJs7nJzbnnnifPOcJf0AIplF1AO8pCAIRPKL04XJVWitP5Unt4H0OGLuAYUPe38CR+ARdo47QIYU1AFVdf00OpqUPubIFSiG56BIsHALC5Jci9DWjSRXb0IM1DN6SdbSJY0f3HDiMj5wjGkkwE0B9Ccww/8xJz8A0AE91rqPs4G2bEsKkEGIPE4oFvuWj43LeXsp9EA8JfPp7vEw5D2FKmwav6HjcVJioVYp5H5GcZ1xhYlDKm5B8ytiXf5+XS6zxr8WzI1JlePgx+VcBdNUTxWSNRxyXqOER9l3jew2b894Y9vaMVyVJ60IxnQ3xrSawcIdYyDpMO4qsHGZ43m+LnGBHHIeq41GcC0kdf5BwN7MLGnR9IHsjjZsrEmyyzOgZwo4p6oB64UWVWZ4G6esFJhiQ2f2Xm8eeohlkJbnIL2AKgVgiLEUza++cO/f4EZu444tqpq9uGCQo6mYa3sptSso3GoJ+4/UZcS9UtSJKyM4fRuQto0ne0eVeqIVI+GBuQE+UwQF3lKdK6lvntnUgkVfu5Hkj5Rfp77xL7lIN4LYY50UvMDKL0AQ0IdF9u4OETl3kLGskubQagL/+DgS8/2bg+5NS+UVAASiYkKwD+JU4qdAME6nDjcYJC3qX+TQjA2DKX7LKQrevHMGKnOnAicpCz1Shfx/UG6RHomLIduMLQcAQU0mkfE2ptJIEe853t0oX9U6YujJeiS/5TJlXOR+dzRjqnlWk69CwpP8JOlBUKrZOkAvAqYrgmRxiZzv8NIEcPGSFpaJIAAAAASUVORK5CYII='
        },
    },
    userMenus: [
        { title: "Menu1", value: 'Menu1' },
        { title: "Menu2", value: 'Menu2' },
        { title: "Menu3", value: 'Menu3' },
    ],
    teleportId: 'storybook-root'
};
