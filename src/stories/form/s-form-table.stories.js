import { SFormTable, SFormItem } from '@';
import { VTextField, VSelect } from 'vuetify/components';
import { SBtn } from '@';

export default {
    title: 'Form/SFormTable',
    component: SFormTable,
    tags: ['autodocs'],
    argTypes: {}
};

const Template = () => ({
    components: { SFormTable, SFormItem, VTextField, VSelect, SBtn },
    setup() {
        return {
            items: [
                { title: 'Option 1', value: '1' },
                { title: 'Option 2', value: '2' },
                { title: 'Option 3', value: '3' }
            ]
        };
    },
    template: `
        <SFormTable>
            <SFormItem
                label="이름"
                required
            >
                <VTextField
                    placeholder="이름을 입력하세요"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                />
                <SBtn
                    color="black"
                    size="small"
                    title="중복 체크"
                />
            </SFormItem>

            <SFormItem
                label="이메일"
                required
            >
                <VTextField
                    placeholder="이메일을 입력하세요"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                />
            </SFormItem>

            <SFormItem
                label="구분"
                required
            >
                <VSelect
                    :items="items"
                    item-title="title"
                    item-value="value"
                    placeholder="구분을 선택하세요"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                />
            </SFormItem>

            <SFormItem
                label="메모"
            >
                <VTextField
                    placeholder="메모를 입력하세요"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                />
            </SFormItem>
        </SFormTable>
    `
});

export const Default = Template.bind({});
