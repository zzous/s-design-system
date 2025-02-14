import { ref } from 'vue';
import { SFilterSelect } from '@';

export default {
  title: 'input/SFilterSelect',
  component: SFilterSelect,
  tags: ['autodocs'],
  argTypes: {
    itemTitle: {
      control: 'text',
      description: '아이템의 표시될 제목 필드명',
      defaultValue: 'title'
    },
    itemValue: {
      control: 'text',
      description: '아이템의 값 필드명',
      defaultValue: 'value'
    },
    items: {
      control: 'object',
      description: '선택 가능한 아이템 목록',
      defaultValue: []
    },
    label: {
      control: 'text',
      description: '입력 필드의 레이블',
      defaultValue: ''
    },
    modelValue: {
      control: 'object',
      description: '선택된 값들의 배열',
      defaultValue: []
    },
    displayText: {
      control: 'text',
      description: '버튼에 표시될 텍스트',
      defaultValue: '선택'
    },
    hasNullValue: {
      control: 'boolean',
      description: 'NULL 값 허용 여부',
      defaultValue: false
    },
    nullTitle: {
      control: 'text',
      description: 'NULL 값의 표시 텍스트',
      defaultValue: 'NULL'
    },
    nullValue: {
      control: 'text',
      description: 'NULL 값으로 사용될 값',
      defaultValue: 'NULL'
    },
    searchWord: {
      control: 'text',
      description: '검색어',
      defaultValue: ''
    },
    width: {
      control: 'text',
      description: '버튼의 너비',
      defaultValue: '316px'
    }
  }
};

const Template = (args) => ({
  components: { SFilterSelect },
  setup() {
    const selected = ref([]);
    const handleToggle = (value) => {
      console.log('Toggle:', value);
      selected.value = value;
    };
    return { args, selected, handleToggle };
  },
  template: `
    <div>
      <SFilterSelect
        v-bind="args"
        v-model="selected"
        @update:model-value="handleToggle"
      />
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {
  itemTitle: 'title',
  itemValue: 'value',
  items: [
    { title: '옵션 1', value: '1' },
    { title: '옵션 2', value: '2' },
    { title: '옵션 3', value: '3' },
    { title: '옵션 4', value: '4' },
    { title: '옵션 5', value: '5' }
  ],
  displayText: '선택하세요',
  variant: 'outlined',
  density: 'comfortable'
};

export const WithNullValue = Template.bind({});
WithNullValue.args = {
  ...Default.args,
  hasNullValue: true,
  nullTitle: '미지정',
  items: [
    { title: null, value: null },
    ...Default.args.items
  ]
};
WithNullValue.parameters = {
  docs: {
    description: {
      story: `
NULL 값을 포함한 예시입니다.
- \`hasNullValue: true\`로 설정하면 NULL 값 선택이 가능합니다.
- \`nullTitle\`로 NULL 값의 표시 텍스트를 설정할 수 있습니다.
- items에 \`{ title: null, value: null }\` 형태로 NULL 값을 추가할 수 있습니다.
      `
    }
  }
};

export const LongList = Template.bind({});
LongList.args = {
  ...Default.args,
  items: Array.from({ length: 100 }, (_, i) => ({
    title: `옵션 ${i + 1}`,
    value: `${i + 1}`
  }))
};
LongList.parameters = {
  docs: {
    description: {
      story: `
긴 목록을 가진 예시입니다.
- Virtual Scroll이 적용되어 많은 아이템도 효율적으로 렌더링됩니다.
- 검색 기능을 통해 원하는 아이템을 쉽게 찾을 수 있습니다.
      `
    }
  }
};
