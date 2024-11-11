import { SFormTable, SFormItem } from '@';
import { VTextField } from 'vuetify/components';

export default {
    title: 'Form/SFormTable',
    component: SFormTable,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = {
    args: {
    },
};


export const WithFormItem = (args) => ({
    components: { SFormTable, SFormItem, VTextField },
    template: `
        <div>
            <SFormTable >
                <SFormItem
                    label="Label"
                    required
                >
                    <VTextField placeholder="Enter text" variant="outlined" density="compact" hide-details="auto" />
                </SFormItem>
            </SFormTable>
        </div>
    `,
});

WithFormItem.parameters = {
    docs: {
        source: {
            code: `
<div>
    <SFormTable >
        <SFormItem
            label="Label"
            required
            :errors="[]"
        >
            <VTextField placeholder="Enter text" variant="outlined" density="compact" hide-details="auto" />
        </SFormItem>
    </SFormTable>
</div>
            `,
            language: 'html',
            type: 'auto',
        }
    },
};
