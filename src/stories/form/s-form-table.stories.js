import { SFormTable, SFormItem, SBtn, SSubHeader, SModal } from '@/components';
import { ref, computed } from 'vue';
import * as yup from 'yup';
import { Field as VeeField, Form as VeeForm } from 'vee-validate';

export default {
    title: 'Form/SFormTable',
    component: SFormTable,
    tags: ['autodocs'],
    decorators: [
        () => ({
            template: '<div id="destination"><story/></div>'
        })
    ],
    parameters: {
        docs: {
            description: {
                component: 'Form table component with various layouts and modal integration'
            },
            source: {
                code: `
<template>
  <div class="view-wrapper">
    <div class="form-wrapper">
      <s-sub-header :show-cnt="false" title="기본 정보" class-name="sub-title" />
      <vee-form ref="formRef" :validation-schema="schema" :initial-values="formValues">
        <s-form-table>
          <s-form-item label="이름">
            <v-text-field v-model="info.name" variant="outlined" density="compact" hide-details="auto" type="text" placeholder="이름을 입력하세요" />
          </s-form-item>
          <s-form-item label="설명">
            <v-text-field v-model="info.description" variant="outlined" density="compact" hide-details="auto" type="text" placeholder="설명을 입력하세요" />
          </s-form-item>
          <vee-field v-slot="{ errors }" name="services">
            <s-form-item label="서비스">
              <s-btn height="30" variant="outlined" title="서비스 선택" />
              <template v-if="formValues.services.length">
                <div class="selected__chip">
                  <v-chip v-for="service in formValues.services" :key="service.id" class="chip" closable size="small" @click:close="onCloseChip(service.id, 'SERVICE')">
                    {{ service.name }}
                  </v-chip>
                </div>
              </template>
              <template v-if="errors.length" #outer-append>
                <span class="error-text-color">{{ errors.at(0) }}</span>
              </template>
            </s-form-item>
          </vee-field>
          <vee-field v-slot="{ errors }" name="skus">
            <s-form-item label="SKU">
              <s-btn height="30" variant="outlined" title="SKU 선택" />
              <template v-if="formValues.skus.length">
                <div class="selected__chip">
                  <v-chip v-for="sku in formValues.skus" :key="sku.id" class="chip" closable size="small" @click:close="onCloseChip(sku.id, 'SKU')">
                    {{ sku.name }}
                  </v-chip>
                </div>
              </template>
              <template v-if="errors.length" #outer-append>
                <span class="error-text-color">{{ errors.at(0) }}</span>
              </template>
            </s-form-item>
          </vee-field>
        </s-form-table>
      </vee-form>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import * as yup from 'yup';
import { Field as VeeField, Form as VeeForm } from 'vee-validate';

const info = ref({
  name: 'Sample Name',
  description: 'Description 1',
});

const formValues = ref({
  services: [
    { id: 1, name: 'Service 1' },
    { id: 2, name: 'Service 2' }
  ],
  skus: [
    { id: 1, name: 'SKU 1' },
    { id: 2, name: 'SKU 2' }
  ]
});

const schema = ref({
  services: yup.array().of(yup.object({ id: yup.number().required(), name: yup.string().required() })),
  skus: yup.array().of(yup.object({ id: yup.number().required(), name: yup.string().required() }))
});

const onClickAddService = () => {
  console.log('onClickAddService');
};
</script>
        `,
                language: 'html',
                type: 'auto',
            },
        }
    }
};

const Template = (args) => ({
    components: { SFormTable, SFormItem, SBtn, SSubHeader, VeeField, VeeForm },
    setup() {
        const info = ref({
            name: 'Sample Name',
            description: 'Description 1',
        });

        const formValues = ref({
            services: [
                { id: 1, name: 'Service 1' },
                { id: 2, name: 'Service 2' }
            ],
            skus: [
                { id: 1, name: 'SKU 1' },
                { id: 2, name: 'SKU 2' }
            ]
        });
        const formRef = ref(null);

        const schema = ref({
            services: yup.array().of(yup.object({ id: yup.number().required(), name: yup.string().required() })),
            skus: yup.array().of(yup.object({ id: yup.number().required(), name: yup.string().required() }))
        });

        const onClickAddService = () => {
            console.log('onClickAddService');
        };

        return {
            info,
            formValues,
            schema,
            formRef,
        };
    },
    template: `
        <div class="view-wrapper">
            <div class="form-wrapper">
                <s-sub-header :show-cnt="false" title="기본 정보" class-name="sub-title" />
                <vee-form ref="formRef" :validation-schema="schema" :initial-values="formValues">
                    <s-form-table>
                        <s-form-item label="이름">
                            <v-text-field v-model="info.name" variant="outlined" density="compact" hide-details="auto" type="text" placeholder="이름을 입력하세요" />
                        </s-form-item>
                        <s-form-item label="설명">
                            <v-text-field v-model="info.description" variant="outlined" density="compact" hide-details="auto" type="text" placeholder="설명을 입력하세요" />
                        </s-form-item>
                        <vee-field v-slot="{ errors }" name="services">
                            <s-form-item label="서비스">
                                <s-btn
                                    height="30"
                                    variant="outlined"
                                    title="서비스 선택"
                                    />
                                <template v-if="formValues.services.length">
                                    <div class="selected__chip">
                                        <v-chip
                                            v-for="service in formValues.services"
                                            :key="service.id"
                                            class="chip"
                                            closable
                                            size="small"
                                            @click:close="onCloseChip(service.id, 'SERVICE')"
                                            >
                                            {{ service.name }}
                                        </v-chip>
                                    </div>
                                </template>
                                <template v-if="errors.length" #outer-append>
                                    <span class="error-text-color">{{ errors.at(0) }}</span>
                                </template>
                            </s-form-item>
                        </vee-field>

                        <vee-field v-slot="{ errors }" name="skus">
                            <s-form-item label="SKU">
                                <s-btn
                                    height="30"
                                    variant="outlined"
                                    title="SKU 선택"
                                    />
                                <template v-if="formValues.skus.length">
                                    <div class="selected__chip">
                                        <v-chip
                                            v-for="sku in formValues.skus"
                                            :key="sku.id"
                                            class="chip"
                                            closable
                                            size="small"
                                            @click:close="onCloseChip(sku.id, 'SKU')"
                                        >
                                            {{ sku.name }}
                                        </v-chip>
                                    </div>
                                </template>
                                <template v-if="errors.length" #outer-append>
                                    <span class="error-text-color">{{ errors.at(0) }}</span>
                                </template>
                            </s-form-item>
                        </vee-field>
                    </s-form-table>
                </vee-form>
            </div>
        </div>
    `
});

export const Default = Template.bind({});

const HalfFormTemplateStr = `
<div class="form-wrapper">
    <s-sub-header class="sub-title" :show-cnt="false" title="리소스 정보"></s-sub-header>
    <SFormTable>
        <SFormItem label="Requests" content-class="w-100">
            <div class="form-item--half">
                <VTextField
                    v-model="resource.requestCpu"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                    type="number"
                    placeholder="CPU를 입력하세요"
                />
                <VTextField
                    v-model="resource.requestMemory"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                    type="number"
                    placeholder="Memory를 입력하세요"
                />
                <SBtn
                    color="black"
                    size="small"
                    title="버튼"
                />
            </div>
        </SFormItem>

        <SFormItem label="Limits" content-class="w-100">
            <div class="form-item--half">
                <VTextField
                    v-model="resource.limitCpu"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                    type="number"
                    placeholder="CPU를 입력하세요"
                />
                <VTextField
                    v-model="resource.limitMemory"
                    variant="outlined"
                    density="compact"
                    hide-details="auto"
                    type="number"
                    placeholder="Memory를 입력하세요"
                />
            </div>
        </SFormItem>
    </SFormTable>
</div>
`

const HalfFormTemplate = () => ({
    components: { SSubHeader, SFormTable, SFormItem, SBtn },
    setup() {
        return {
            resource: {
                requestCpu: null,
                requestMemory: null,
                limitCpu: null,
                limitMemory: null
            }
        };
    },
    template: HalfFormTemplateStr
});

export const HalfFormFormItems = HalfFormTemplate.bind({});
HalfFormFormItems.parameters = {
    docs: {
        description: {
            story: `
리소스 설정을 위한 폼 레이아웃 예시입니다.

**주요 특징**
- form-wrapper: 폼을 감싸는 컨테이너로, 흰색 배경과 테두리를 제공합니다.
- form-item--half: 설명과 입력 필드를 구분하여 배치합니다.
  - 왼쪽: 단위 설명 (CPU, Memory)
  - 오른쪽: 입력 필드 2개 배치

**레이아웃 구성**
- Requests 섹션
  - CPU와 Memory 입력
  - 각각의 단위 설명 포함
- Limits 섹션
  - CPU와 Memory 입력
  - 각각의 단위 설명 포함

**스타일링**
- 흰색 배경 (#FFFFFF)
- 테두리: 1px solid $s-default--gray-5
- 테두리 반경: 10px
- 내부 여백: 10px
- info-text-color: CPU/Memory 레이블 색상
            `
        }
    },
    source: {
        code: `<template>${HalfFormTemplateStr}</template>`,
        language: 'html',
        type: 'auto',
    }
};

const ModalFormTemplateStr = `
<div>
    <SBtn @click="openModal">리소스 설정</SBtn>

    <SModal
        v-model="isOpen"
        title="리소스 설정"
        size="large"
        teleport-id="destination"
    >
        <div class="form-wrapper">
            <s-sub-header class="sub-title" :show-cnt="false" title="기본 정보"></s-sub-header>
            <SFormTable>
                <SFormItem label="Requests" content-class="w-100" class-name="s-form__item--2line">
                    <div class="form-item--half">
                        <dl class="d-flex">
                            <dt><span class="info-text-color">CPU</span></dt>
                            <dd class="pl-1">단위: MilliCPU/1Core = 1000 MilliCPU</dd>
                        </dl>
                        <dl class="d-flex">
                            <dt><span class="info-text-color">Memory</span></dt>
                            <dd class="pl-1">단위: MiB</dd>
                        </dl>
                    </div>
                    <div class="form-item--half">
                        <VTextField
                            v-model="resource.requestCpu"
                            variant="outlined"
                            density="compact"
                            hide-details="auto"
                            type="number"
                            placeholder="CPU를 입력하세요"
                        />
                        <VTextField
                            v-model="resource.requestMemory"
                            variant="outlined"
                            density="compact"
                            hide-details="auto"
                            type="number"
                            placeholder="Memory를 입력하세요"
                        />
                    </div>
                </SFormItem>

                <SFormItem label="Limits" content-class="w-100" class-name="s-form__item--2line">
                    <div class="form-item--half">
                        <dl class="d-flex">
                            <dt><span class="info-text-color">CPU</span></dt>
                            <dd class="pl-1">단위: MilliCPU/1Core = 1000 MilliCPU</dd>
                        </dl>
                        <dl class="d-flex">
                            <dt><span class="info-text-color">Memory</span></dt>
                            <dd class="pl-1">단위: MiB</dd>
                        </dl>
                    </div>
                    <div class="form-item--half">
                        <VTextField
                            v-model="resource.limitCpu"
                            variant="outlined"
                            density="compact"
                            hide-details="auto"
                            type="number"
                            placeholder="CPU를 입력하세요"
                        />
                        <VTextField
                            v-model="resource.limitMemory"
                            variant="outlined"
                            density="compact"
                            hide-details="auto"
                            type="number"
                            placeholder="Memory를 입력하세요"
                        />
                    </div>
                </SFormItem>
            </SFormTable>
        </div>

        <template #footer>
            <div class="form__btn-wrapper">
                <SBtn
                    title="저장"
                    @click="onSubmit"
                />
                <SBtn
                    variant="outlined"
                    title="취소"
                    @click="isOpen = false"
                />
            </div>
        </template>
    </SModal>
</div>
`

const ModalFormTemplate = () => ({
    components: { SModal, SFormTable, SFormItem, SSubHeader, SBtn },
    setup() {
        const isOpen = ref(false)
        const resource = ref({
            requestCpu: null,
            requestMemory: null,
            limitCpu: null,
            limitMemory: null
        })

        const openModal = () => {
            isOpen.value = true
        }

        const onSubmit = () => {
            isOpen.value = false
        }

        return {
            isOpen,
            resource,
            openModal,
            onSubmit
        }
    },
    template: ModalFormTemplateStr
});

export const ModalFormExample = ModalFormTemplate.bind({});
ModalFormExample.parameters = {
    docs: {
        description: {
            story: `
모달 내부에 리소스 설정 폼을 배치한 예시입니다.

**주요 특징**
- SModal 컴포넌트를 사용하여 폼을 모달로 표시
- large 사이즈 모달 사용 (1300px)
- form-wrapper와 form-item--half 클래스를 활용한 레이아웃
- 하단 버튼 영역은 form__btn-wrapper 클래스로 스타일링

**모달 구성**
- 헤더: 리소스 설정 타이틀
- 본문: Requests와 Limits 입력 폼
- 푸터: 저장/취소 버튼

**사용 방법**
1. 버튼 클릭으로 모달 오픈
2. 폼 입력
3. 저장 또는 취소 버튼으로 모달 종료

**스타일링**
- 모달 사이즈: large (1300px)
- 입력 필드 최소 너비: 918px (large 모달 기준)
- 버튼 영역 중앙 정렬
- 버튼 최소 너비: 110px
            `
        },
        source: {
            code: `<template>${ModalFormTemplateStr}</template>`,
            language: 'html',
            type: 'auto',
        }
    }
};
