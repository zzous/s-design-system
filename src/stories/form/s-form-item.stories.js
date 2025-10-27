import {SFormItem} from '@/components';
import SBtn from '../../components/button/SBtn.vue';
import { ref } from 'vue';

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
        contentItemClass: {
            control: 'text',
            description: '콘텐트 아이템 영역에 적용할 CSS 클래스명',
            defaultValue: '',
            table: {
                type: { summary: 'String' },
                defaultValue: { summary: "''" }
            }
        },
        singleLine: {
            control: 'boolean',
            description: 'tooltip과 아이콘을 한 줄로 표시 (flex-wrap: nowrap)',
            defaultValue: true,
            table: {
                type: { summary: 'Boolean' },
                defaultValue: { summary: 'true' }
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

// 📝 SingleLine 모드 - tooltip과 아이콘을 한 줄로 표시
const singleLineTemplateCode = `
  <div style="max-width: 800px;">
    <!-- SingleLine 모드: 짧은 텍스트 (내용만큼만 폭 차지) -->
    <SFormItem
      label="짧은 ID"
      :singleLine="true"
    >
      <template #default="{ tooltip }">
        <component :is="tooltip('abc123')" />
        <v-icon
          size="small"
          icon="mdi-content-copy"
          @click="copyToClipboard"
          style="cursor: pointer;"
        />
      </template>
    </SFormItem>

    <!-- SingleLine 모드: 긴 텍스트 (말줄임 적용) -->
    <SFormItem
      label="긴 스냅샷 ID"
      :singleLine="true"
      :required="true"
    >
      <template #default="{ tooltip }">
        <component :is="tooltip('c5a524c6-ec05-4456-9ba1-db178abc4567-1234567890abcdef')" />
        <v-icon
          size="small"
          icon="mdi-content-copy"
          @click="copyToClipboard"
          style="cursor: pointer;"
        />
      </template>
    </SFormItem>

    <!-- SingleLine 모드: 긴 텍스트와 여러 아이콘 -->
    <SFormItem
      label="긴 텍스트 예시"
      :singleLine="true"
    >
      <template #default="{ tooltip }">
        <component :is="tooltip('이것은 매우 긴 텍스트입니다. 이 텍스트는 컨테이너의 너비를 초과할 수 있지만, single-line 모드에서는 아이콘과 함께 한 줄에 표시됩니다. 텍스트가 잘리면 말줄임표(...)로 표시되며, 마우스를 올리면 전체 내용을 볼 수 있습니다.')" />
        <v-icon
          size="small"
          icon="mdi-content-copy"
          @click="copyToClipboard"
          style="cursor: pointer;"
        />
        <v-icon
          size="small"
          icon="mdi-open-in-new"
          style="cursor: pointer;"
        />
      </template>
    </SFormItem>

    <!-- SingleLine 비활성화 모드: 기본 flex-wrap 동작 -->
    <SFormItem
      label="줄바꿈 허용"
      :singleLine="false"
    >
      <template #default="{ tooltip }">
        <component :is="tooltip('이것은 매우 긴 텍스트입니다.')" />
        <component :is="tooltip('또 다른 긴 텍스트 예시입니다.')" />
        <component :is="tooltip('여러 개의 툴팁을 사용할 수 있습니다.')" />
        <v-icon
          size="small"
          icon="mdi-content-copy"
          style="cursor: pointer;"
        />
      </template>
    </SFormItem>

    <!-- 실제 사용 예시: 복사 기능 포함 -->
    <SFormItem
      label="URL"
      :singleLine="true"
    >
      <template #default="{ tooltip }">
        <component :is="tooltip('https://example.com/api/v1/users/123456789/profile/settings?tab=security&lang=ko')" />
        <v-icon
          size="small"
          icon="mdi-content-copy"
          @click="copyText"
          style="cursor: pointer; color: #1976d2;"
        />
      </template>
    </SFormItem>
  </div>
`

const SingleLineTemplate = (args) => ({
    components: { SFormItem },
    setup() {
        const copyToClipboard = () => {
            alert('복사 기능 실행!');
        };

        const copyText = () => {
            const text = 'https://example.com/api/v1/users/123456789/profile/settings?tab=security&lang=ko';
            navigator.clipboard.writeText(text).then(() => {
                alert('URL이 클립보드에 복사되었습니다!');
            });
        };

        return { args, copyToClipboard, copyText };
    },
    template: singleLineTemplateCode,
});

export const SingleLineMode = SingleLineTemplate.bind({});
SingleLineMode.args = {
    label: "Single Line 예시",
    showLabel: true,
    singleLine: true,
};

SingleLineMode.parameters = {
    docs: {
        description: {
            story: '`singleLine` 속성을 사용하면 tooltip과 아이콘을 항상 한 줄에 표시할 수 있습니다.\n\n- **짧은 텍스트**: 텍스트 길이만큼만 폭을 차지합니다\n- **긴 텍스트**: 말줄임표(...)로 처리되어 레이아웃이 깨지지 않습니다\n- **호버 시**: 전체 내용을 툴팁으로 확인할 수 있습니다'
        },
        source: {
            code: `<template>${singleLineTemplateCode}</template>

<script setup>
const copyToClipboard = () => {
  alert('복사 기능 실행!');
};

const copyText = () => {
  const text = 'https://example.com/api/v1/users/123456789/profile/settings?tab=security&lang=ko';
  navigator.clipboard.writeText(text).then(() => {
    alert('URL이 클립보드에 복사되었습니다!');
  });
};
</script>`,
            language: 'html',
            type: 'auto',
        }
    },
};
