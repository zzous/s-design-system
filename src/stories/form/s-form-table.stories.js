import { SFormTable, SFormItem, SBtn, SSubHeader, SModal } from '@';
import { ref } from 'vue';

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
            }
        }
    }
};

const Template = () => ({
    components: { SFormTable, SFormItem, SBtn },
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
    template: `
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
    }
};

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
    template: `
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
                        <SFormItem label="Requests" content-class="w-100">
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

                        <SFormItem label="Limits" content-class="w-100">
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
        }
    }
};
