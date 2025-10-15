import {SFormItem} from '@/components';
import SBtn from '../../components/button/SBtn.vue';

export default {
    title: 'Form/SFormItem',
    component: SFormItem,
    tags: ['autodocs'],
    argTypes: {
        className: {
            control: 'text',
            description: '추가 CSS 클래스명',
            defaultValue: '',
            table: {
                type: { summary: 'String' },
                defaultValue: { summary: "''" }
            }
        },
        contentClass: {
            control: 'text',
            description: '콘텐트 영역에 적용할 CSS 클래스명',
            defaultValue: '',
            table: {
                type: { summary: 'String' },
                defaultValue: { summary: "''" }
            }
        },
        label: {
            control: 'text',
            description: '폼 라벨 텍스트',
            table: {
                type: { summary: 'String' },
                defaultValue: { summary: "''" }
            }
        },
        showLabel: {
            control: 'boolean',
            description: '폼 라벨 표시 여부',
            defaultValue: true,
            table: {
                type: { summary: 'Boolean' },
                defaultValue: { summary: 'true' }
            }
        },
        name: {
            control: 'text',
            description: 'validation 체크 시 사용할 필드명',
            defaultValue: '',
            table: {
                type: { summary: 'String' },
                defaultValue: { summary: "''" }
            }
        },
        required: {
            control: 'boolean',
            description: '필수 입력 필드 표시 여부 (빨간 별표)',
            defaultValue: false,
            table: {
                type: { summary: 'Boolean' },
                defaultValue: { summary: 'false' }
            }
        },
        // Slots 정보
        'default': {
            description: '메인 콘텐츠 영역. 입력 필드나 기타 폼 요소들을 배치합니다.',
            table: {
                category: 'Slots',
                type: {
                    summary: 'slot'
                },
                defaultValue: {
                    summary: '{ tooltip: (text: string) => VNode }'
                }
            }
        },
        'outer-append': {
            description: '콘텐츠 영역 우측에 추가 요소를 배치. 주로 에러 메시지나 도움말 텍스트를 표시합니다.',
            table: {
                category: 'Slots',
                type: {
                    summary: 'slot'
                }
            }
        }
    },
};

const Template = (args, { argTypes }) => ({
    components: { SFormItem, SBtn },
    props: Object.keys(argTypes),
    setup() {
        return { args };
    },
    template: `
      <SFormItem v-bind="args">
        <template #default="{ handleChange, errors }">
          <input type="text" @input="handleChange" placeholder="Enter text" />
        </template>
        <template #outer-append="{ errors }">
          <span class="error-message" v-if="errors">{{ errors[0] }}</span>
        </template>
      </SFormItem>
    `,
});

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default = Template.bind({});
Default.args = {
    label: "Label",
    showLabel: true,
    required: true,
};

const tooltipTemplateCode = `
    <div style="width: 400px;">
      <SFormItem v-bind="args">
        <template #default="{ tooltip }">
          <component :is="tooltip('이것은 매우 긴 텍스트입니다. 이 텍스트는 컨테이너의 너비를 초과할 수 있으며, 자동으로 툴팁으로 처리됩니다. 마우스를 올리면 전체 내용을 볼 수 있습니다.')" />
          <component :is="tooltip('또 다른 긴 텍스트 예시입니다. 여러 개의 툴팁을 한 번에 사용할 수 있습니다.')" />
        </template>
      </SFormItem>
    </div>
`

// 툴팁 기능을 보여주는 스토리
const TooltipTemplate = (args) => ({
    components: { SFormItem },
    setup() {
        return { args };
    },
    template: tooltipTemplateCode,
});

TooltipTemplate.parameters = {
    docs: {
        source: {
            code: `<template>${tooltipTemplateCode}</template>`,
            language: 'html',
            type: 'auto',
        }
    },
};

const withTooltipTemplateCode = `
    <div>
      <SFormItem v-bind="args">
        <template #default="{ tooltip }">
          <component :is="tooltip('이것은 매우 긴 텍스트입니다. 이 텍스트는 컨테이너의 너비를 초과할 수 있으며, 자동으로 툴팁으로 처리됩니다. 마우스를 올리면 전체 내용을 볼 수 있습니다.')" />
        </template>
      </SFormItem>
    </div>
`
const withTooltipTemplate = (args) => ({
    components: { SFormItem },
    setup() {
        return { args };
    },
    template: withTooltipTemplateCode,
});

withTooltipTemplate.parameters = {
    docs: {
        source: {
            code: `<template>${withTooltipTemplateCode}</template>`,
            language: 'html',
            type: 'auto',
        }
    },
};
export const WithTooltip = TooltipTemplate.bind({});
WithTooltip.args = {
    label: "툴팁 예시",
    showLabel: true,
    required: false,
};

// 📝 다양한 사용 예시
const variousUsageTemplateCode = `
      <div style="max-width: 600px;">
        <!-- 기본 입력 필드 -->
        <SFormItem label="이름" :required="true">
          <input type="text" placeholder="이름을 입력하세요" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
        </SFormItem>

        <!-- 툴팁과 함께 사용 -->
        <SFormItem label="설명" class-name="custom-form-item">
          <template #default="{ tooltip }">
            <input type="text" placeholder="간단한 설명" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px; margin-right: 10px;" />
            <component :is="tooltip('이 필드는 상세한 설명을 입력하는 곳입니다. 최대 200자까지 입력 가능하며, 특수문자도 사용할 수 있습니다.')" />
          </template>
        </SFormItem>

        <!-- outer-append 슬롯 사용 -->
        <SFormItem label="이메일" :required="true">
          <template #default>
            <input type="email" placeholder="email@example.com" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
          </template>
          <template #outer-append>
            <span style="color: #666; font-size: 12px; margin-left: 10px;">올바른 이메일 형식으로 입력해주세요</span>
          </template>
        </SFormItem>

        <!-- 라벨 숨김 -->
        <SFormItem label="숨겨진 라벨" :show-label="false">
          <input type="text" placeholder="라벨이 보이지 않습니다" style="padding: 8px; border: 1px solid #ccc; border-radius: 4px;" />
        </SFormItem>
      </div>
    `
const VariousUsageTemplate = (args) => ({
    components: { SFormItem },
    setup() {
        return { args };
    },
    template: variousUsageTemplateCode,
});

export const VariousUsage = VariousUsageTemplate.bind({});
VariousUsage.args = {
    label: "다양한 사용법",
    showLabel: true,
    required: false,
};

VariousUsage.parameters = {
    docs: {
        source: {
            code: `<template>${variousUsageTemplateCode}</template>`,
            language: 'html',
            type: 'auto',
        }
    },
};
