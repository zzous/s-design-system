import { SFormGenerator, SFormTable } from '@/components';
import { ref, computed } from 'vue';
import * as yup from 'yup';
import { Form as VeeForm } from 'vee-validate';

export default {
    title: 'Form/SFormGenerator',
    component: SFormGenerator,
    tags: ['autodocs'],
    decorators: [
        () => ({
            template: '<div id="destination"><story/></div>'
        })
    ],
    parameters: {
        docs: {
            description: {
                component: '동적으로 폼 필드를 생성하는 컴포넌트. fields 배열을 통해 다양한 타입의 입력 필드를 자동으로 생성합니다.'
            }
        }
    },
    argTypes: {
        fields: {
            control: 'object',
            description: '폼 필드 설정 배열',
            table: {
                type: { summary: 'Array' },
                defaultValue: { summary: '[]' }
            }
        },
        modelValue: {
            control: 'object',
            description: '폼 데이터 객체',
            table: {
                type: { summary: 'Object' },
                defaultValue: { summary: '{}' }
            }
        },
        valuePath: {
            control: 'text',
            description: '값이 저장될 경로 (예: "accountData")',
            table: {
                type: { summary: 'String' },
                defaultValue: { summary: "''" }
            }
        }
    }
};

// 기본 예제
const basicTemplateCode = `
<template>
  <div class="view-wrapper">
    <div class="form-wrapper">
      <vee-form :validation-schema="schema" :initial-values="formValues">
        <s-form-table>
          <s-form-generator
            :fields="fields"
            v-model="formValues"
          />
        </s-form-table>
      </vee-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SFormGenerator, SFormTable } from '@/components';
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';

const fields = [
  {
    type: 'input',
    label: '이름',
    required: true,
    value: 'name',
    placeholder: '이름을 입력하세요'
  },
  {
    type: 'input',
    label: '이메일',
    required: true,
    value: 'email',
    placeholder: 'email@example.com'
  },
  {
    type: 'input',
    label: '비밀번호',
    required: true,
    value: 'password',
    encrypt: true,
    placeholder: '비밀번호를 입력하세요'
  },
  {
    type: 'checkbox',
    label: '약관 동의',
    required: true,
    value: 'agree',
    trueValue: 'Y',
    falseValue: 'N'
  },
  {
    type: 'select',
    label: '옵션 선택',
    value: 'option',
    options: [
      { title: '옵션 1', value: 'opt1' },
      { title: '옵션 2', value: 'opt2' },
      { title: '옵션 3', value: 'opt3' }
    ]
  },
  {
    type: 'radio',
    label: '성별',
    value: 'gender',
    options: [
      { title: '남성', value: 'male' },
      { title: '여성', value: 'female' }
    ]
  }
];

const formValues = ref({
  name: '',
  email: '',
  password: '',
  agree: 'N',
  option: '',
  gender: ''
});

const schema = yup.object({
  name: yup.string().required('이름을 입력해주세요'),
  email: yup.string().email('올바른 이메일 형식이 아닙니다').required('이메일을 입력해주세요'),
  password: yup.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다').required('비밀번호를 입력해주세요'),
  agree: yup.string().oneOf(['Y'], '약관에 동의해주세요')
});
</script>
`;

const BasicTemplate = () => ({
    components: { SFormGenerator, SFormTable },
    setup() {
        const fields = ref([
            {
                type: 'input',
                label: '이름',
                required: true,
                value: 'name',
                placeholder: '이름을 입력하세요'
            },
            {
                type: 'input',
                label: '이메일',
                required: true,
                value: 'email',
                placeholder: 'email@example.com'
            },
            {
                type: 'input',
                label: '비밀번호',
                required: true,
                value: 'password',
                encrypt: true,
                placeholder: '비밀번호를 입력하세요'
            },
            {
                type: 'checkbox',
                label: '약관 동의',
                required: true,
                value: 'agree',
                trueValue: 'Y',
                falseValue: 'N'
            },
            {
                type: 'select',
                label: '옵션 선택',
                value: 'option',
                options: [
                    { title: '옵션 1', value: 'opt1' },
                    { title: '옵션 2', value: 'opt2' },
                    { title: '옵션 3', value: 'opt3' }
                ]
            },
            {
                type: 'radio',
                label: '성별',
                value: 'gender',
                options: [
                    { title: '남성', value: 'male' },
                    { title: '여성', value: 'female' }
                ]
            }
        ]);

        const formValues = ref({
            name: '',
            email: '',
            password: '',
            agree: 'N',
            option: '',
            gender: ''
        });

        const schema = yup.object({
            name: yup.string().required('이름을 입력해주세요'),
            email: yup.string().email('올바른 이메일 형식이 아닙니다').required('이메일을 입력해주세요'),
            password: yup.string().min(8, '비밀번호는 최소 8자 이상이어야 합니다').required('비밀번호를 입력해주세요'),
            agree: yup.string().oneOf(['Y'], '약관에 동의해주세요')
        });

        return {
            fields,
            formValues,
            schema
        };
    },
    template: `
        <div class="view-wrapper">
            <div class="form-wrapper">
                <vee-form :validation-schema="schema" :initial-values="formValues">
                    <s-form-table>
                        <s-form-generator
                            :fields="fields"
                            v-model="formValues"
                        />
                    </s-form-table>
                </vee-form>
            </div>
        </div>
    `
});

export const Default = BasicTemplate.bind({});
Default.parameters = {
    docs: {
        source: {
            code: basicTemplateCode,
            language: 'html',
            type: 'auto'
        }
    }
};

// Number와 Duration 타입 예제
const numberDurationTemplateCode = `
<template>
  <div class="view-wrapper">
    <div class="form-wrapper">
      <vee-form :validation-schema="schema" :initial-values="formValues">
        <s-form-table>
          <s-form-generator
            :fields="fields"
            v-model="formValues"
          />
        </s-form-table>
      </vee-form>
      <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
        <h3>폼 데이터:</h3>
        <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SFormGenerator, SFormTable } from '@/components';
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';

const fields = [
  {
    type: 'number',
    label: '가용 메모리 용량(%)',
    required: true,
    value: 'percent',
    placeholder: '10',
    defaultValue: '10'
  },
  {
    type: 'composite',
    label: '지속시간',
    required: true,
    value: 'duration',
    placeholder: '지속시간을 입력하세요',
    composite: {
      valueField: 'value',
      optionField: 'unit',
      valueType: 'number',
      options: [
        { label: 'Second', value: 's', description: '초' },
        { label: 'Minute', value: 'm', description: '분' },
        { label: 'Hour', value: 'h', description: '시간' }
      ],
      optionItemTitle: 'label',
      optionItemValue: 'value'
    }
  },
  {
    type: 'composite',
    label: '집계 시간',
    value: 'interval',
    placeholder: '집계 시간을 입력하세요',
    composite: {
      valueField: 'value',
      optionField: 'unit',
      valueType: 'number',
      options: [
        { label: 'Second', value: 's' },
        { label: 'Minute', value: 'm' },
        { label: 'Hour', value: 'h' }
      ],
      optionItemTitle: 'label',
      optionItemValue: 'value'
    }
  }
];

const formValues = ref({
  percent: 10,
  duration: {
    value: 3,
    unit: 'm'
  },
  interval: {
    value: 2,
    unit: 'm'
  }
});

const schema = yup.object({
  percent: yup.number().min(0).max(100).required('가용 메모리 용량을 입력해주세요'),
  duration: yup.object({
    value: yup.number().required('지속시간 값을 입력해주세요'),
    unit: yup.string().required('단위를 선택해주세요')
  })
});
</script>
`;

const NumberDurationTemplate = () => ({
    components: { SFormGenerator, SFormTable },
    setup() {
        const fields = ref([
            {
                type: 'number',
                label: '가용 메모리 용량(%)',
                required: true,
                value: 'percent',
                placeholder: '10',
                defaultValue: '10'
            },
            {
                type: 'composite',
                label: '지속시간',
                required: true,
                value: 'duration',
                placeholder: '지속시간을 입력하세요',
                composite: {
                    valueField: 'value',
                    optionField: 'unit',
                    valueType: 'number',
                    options: [
                        { label: 'Second', value: 's', description: '초' },
                        { label: 'Minute', value: 'm', description: '분' },
                        { label: 'Hour', value: 'h', description: '시간' }
                    ],
                    optionItemTitle: 'label',
                    optionItemValue: 'value'
                }
            },
            {
                type: 'composite',
                label: '집계 시간',
                value: 'interval',
                placeholder: '집계 시간을 입력하세요',
                composite: {
                    valueField: 'value',
                    optionField: 'unit',
                    valueType: 'number',
                    options: [
                        { label: 'Second', value: 's' },
                        { label: 'Minute', value: 'm' },
                        { label: 'Hour', value: 'h' }
                    ],
                    optionItemTitle: 'label',
                    optionItemValue: 'value'
                }
            }
        ]);

        const formValues = ref({
            percent: 10,
            duration: {
                value: 3,
                unit: 'm'
            },
            interval: {
                value: 2,
                unit: 'm'
            }
        });

        const schema = yup.object({
            percent: yup.number().min(0).max(100).required('가용 메모리 용량을 입력해주세요'),
            duration: yup.object({
                value: yup.number().required('지속시간 값을 입력해주세요'),
                unit: yup.string().required('단위를 선택해주세요')
            })
        });

        return {
            fields,
            formValues,
            schema
        };
    },
    template: `
        <div class="view-wrapper">
            <div class="form-wrapper">
                <vee-form :validation-schema="schema" :initial-values="formValues">
                    <s-form-table>
                        <s-form-generator
                            :fields="fields"
                            v-model="formValues"
                        />
                    </s-form-table>
                </vee-form>
                <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
                    <h3>폼 데이터:</h3>
                    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
                </div>
            </div>
        </div>
    `
});

export const NumberAndDuration = NumberDurationTemplate.bind({});
NumberAndDuration.parameters = {
    docs: {
        description: {
            story: 'Number와 Composite 타입 필드를 사용하는 예제입니다. Composite 타입은 값과 옵션을 조합하여 사용할 수 있습니다 (예: 지속시간 = 숫자 + 단위).'
        },
        source: {
            code: numberDurationTemplateCode,
            language: 'html',
            type: 'auto'
        }
    }
};

// 중첩 경로 예제
const nestedPathTemplateCode = `
<template>
  <div class="view-wrapper">
    <div class="form-wrapper">
      <vee-form :validation-schema="schema" :initial-values="formValues">
        <s-form-table>
          <s-form-generator
            :fields="fields"
            v-model="formValues"
            value-path="accountData"
          />
        </s-form-table>
      </vee-form>
      <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
        <h3>폼 데이터:</h3>
        <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SFormGenerator, SFormTable } from '@/components';
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';

const fields = [
  {
    type: 'input',
    label: '계정 ID',
    required: true,
    value: 'cspAccountId',
    placeholder: '계정 ID를 입력하세요'
  },
  {
    type: 'input',
    label: '프로젝트 ID',
    required: true,
    value: 'serviceAccount.projectId',
    placeholder: '프로젝트 ID를 입력하세요',
    appendText: '이미 등록된 프로젝트 ID입니다'
  },
  {
    type: 'input',
    label: 'Private Key ID',
    required: true,
    value: 'serviceAccount.privateKeyId',
    placeholder: 'Private Key ID를 입력하세요'
  },
  {
    type: 'input',
    label: 'Private Key',
    required: true,
    value: 'serviceAccount.privateKey',
    encrypt: true,
    placeholder: 'Private Key를 입력하세요'
  },
  {
    type: 'input',
    label: 'Client ID',
    required: true,
    value: 'serviceAccount.clientId',
    placeholder: 'Client ID를 입력하세요'
  }
];

const formValues = ref({
  idx: 42,
  type: 'basic',
  accountData: {
    cspAccountId: '',
    serviceAccount: {
      projectId: '',
      privateKeyId: '',
      privateKey: '',
      clientId: ''
    }
  }
});

const schema = yup.object({
  accountData: yup.object({
    cspAccountId: yup.string().required('계정 ID를 입력해주세요'),
    serviceAccount: yup.object({
      projectId: yup.string().required('프로젝트 ID를 입력해주세요'),
      privateKeyId: yup.string().required('Private Key ID를 입력해주세요'),
      privateKey: yup.string().required('Private Key를 입력해주세요'),
      clientId: yup.string().required('Client ID를 입력해주세요')
    })
  })
});
</script>
`;

const NestedPathTemplate = () => ({
    components: { SFormGenerator, SFormTable },
    setup() {
        const fields = ref([
            {
                type: 'input',
                label: '계정 ID',
                required: true,
                value: 'cspAccountId',
                placeholder: '계정 ID를 입력하세요'
            },
            {
                type: 'input',
                label: '프로젝트 ID',
                required: true,
                value: 'serviceAccount.projectId',
                placeholder: '프로젝트 ID를 입력하세요',
                appendText: '이미 등록된 프로젝트 ID입니다'
            },
            {
                type: 'input',
                label: 'Private Key ID',
                required: true,
                value: 'serviceAccount.privateKeyId',
                placeholder: 'Private Key ID를 입력하세요'
            },
            {
                type: 'input',
                label: 'Private Key',
                required: true,
                value: 'serviceAccount.privateKey',
                encrypt: true,
                placeholder: 'Private Key를 입력하세요'
            },
            {
                type: 'input',
                label: 'Client ID',
                required: true,
                value: 'serviceAccount.clientId',
                placeholder: 'Client ID를 입력하세요'
            }
        ]);

        const formValues = ref({
            idx: 42,
            type: 'basic',
            accountData: {
                cspAccountId: '',
                serviceAccount: {
                    projectId: '',
                    privateKeyId: '',
                    privateKey: '',
                    clientId: ''
                }
            }
        });

        const schema = yup.object({
            accountData: yup.object({
                cspAccountId: yup.string().required('계정 ID를 입력해주세요'),
                serviceAccount: yup.object({
                    projectId: yup.string().required('프로젝트 ID를 입력해주세요'),
                    privateKeyId: yup.string().required('Private Key ID를 입력해주세요'),
                    privateKey: yup.string().required('Private Key를 입력해주세요'),
                    clientId: yup.string().required('Client ID를 입력해주세요')
                })
            })
        });

        return {
            fields,
            formValues,
            schema
        };
    },
    template: `
        <div class="view-wrapper">
            <div class="form-wrapper">
                <vee-form :validation-schema="schema" :initial-values="formValues">
                    <s-form-table>
                        <s-form-generator
                            :fields="fields"
                            v-model="formValues"
                            value-path="accountData"
                        />
                    </s-form-table>
                </vee-form>
                <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
                    <h3>폼 데이터:</h3>
                    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
                </div>
            </div>
        </div>
    `
});

export const NestedPath = NestedPathTemplate.bind({});
NestedPath.parameters = {
    docs: {
        description: {
            story: '중첩된 객체 경로를 사용하는 예제입니다. valuePath를 통해 기본 경로를 설정하고, 각 필드의 value에서 상대 경로를 지정할 수 있습니다.'
        },
        source: {
            code: nestedPathTemplateCode,
            language: 'html',
            type: 'auto'
        }
    }
};

// RuleParams 변환 예제
const ruleParamsTemplateCode = `
<template>
  <div class="view-wrapper">
    <div class="form-wrapper">
      <vee-form :validation-schema="schema" :initial-values="formValues">
        <s-form-table>
          <s-form-generator
            :fields="fields"
            v-model="formValues"
            value-path="ruleParams"
          />
        </s-form-table>
      </vee-form>
      <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
        <h3>폼 데이터:</h3>
        <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { SFormGenerator, SFormTable } from '@/components';
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';

// RuleParams 데이터 예시
const ruleParams = [
  {
    id: 1,
    name: 'duration',
    type: 'duration',
    defaultValue: '3',
    defaultUnitValue: 'm',
    label: '지속시간',
    description: '알람 발생 지속 시간',
    order: 0,
    units: [
      { label: 'Second', value: 's', description: '초', order: 0 },
      { label: 'Minute', value: 'm', description: '분', order: 1 },
      { label: 'Hour', value: 'h', description: '시간', order: 2 }
    ]
  },
  {
    id: 2,
    name: 'percent',
    type: 'integer',
    defaultValue: '10',
    label: '가용 메모리 용량(%)',
    description: '가용 메모리 용량이 설정 미만일 때',
    order: 0
  }
];

// RuleParams를 fields로 변환
const fields = computed(() => {
  return ruleParams
    .map(param => {
      const field = {
        type: param.type === 'integer' ? 'number' : param.type,
        label: param.label,
        required: false,
        value: param.name,
        placeholder: param.description,
        defaultValue: param.defaultValue,
        order: param.order || 0
      };

      if (param.type === 'duration' && param.units) {
        field.units = param.units.map(unit => ({
          label: unit.label,
          value: unit.value,
          description: unit.description
        }));
        field.unitItemTitle = 'label';
        field.unitItemValue = 'value';
        field.defaultUnitValue = param.defaultUnitValue;
      }

      return field;
    })
    .sort((a, b) => (a.order || 0) - (b.order || 0));
});

const formValues = ref({
  ruleParams: {
    duration: {
      value: 3,
      unit: 'm'
    },
    percent: 10
  }
});

const schema = yup.object({
  ruleParams: yup.object({
    duration: yup.object({
      value: yup.number().required('지속시간 값을 입력해주세요'),
      unit: yup.string().required('단위를 선택해주세요')
    }),
    percent: yup.number().min(0).max(100).required('가용 메모리 용량을 입력해주세요')
  })
});
</script>
`;

const RuleParamsTemplate = () => ({
    components: { SFormGenerator, SFormTable },
    setup() {
        const ruleParams = ref([
            {
                id: 1,
                name: 'duration',
                type: 'duration',
                defaultValue: '3',
                defaultUnitValue: 'm',
                label: '지속시간',
                description: '알람 발생 지속 시간',
                order: 0,
                units: [
                    { label: 'Second', value: 's', description: '초', order: 0 },
                    { label: 'Minute', value: 'm', description: '분', order: 1 },
                    { label: 'Hour', value: 'h', description: '시간', order: 2 }
                ]
            },
            {
                id: 2,
                name: 'percent',
                type: 'integer',
                defaultValue: '10',
                label: '가용 메모리 용량(%)',
                description: '가용 메모리 용량이 설정 미만일 때',
                order: 0
            }
        ]);

        const fields = computed(() => {
            return ruleParams.value
                .map(param => {
                    const field = {
                        type: param.type === 'integer' ? 'number' : param.type,
                        label: param.label,
                        required: false,
                        value: param.name,
                        placeholder: param.description,
                        defaultValue: param.defaultValue,
                        order: param.order || 0
                    };

                    if (param.type === 'duration' && param.units) {
                        field.units = param.units.map(unit => ({
                            label: unit.label,
                            value: unit.value,
                            description: unit.description
                        }));
                        field.unitItemTitle = 'label';
                        field.unitItemValue = 'value';
                        field.defaultUnitValue = param.defaultUnitValue;
                    }

                    return field;
                })
                .sort((a, b) => (a.order || 0) - (b.order || 0));
        });

        const formValues = ref({
            ruleParams: {
                duration: {
                    value: 3,
                    unit: 'm'
                },
                percent: 10
            }
        });

        const schema = yup.object({
            ruleParams: yup.object({
                duration: yup.object({
                    value: yup.number().required('지속시간 값을 입력해주세요'),
                    unit: yup.string().required('단위를 선택해주세요')
                }),
                percent: yup.number().min(0).max(100).required('가용 메모리 용량을 입력해주세요')
            })
        });

        return {
            fields,
            formValues,
            schema
        };
    },
    template: `
        <div class="view-wrapper">
            <div class="form-wrapper">
                <vee-form :validation-schema="schema" :initial-values="formValues">
                    <s-form-table>
                        <s-form-generator
                            :fields="fields"
                            v-model="formValues"
                            value-path="ruleParams"
                        />
                    </s-form-table>
                </vee-form>
                <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
                    <h3>폼 데이터:</h3>
                    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
                </div>
            </div>
        </div>
    `
});

export const RuleParamsExample = RuleParamsTemplate.bind({});
RuleParamsExample.parameters = {
    docs: {
        description: {
            story: 'RuleParams 데이터를 fields 구조로 변환하여 사용하는 예제입니다. ruleParamsToFields 유틸리티 함수를 사용하면 더 쉽게 변환할 수 있습니다.'
        },
        source: {
            code: ruleParamsTemplateCode,
            language: 'html',
            type: 'auto'
        }
    }
};

// FieldsMap을 사용한 동적 필드 예제
const fieldGroupsTemplateCode = `
<template>
  <div class="view-wrapper">
    <div class="form-wrapper">
      <vee-form :validation-schema="schema" :initial-values="formValues">
        <s-form-table>
          <s-form-generator
            :field-groups="fieldGroups"
            :group-selector="groupSelector"
            v-model="formValues"
            value-path="accountData"
          />
        </s-form-table>
      </vee-form>
      <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
        <h3>폼 데이터:</h3>
        <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SFormGenerator, SFormTable } from '@/components';
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';

// 그룹 선택 필드 설정
const groupSelector = {
  type: 'select',
  label: '계정 타입',
  required: true,
  value: 'accountType',
  options: [
    { title: 'Basic', value: 'basic' },
    { title: 'Billing', value: 'billing' },
    { title: 'Resource', value: 'resource' }
  ]
};

// 필드 그룹 설정
const fieldGroups = {
  basic: [
    {
      type: 'input',
      label: '계정 ID',
      required: true,
      value: 'cspAccountId',
      placeholder: '계정 ID를 입력하세요'
    },
    {
      type: 'input',
      label: '프로젝트 ID',
      required: true,
      value: 'serviceAccount.projectId',
      placeholder: '프로젝트 ID를 입력하세요',
      appendText: '이미 등록된 프로젝트 ID입니다'
    },
    {
      type: 'input',
      label: 'Private Key ID',
      required: true,
      value: 'serviceAccount.privateKeyId',
      placeholder: 'Private Key ID를 입력하세요'
    },
    {
      type: 'input',
      label: 'Private Key',
      required: true,
      value: 'serviceAccount.privateKey',
      encrypt: true,
      placeholder: 'Private Key를 입력하세요'
    },
    {
      type: 'input',
      label: 'Client ID',
      required: true,
      value: 'serviceAccount.clientId',
      placeholder: 'Client ID를 입력하세요'
    },
    {
      type: 'input',
      label: 'Client Email',
      required: true,
      value: 'serviceAccount.clientEmail',
      placeholder: 'Client Email을 입력하세요'
    },
    {
      type: 'input',
      label: 'Client Cert URL',
      required: true,
      value: 'serviceAccount.clientX509CertUrl',
      placeholder: 'Client Cert URL을 입력하세요'
    }
  ],
  billing: [
    {
      type: 'input',
      label: '계정 ID',
      required: true,
      value: 'cspAccountId',
      placeholder: '계정 ID를 입력하세요'
    },
    {
      type: 'input',
      label: '프로젝트 ID',
      required: true,
      value: 'serviceAccount.projectId',
      placeholder: '프로젝트 ID를 입력하세요',
      appendText: '이미 등록된 프로젝트 ID입니다'
    },
    {
      type: 'input',
      label: 'Private Key ID',
      required: true,
      value: 'serviceAccount.privateKeyId',
      placeholder: 'Private Key ID를 입력하세요'
    },
    {
      type: 'input',
      label: 'Private Key',
      required: true,
      value: 'serviceAccount.privateKey',
      encrypt: true,
      placeholder: 'Private Key를 입력하세요'
    },
    {
      type: 'input',
      label: 'Client ID',
      required: true,
      value: 'serviceAccount.clientId',
      placeholder: 'Client ID를 입력하세요'
    },
    {
      type: 'input',
      label: 'Client Email',
      required: true,
      value: 'serviceAccount.clientEmail',
      placeholder: 'Client Email을 입력하세요'
    },
    {
      type: 'input',
      label: 'Client Cert URL',
      required: true,
      value: 'serviceAccount.clientX509CertUrl',
      placeholder: 'Client Cert URL을 입력하세요'
    },
    {
      type: 'input',
      label: 'BigQuery 프로젝트 ID',
      value: 'bigquery.projectId',
      placeholder: 'BigQuery 프로젝트 ID를 입력하세요'
    },
    {
      type: 'input',
      label: 'BigQuery 데이터셋 ID',
      value: 'bigquery.datasetId',
      placeholder: 'BigQuery 데이터셋 ID를 입력하세요',
      appendText: '이미 등록된 BigQuery 데이터셋 ID입니다'
    },
    {
      type: 'input',
      label: '버킷 이름',
      value: 'gcp.bucketName',
      placeholder: '비용 내보내기 버킷 명을 입력하세요'
    }
  ],
  resource: [
    {
      type: 'input',
      label: '계정 ID',
      required: true,
      value: 'cspAccountId',
      placeholder: '계정 ID를 입력하세요'
    },
    {
      type: 'input',
      label: '프로젝트 ID',
      required: true,
      value: 'serviceAccount.projectId',
      placeholder: '프로젝트 ID를 입력하세요',
      appendText: '이미 등록된 프로젝트 ID입니다'
    },
    {
      type: 'input',
      label: 'Private Key ID',
      required: true,
      value: 'serviceAccount.privateKeyId',
      placeholder: 'Private Key ID를 입력하세요'
    },
    {
      type: 'input',
      label: 'Private Key',
      required: true,
      value: 'serviceAccount.privateKey',
      encrypt: true,
      placeholder: 'Private Key를 입력하세요'
    },
    {
      type: 'input',
      label: 'Client ID',
      required: true,
      value: 'serviceAccount.clientId',
      placeholder: 'Client ID를 입력하세요'
    },
    {
      type: 'input',
      label: 'Client Email',
      required: true,
      value: 'serviceAccount.clientEmail',
      placeholder: 'Client Email을 입력하세요'
    },
    {
      type: 'input',
      label: 'Client Cert URL',
      required: true,
      value: 'serviceAccount.clientX509CertUrl',
      placeholder: 'Client Cert URL을 입력하세요'
    }
  ]
};

const formValues = ref({
  accountData: {
    accountType: 'basic'
  }
});

const schema = yup.object({
  accountData: yup.object({
    accountType: yup.string().required('계정 타입을 선택해주세요'),
    cspAccountId: yup.string().required('계정 ID를 입력해주세요'),
    serviceAccount: yup.object({
      projectId: yup.string().required('프로젝트 ID를 입력해주세요'),
      privateKeyId: yup.string().required('Private Key ID를 입력해주세요'),
      privateKey: yup.string().required('Private Key를 입력해주세요'),
      clientId: yup.string().required('Client ID를 입력해주세요'),
      clientEmail: yup.string().email('올바른 이메일 형식이 아닙니다').required('Client Email을 입력해주세요'),
      clientX509CertUrl: yup.string().required('Client Cert URL을 입력해주세요')
    })
  })
});
</script>
`;

const FieldsMapTemplate = () => ({
    components: { SFormGenerator, SFormTable },
    setup() {
        const groupSelector = ref({
            type: 'select',
            label: '계정 타입',
            required: true,
            value: 'accountType',
            options: [
                { title: 'Basic', value: 'basic' },
                { title: 'Billing', value: 'billing' },
                { title: 'Resource', value: 'resource' }
            ]
        });

        const fieldGroups = ref({
            basic: [
                {
                    type: 'input',
                    label: '계정 ID',
                    required: true,
                    value: 'cspAccountId',
                    placeholder: '계정 ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: '프로젝트 ID',
                    required: true,
                    value: 'serviceAccount.projectId',
                    placeholder: '프로젝트 ID를 입력하세요',
                    appendText: '이미 등록된 프로젝트 ID입니다'
                },
                {
                    type: 'input',
                    label: 'Private Key ID',
                    required: true,
                    value: 'serviceAccount.privateKeyId',
                    placeholder: 'Private Key ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Private Key',
                    required: true,
                    value: 'serviceAccount.privateKey',
                    encrypt: true,
                    placeholder: 'Private Key를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Client ID',
                    required: true,
                    value: 'serviceAccount.clientId',
                    placeholder: 'Client ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Client Email',
                    required: true,
                    value: 'serviceAccount.clientEmail',
                    placeholder: 'Client Email을 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Client Cert URL',
                    required: true,
                    value: 'serviceAccount.clientX509CertUrl',
                    placeholder: 'Client Cert URL을 입력하세요'
                }
            ],
            billing: [
                {
                    type: 'input',
                    label: '계정 ID',
                    required: true,
                    value: 'cspAccountId',
                    placeholder: '계정 ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: '프로젝트 ID',
                    required: true,
                    value: 'serviceAccount.projectId',
                    placeholder: '프로젝트 ID를 입력하세요',
                    appendText: '이미 등록된 프로젝트 ID입니다'
                },
                {
                    type: 'input',
                    label: 'Private Key ID',
                    required: true,
                    value: 'serviceAccount.privateKeyId',
                    placeholder: 'Private Key ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Private Key',
                    required: true,
                    value: 'serviceAccount.privateKey',
                    encrypt: true,
                    placeholder: 'Private Key를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Client ID',
                    required: true,
                    value: 'serviceAccount.clientId',
                    placeholder: 'Client ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Client Email',
                    required: true,
                    value: 'serviceAccount.clientEmail',
                    placeholder: 'Client Email을 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Client Cert URL',
                    required: true,
                    value: 'serviceAccount.clientX509CertUrl',
                    placeholder: 'Client Cert URL을 입력하세요'
                },
                {
                    type: 'input',
                    label: 'BigQuery 프로젝트 ID',
                    value: 'bigquery.projectId',
                    placeholder: 'BigQuery 프로젝트 ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'BigQuery 데이터셋 ID',
                    value: 'bigquery.datasetId',
                    placeholder: 'BigQuery 데이터셋 ID를 입력하세요',
                    appendText: '이미 등록된 BigQuery 데이터셋 ID입니다'
                },
                {
                    type: 'input',
                    label: '버킷 이름',
                    value: 'gcp.bucketName',
                    placeholder: '비용 내보내기 버킷 명을 입력하세요'
                }
            ],
            resource: [
                {
                    type: 'input',
                    label: '계정 ID',
                    required: true,
                    value: 'cspAccountId',
                    placeholder: '계정 ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: '프로젝트 ID',
                    required: true,
                    value: 'serviceAccount.projectId',
                    placeholder: '프로젝트 ID를 입력하세요',
                    appendText: '이미 등록된 프로젝트 ID입니다'
                },
                {
                    type: 'input',
                    label: 'Private Key ID',
                    required: true,
                    value: 'serviceAccount.privateKeyId',
                    placeholder: 'Private Key ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Private Key',
                    required: true,
                    value: 'serviceAccount.privateKey',
                    encrypt: true,
                    placeholder: 'Private Key를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Client ID',
                    required: true,
                    value: 'serviceAccount.clientId',
                    placeholder: 'Client ID를 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Client Email',
                    required: true,
                    value: 'serviceAccount.clientEmail',
                    placeholder: 'Client Email을 입력하세요'
                },
                {
                    type: 'input',
                    label: 'Client Cert URL',
                    required: true,
                    value: 'serviceAccount.clientX509CertUrl',
                    placeholder: 'Client Cert URL을 입력하세요'
                }
            ]
        });

        const formValues = ref({
            accountData: {
                accountType: 'basic'
            }
        });

        const schema = yup.object({
            accountData: yup.object({
                accountType: yup.string().required('계정 타입을 선택해주세요'),
                cspAccountId: yup.string().required('계정 ID를 입력해주세요'),
                serviceAccount: yup.object({
                    projectId: yup.string().required('프로젝트 ID를 입력해주세요'),
                    privateKeyId: yup.string().required('Private Key ID를 입력해주세요'),
                    privateKey: yup.string().required('Private Key를 입력해주세요'),
                    clientId: yup.string().required('Client ID를 입력해주세요'),
                    clientEmail: yup.string().email('올바른 이메일 형식이 아닙니다').required('Client Email을 입력해주세요'),
                    clientX509CertUrl: yup.string().required('Client Cert URL을 입력해주세요')
                })
            })
        });

        return {
            groupSelector,
            fieldGroups,
            formValues,
            schema
        };
    },
    template: `
        <div class="view-wrapper">
            <div class="form-wrapper">
                <vee-form :validation-schema="schema" :initial-values="formValues">
                    <s-form-table>
                        <s-form-generator
                            :field-groups="fieldGroups"
                            :group-selector="groupSelector"
                            v-model="formValues"
                            value-path="accountData"
                        />
                    </s-form-table>
                </vee-form>
                <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
                    <h3>폼 데이터:</h3>
                    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
                </div>
            </div>
        </div>
    `
});

export const FieldGroupsExample = FieldsMapTemplate.bind({});
FieldGroupsExample.parameters = {
    docs: {
        description: {
            story: 'fieldGroups와 groupSelector를 사용하여 상위 선택에 따라 하위 필드가 동적으로 변경되는 예제입니다. 계정 타입을 선택하면 해당 타입에 맞는 필드들이 표시됩니다.'
        },
        source: {
            code: fieldGroupsTemplateCode,
            language: 'html',
            type: 'auto'
        }
    }
};

// Composite 타입 예제 (값 + 옵션 조합)
const compositeTemplateCode = `
<template>
  <div class="view-wrapper">
    <div class="form-wrapper">
      <vee-form :validation-schema="schema" :initial-values="formValues">
        <s-form-table>
          <s-form-generator
            :fields="fields"
            v-model="formValues"
            value-path="settings"
          />
        </s-form-table>
      </vee-form>
      <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
        <h3>폼 데이터:</h3>
        <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { SFormGenerator, SFormTable } from '@/components';
import { Form as VeeForm } from 'vee-validate';
import * as yup from 'yup';

const fields = [
  {
    type: 'composite',
    label: '지속시간',
    required: true,
    value: 'duration',
    placeholder: '지속시간을 입력하세요',
    composite: {
      valueField: 'value',
      optionField: 'unit',
      valueType: 'number',
      options: [
        { label: '초', value: 's' },
        { label: '분', value: 'm' },
        { label: '시간', value: 'h' },
        { label: '일', value: 'd' }
      ],
      optionItemTitle: 'label',
      optionItemValue: 'value'
    }
  },
  {
    type: 'composite',
    label: '데이터 크기',
    required: true,
    value: 'size',
    placeholder: '크기를 입력하세요',
    composite: {
      valueField: 'amount',
      optionField: 'unit',
      valueType: 'number',
      step: '0.1',
      options: [
        { label: 'KB', value: 'KB' },
        { label: 'MB', value: 'MB' },
        { label: 'GB', value: 'GB' },
        { label: 'TB', value: 'TB' }
      ],
      optionItemTitle: 'label',
      optionItemValue: 'value'
    }
  },
  {
    type: 'composite',
    label: '전송 속도',
    required: false,
    value: 'rate',
    placeholder: '속도를 입력하세요',
    composite: {
      valueField: 'speed',
      optionField: 'unit',
      valueType: 'number',
      min: 0,
      options: [
        { label: 'bps', value: 'bps' },
        { label: 'Kbps', value: 'Kbps' },
        { label: 'Mbps', value: 'Mbps' },
        { label: 'Gbps', value: 'Gbps' }
      ],
      optionItemTitle: 'label',
      optionItemValue: 'value'
    }
  }
];

const formValues = ref({
  settings: {
    duration: { value: 5, unit: 'm' },
    size: { amount: 100, unit: 'MB' },
    rate: { speed: 10, unit: 'Mbps' }
  }
});

const schema = yup.object({
  settings: yup.object({
    duration: yup.object({
      value: yup.number().required('지속시간 값을 입력해주세요'),
      unit: yup.string().required('단위를 선택해주세요')
    }),
    size: yup.object({
      amount: yup.number().min(0).required('크기를 입력해주세요'),
      unit: yup.string().required('단위를 선택해주세요')
    }),
    rate: yup.object({
      speed: yup.number().min(0),
      unit: yup.string()
    })
  })
});
</script>
`;

const CompositeTemplate = () => ({
    components: { SFormGenerator, SFormTable },
    setup() {
        const fields = ref([
            {
                type: 'composite',
                label: '지속시간',
                required: true,
                value: 'duration',
                placeholder: '지속시간을 입력하세요',
                composite: {
                    valueField: 'value',
                    optionField: 'unit',
                    valueType: 'number',
                    options: [
                        { label: '초', value: 's' },
                        { label: '분', value: 'm' },
                        { label: '시간', value: 'h' },
                        { label: '일', value: 'd' }
                    ],
                    optionItemTitle: 'label',
                    optionItemValue: 'value'
                }
            },
            {
                type: 'composite',
                label: '데이터 크기',
                required: true,
                value: 'size',
                placeholder: '크기를 입력하세요',
                composite: {
                    valueField: 'amount',
                    optionField: 'unit',
                    valueType: 'number',
                    step: '0.1',
                    options: [
                        { label: 'KB', value: 'KB' },
                        { label: 'MB', value: 'MB' },
                        { label: 'GB', value: 'GB' },
                        { label: 'TB', value: 'TB' }
                    ],
                    optionItemTitle: 'label',
                    optionItemValue: 'value'
                }
            },
            {
                type: 'composite',
                label: '전송 속도',
                required: false,
                value: 'rate',
                placeholder: '속도를 입력하세요',
                composite: {
                    valueField: 'speed',
                    optionField: 'unit',
                    valueType: 'number',
                    min: 0,
                    options: [
                        { label: 'bps', value: 'bps' },
                        { label: 'Kbps', value: 'Kbps' },
                        { label: 'Mbps', value: 'Mbps' },
                        { label: 'Gbps', value: 'Gbps' }
                    ],
                    optionItemTitle: 'label',
                    optionItemValue: 'value'
                }
            }
        ]);

        const formValues = ref({
            settings: {
                duration: { value: 5, unit: 'm' },
                size: { amount: 100, unit: 'MB' },
                rate: { speed: 10, unit: 'Mbps' }
            }
        });

        const schema = yup.object({
            settings: yup.object({
                duration: yup.object({
                    value: yup.number().required('지속시간 값을 입력해주세요'),
                    unit: yup.string().required('단위를 선택해주세요')
                }),
                size: yup.object({
                    amount: yup.number().min(0).required('크기를 입력해주세요'),
                    unit: yup.string().required('단위를 선택해주세요')
                }),
                rate: yup.object({
                    speed: yup.number().min(0),
                    unit: yup.string()
                })
            })
        });

        return {
            fields,
            formValues,
            schema
        };
    },
    template: `
        <div class="view-wrapper">
            <div class="form-wrapper">
                <vee-form :validation-schema="schema" :initial-values="formValues">
                    <s-form-table>
                        <s-form-generator
                            :fields="fields"
                            v-model="formValues"
                            value-path="settings"
                        />
                    </s-form-table>
                </vee-form>
                <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
                    <h3>폼 데이터:</h3>
                    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
                </div>
            </div>
        </div>
    `
});

// Templates 자동 변환 예제
export const TemplatesExample = () => ({
    components: { SFormGenerator, SFormTable, VeeForm },
    setup() {
        // 백엔드에서 받은 알람 템플릿 데이터
        const alarmTemplates = ref([
            {
                id: 1,
                name: 'CPU 사용률 알람',
                ruleParams: [
                    {
                        id: 1,
                        name: 'percent',
                        type: 'integer',
                        defaultValue: '80',
                        label: 'CPU 사용률 (%)',
                        description: 'CPU 사용률이 설정값 이상일 때',
                        order: 0
                    },
                    {
                        id: 2,
                        name: 'duration',
                        type: 'duration',
                        defaultValue: '5',
                        defaultUnitValue: 'm',
                        label: '지속시간',
                        description: '알람 발생 지속 시간',
                        order: 1,
                        units: [
                            { label: 'Second', value: 's', description: '초', order: 0 },
                            { label: 'Minute', value: 'm', description: '분', order: 1 },
                            { label: 'Hour', value: 'h', description: '시간', order: 2 }
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: '메모리 사용률 알람',
                ruleParams: [
                    {
                        id: 3,
                        name: 'memoryPercent',
                        type: 'integer',
                        defaultValue: '90',
                        label: '메모리 사용률 (%)',
                        description: '메모리 사용률이 설정값 이상일 때',
                        order: 0
                    },
                    {
                        id: 4,
                        name: 'duration',
                        type: 'duration',
                        defaultValue: '3',
                        defaultUnitValue: 'm',
                        label: '지속시간',
                        description: '알람 발생 지속 시간',
                        order: 1,
                        units: [
                            { label: 'Second', value: 's', description: '초', order: 0 },
                            { label: 'Minute', value: 'm', description: '분', order: 1 },
                            { label: 'Hour', value: 'h', description: '시간', order: 2 }
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: '디스크 사용률 알람',
                ruleParams: [
                    {
                        id: 5,
                        name: 'diskPercent',
                        type: 'integer',
                        defaultValue: '85',
                        label: '디스크 사용률 (%)',
                        description: '디스크 사용률이 설정값 이상일 때',
                        order: 0
                    },
                    {
                        id: 6,
                        name: 'path',
                        type: 'string',
                        defaultValue: '/',
                        label: '디스크 경로',
                        description: '모니터링할 디스크 경로',
                        order: 1
                    }
                ]
            }
        ]);

        const formValues = ref({
            idx: 42,
            type: 'alarm'
        });

        const schema = yup.object({
            ruleId: yup.number().required('알람 규칙을 선택해주세요')
        });

        return {
            alarmTemplates,
            formValues,
            schema
        };
    },
    template: `
        <div class="view-wrapper">
            <div class="form-wrapper">
                <vee-form :validation-schema="schema" :initial-values="formValues">
                    <s-form-table>
                        <s-form-generator
                            :templates="alarmTemplates"
                            template-label="알람 규칙 선택"
                            template-field="ruleId"
                            v-model="formValues"
                            value-path="ruleParams"
                        />
                    </s-form-table>
                </vee-form>
                <div style="margin-top: 20px; padding: 20px; background: #f5f5f5; border-radius: 4px;">
                    <h3>폼 데이터:</h3>
                    <p style="font-size: 12px; color: #666; margin-bottom: 10px;">
                        * templates prop으로 전달한 템플릿 데이터가 자동으로 변환됩니다<br/>
                        * templateLabel: "알람 규칙 선택" - 드롭다운 레이블<br/>
                        * templateField: "ruleId" - 선택된 템플릿 ID가 저장될 필드명<br/>
                        * 템플릿을 선택하면 해당 템플릿의 ruleParams로 폼 필드가 동적으로 변경됩니다
                    </p>
                    <pre>{{ JSON.stringify(formValues, null, 2) }}</pre>
                </div>
            </div>
        </div>
    `
});

TemplatesExample.parameters = {
    docs: {
        description: {
            story: '백엔드에서 받은 templates 데이터를 자동으로 변환하는 예제입니다. 템플릿을 선택하면 해당 템플릿의 필드들로 폼이 동적으로 변경됩니다.'
        }
    }
};
