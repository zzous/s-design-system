import { SBtn } from '@';

export default {
    title: 'Button/SBtn',
    component: SBtn,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
        title: {control: {type: 'text'}, description: '버튼 내부 텍스트'},
        variant: {control: {type: 'select'}, options: ["elevated", "outlined"], description: '버튼 타입'},
        size: {control: {type: 'select'}, options: [undefined, 'x-small', 'small', 'large', 'x-large'], description: '버튼 사이즈'},
        height: { control: { type: 'text' }, description: '버튼 높이'},
        color: {control: {type: 'select'}, options: ["blue", "red", "black"], description: '버튼 색상'},
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
        title: "Button",
    }
};


export const OutlinedButton = (args) => ({
    components: { SBtn },
    setup() {
        const defaultButtonArgs = {}
        const outlinedButtonArgs = [
            {
                title: '등록',
                color: 'blue',
                variant: 'outlined'
            },
            {
                title: '삭제',
                color: 'red',
                variant: 'outlined'
            }
        ];
        return { defaultButtonArgs, outlinedButtonArgs, args };
    },
    template: `
        <div>
            <SBtn class="mr-5" v-bind="{...defaultButtonArgs, ...args}" />
            <SBtn
                class="mr-5"
                v-for="(outlinedArgs, index) in outlinedButtonArgs"
                :key="index"
                v-bind="{...outlinedArgs}"
            />
        </div>
    `,
});


OutlinedButton.args = {
    title: '기본',
    color: 'black',
    variant: 'outlined'
};

OutlinedButton.parameters = {
    docs: {
        source: {
            code: `
<div>
    <SBtn class="mr-5" title="기본" variant="outlined" color="black" />
    <SBtn class="mr-5" title="등록" variant="outlined" color="blue" />
    <SBtn class="mr-5" title="삭제" variant="outlined" color="red" />
</div>
        `,
            language: 'html',
            type: 'auto',
        },
    },
};


export const ButtonSize = (args) => ({
    components: { SBtn },
    setup() {
        const defaultButtonArgs = {}
        const sizeButtonArgs = [
            {
                title: 'x-small',
                size: 'x-small',
                color: 'black'
            },
            {
                title: 'small',
                size: 'small',
                color: 'black'
            },
            {
                title: 'large',
                size: 'large',
                color: 'black'
            },
            {
                title: 'x-large',
                size: 'x-large',
                color: 'black'
            }
        ];
        return { defaultButtonArgs, sizeButtonArgs, args };
    },
    template: `
        <div>
            <SBtn class="mr-5" v-bind="{...defaultButtonArgs, ...args}" />
            <SBtn
                class="mr-5"
                v-for="(btnArgs, index) in sizeButtonArgs"
                :key="index"
                v-bind="{...btnArgs}"
            />
        </div>
    `,
});


ButtonSize.args = {
    title: '기본',
};

ButtonSize.parameters = {
    docs: {
        source: {
            code: `
<div>
    <SBtn class="mr-5" title="기본" />
    <SBtn class="mr-5" title="Default" color="black" />
    <SBtn class="mr-5" title="x-small" color="black" />
    <SBtn class="mr-5" title="small" color="black" />
    <SBtn class="mr-5" title="large" color="black" />
    <SBtn class="mr-5" title="x-large" color="black" />
</div>
        `,
            language: 'html',
            type: 'auto',
        }
    },
};
