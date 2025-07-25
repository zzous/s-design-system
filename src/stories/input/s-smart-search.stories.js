import { SSmartSearch } from '@/components'
import { ref } from 'vue'

export default {
  title: 'input/SSmartSearch',
  component: SSmartSearch,
  tags: ['autodocs'],
  argTypes: {
    headers: {
      control: 'object',
      description: 'data table의 경우 header 값을 의미합니다. 데이터 형태: { title: "", key: "" }',
      defaultValue: []
    },
    label: {
      control: 'text',
      description: '입력 필드의 레이블',
      defaultValue: undefined
    },
    multiple: {
      control: 'boolean',
      description: '다중 선택 가능 여부',
      defaultValue: true
    },
    placeholder: {
      control: 'text',
      description: '입력 필드의 플레이스홀더',
      defaultValue: 'Input key:value'
    },
    values: {
      control: 'object',
      description: '선택된 값들의 배열',
      defaultValue: []
    },
    items: {
      control: 'object',
      description: '검색 대상이 되는 데이터 배열',
      defaultValue: []
    },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: '입력 필드의 밀도',
      defaultValue: 'default'
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'plain', 'underlined'],
      description: '입력 필드의 스타일 변형',
      defaultValue: 'outlined'
    },
    width: {
      control: 'number',
      description: '입력 필드의 너비 (px)',
      defaultValue: 600
    },
    searchTag: {
      control: 'boolean',
      description: 'tag 검색 기능 사용 여부. true일 경우 datas의 모든 tag 값들을 items에 추가합니다.',
      defaultValue: false
    }
  }
}

const Template = (args) => ({
  components: { SSmartSearch },
  setup() {
    const values = ref([]);
    const handleSearchNullTag = () => {
      console.log('미지정 태그 검색 클릭');
    };
    const handleDeleteItem = (index) => {
      console.log('아이템 삭제:', index);
    };
    return { args, values, handleSearchNullTag, handleDeleteItem };
  },
  template: `
    <SSmartSearch
      v-bind="args"
      v-model:values="values"
      @click-search-null-tag="handleSearchNullTag"
      @delete-search-item="handleDeleteItem"
    />
  `
})

export const Default = Template.bind({})
Default.args = {
  headers: [
    { title: 'Name', key: 'name', align: 'start' },
    { title: 'Status', key: 'status', align: 'center' },
    { title: 'Type', key: 'type', align: 'center' },
    { title: 'Storage', key: 'storage', align: 'center' },
    { title: 'Age', key: 'age', align: 'center' }
  ],
  items: [
    {
      name: 'Instance-1',
      status: 'Running',
      type: 't2.micro',
      age: 10,
      storage: 100,
      tagList: [
        { tagKey: 'Environment', tagValue: 'Production' },
        { tagKey: 'Project', tagValue: 'Web' }
      ]
    },
    {
      name: 'Instance-2',
      status: 'Stopped',
      type: 't2.small',
      age: 20,
      storage: 200,
      tagList: [
        { tagKey: 'Environment', tagValue: 'Development' },
        { tagKey: 'Project', tagValue: 'API' }
      ]
    }
  ]
}

export const WithTags = Template.bind({})
WithTags.args = {
  ...Default.args,
  searchTag: true
}
WithTags.parameters = {
  docs: {
    description: {
      story: `
태그 검색 기능이 활성화된 예시입니다.
- \`searchTag: true\`로 설정하면 태그 검색 기능이 활성화됩니다.
- 데이터의 tagList 속성에서 태그 정보를 추출하여 검색 옵션으로 제공합니다.
- 태그 검색 시 "태그키:태그값" 형식으로 입력할 수 있습니다.
- 미지정 태그 검색도 지원합니다.
      `
    }
  }
}

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  ...Default.args,
  width: 400,
  density: 'comfortable',
  variant: 'filled',
  label: '리소스 검색'
}
CustomStyle.parameters = {
  docs: {
    description: {
      story: `
커스텀 스타일이 적용된 예시입니다.
- \`width\`: 입력 필드의 너비를 조절할 수 있습니다.
- \`density\`: 입력 필드의 밀도를 조절할 수 있습니다.
- \`variant\`: 입력 필드의 스타일을 변경할 수 있습니다.
- \`label\`: 입력 필드의 레이블을 설정할 수 있습니다.
      `
    }
  }
}
