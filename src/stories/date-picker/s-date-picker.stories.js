import { SDatePicker } from '@/components';

export default {
    // 스토리의 제목과 컴포넌트 지정
    title: 'input/SDatePicker',
    component: SDatePicker,
    tags: ['autodocs'],
    decorators: [
        (story) => ({
            components: { story },
            // 원하는 래퍼 스타일을 적용합니다.
            // 예를 들어, 배경색을 바꾸거나 패딩을 추가할 수 있습니다.
            template: '<div style="margin-bottom: 24rem;"><story /></div>',
        }),
    ],
    // 모든 스토리에 적용할 공통 argTypes 정의
    argTypes: {
        // modelValue: `v-model`의 값을 제어합니다.
        modelValue: {
            control: 'text',
            description: '컴포넌트의 값 (날짜, 날짜 범위 등).',
        },
        // format: 날짜 표시 형식을 제어합니다.
        format: {
            control: 'text',
            description: '날짜를 표시할 포맷.',
        },
        // minDate: 선택 가능한 최소 날짜를 제어합니다.
        minDate: {
            control: 'text',
            description: '선택 가능한 최소 날짜.',
        },
        // maxDate: 선택 가능한 최대 날짜를 제어합니다.
        maxDate: {
            control: 'text',
            description: '선택 가능한 최대 날짜.',
        },
        // clearable: 날짜 초기화 버튼 표시 여부를 제어합니다.
        clearable: {
            control: 'boolean',
            description: '선택된 날짜를 초기화하는 버튼 표시 여부.',
        },
        // enableTimePicker: 시간 선택 기능 활성화 여부를 제어합니다.
        enableTimePicker: {
            control: 'boolean',
            description: '시간 선택기 활성화 여부.',
        },
        // range: 날짜 범위 선택 모드 활성화 여부를 제어합니다.
        range: {
            control: 'boolean',
            description: '날짜 범위 선택 모드 활성화 여부.',
        },
        // lang: 언어를 제어합니다.
        lang: {
            control: { type: 'select', options: ['ko', 'en'] },
            description: '날짜 선택기의 언어 설정 (ko, en).',
        },
        // width: 컴포넌트의 너비를 제어합니다.
        width: {
            control: 'text',
            description: '컴포넌트의 너비 (예: "300px", "100%").',
        },
        // height: 컴포넌트의 높이를 제어합니다.
        height: {
            control: 'text',
            description: '컴포넌트의 높이 (예: "40px").',
        },
        // onChangeDate: 날짜 변경 시 발생하는 이벤트를 설명합니다.
        onChangeDate: {
            action: 'onChangeDate',
            description: '날짜가 변경될 때 발생하는 이벤트.',
        },
    },
};

// 기본 스토리
export const Default = {
    args: {
        // 기본 날짜를 지정하여 미리 보여줍니다.
        modelValue: '2025-08-21',
    },
};

// 범위 선택 스토리
export const Range = {
    args: {
        // range prop을 true로 설정하여 범위 선택 모드를 활성화합니다.
        range: true,
        // 날짜 범위의 초기값을 설정합니다.
        modelValue: ['2025-08-01', '2025-08-30'],
    },
};

// 시간 선택기 포함 스토리
export const WithTimePicker = {
    args: {
        // enableTimePicker prop을 true로 설정합니다.
        enableTimePicker: true,
        // 시간 정보가 포함된 날짜 형식을 사용합니다.
        format: 'yyyy-MM-dd HH:mm',
        modelValue: '2025-08-21 14:30',
    },
};

// 언어 변경 스토리
export const EnglishVersion = {
    args: {
        // lang prop을 'en'으로 설정하여 영어 버전을 보여줍니다.
        lang: 'en',
        modelValue: '2025-08-21',
    },
};

// 너비/높이 조정 스토리
export const CustomSize = {
    args: {
        // width와 height prop을 사용하여 크기를 변경합니다.
        width: '400px',
        height: '50px',
        modelValue: '2025-08-21',
    },
};
