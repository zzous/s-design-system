import { SAdvancedSearch } from '@/components'
import { ref } from 'vue'

export default {
  components: { SAdvancedSearch },
  title: 'input/SAdvancedSearch',
  component: SAdvancedSearch,
  tags: ['autodocs'],
  argTypes: {
    headers: {
      control: 'object',
      description: 'data table의 경우 header 값을 의미합니다. 데이터 형태: { title: "", key: "" }',
      defaultValue: []
    },
    placeholder: { control: 'text', description: '입력 필드의 플레이스홀더', defaultValue: 'Input key:value' },
    values: { control: 'object', description: '선택된 값들의 배열', defaultValue: [] },
    items: { control: 'object', description: '검색 대상이 되는 데이터 배열', defaultValue: [] },
    density: {
      control: 'select',
      options: ['default', 'comfortable', 'compact'],
      description: '컴포넌트 사이즈',
      defaultValue: 'default'
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'plain', 'underlined'],
      description: '입력 필드의 스타일 변형',
      defaultValue: 'outlined'
    },
    width: { control: 'number', description: '입력 필드의 너비 (px)', defaultValue: '350px' },
    languageCode: { control: 'text', description: '언어 구분 문자열', defaultValue: 'ko' },
    // searchTag: {
    //   control: 'boolean',
    //   description: 'tag 검색 기능 사용 여부. true일 경우 datas의 모든 tag 값들을 items에 추가합니다.',
    //   defaultValue: false
    // }
  }
}

const Template = (args) => ({
  components: { SAdvancedSearch },
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
    <SAdvancedSearch
      v-bind="args"
      v-model:values="values"
      @click-search-null-tag="handleSearchNullTag"
      @delete-search-item="handleDeleteItem"
    />`
})

export const Default = Template.bind({})
Default.args = {
  headers: [
    { title: 'Name', key: 'name', align: 'start' },
    { title: 'Status', key: 'status', align: 'center' },
    { title: 'Type', key: 'type', align: 'center' },
    { title: 'Storage', key: 'storage', align: 'center' },
    { title: 'Age', key: 'age', align: 'center' },
    { title: 'Created', key: 'createdAt', align: 'center' }
  ],
  items: [
    {
      name: 'Instance-1',
      status: 'Running',
      type: 't2.micro',
      createdAt: "2023-10-11T13:45:36",
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
      createdAt: "2025-09-04T08:29:21",
      age: 20,
      storage: 200,
      tagList: [
        { tagKey: 'Environment', tagValue: 'Development' },
        { tagKey: 'Project', tagValue: 'API' }
      ]
    }
  ]
}

// export const WithTags = Template.bind({})
// WithTags.args = {
//   ...Default.args,
//   searchTag: true
// }
// WithTags.parameters = {
//   docs: {
//     description: {
//       story: `
// 태그 검색 기능이 활성화된 예시입니다.
// - \`searchTag: true\`로 설정하면 태그 검색 기능이 활성화됩니다.
// - 데이터의 tagList 속성에서 태그 정보를 추출하여 검색 옵션으로 제공합니다.
// - 태그 검색 시 "태그키:태그값" 형식으로 입력할 수 있습니다.
// - 미지정 태그 검색도 지원합니다.
//       `
//     }
//   }
// }

export const CustomStyle = Template.bind({})
CustomStyle.args = {
  ...Default.args,
  width: '400px',
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

export const WithEmptyValues = Template.bind({})
WithEmptyValues.args = {
  headers: [
    { title: 'Name', key: 'name', align: 'start' },
    { title: 'Status', key: 'status', align: 'center' },
    { title: 'Type', key: 'type', align: 'center' },
    { title: 'Storage', key: 'storage', align: 'center' },
    { title: 'Age', key: 'age', align: 'center' },
    { title: 'Description', key: 'description', align: 'center' }
  ],
  items: [
    {
      name: 'Instance-1',
      status: 'Running',
      type: 't2.micro',
      age: 10,
      storage: 100,
      description: null,
      tagList: [
        { tagKey: 'Environment', tagValue: 'Production' },
        { tagKey: 'Project', tagValue: null },
        { tagKey: 'Team', tagValue: '' },
        { tagKey: 'Cost', tagValue: undefined }
      ]
    },
    {
      name: 'Instance-2',
      status: null,
      type: 't2.small',
      age: 20,
      storage: undefined,
      description: '',
      tagList: [
        { tagKey: 'Environment', tagValue: 'Development' },
        { tagKey: 'Project', tagValue: 'API' },
        { tagKey: 'Owner', tagValue: null },
        { tagKey: 'Priority', tagValue: '' }
      ]
    },
    {
      name: 'Instance-3',
      status: 'Stopped',
      type: null,
      age: undefined,
      storage: 300,
      description: 'Test instance',
      tagList: [
        { tagKey: null, tagValue: 'Test' },
        { tagKey: 'Category', tagValue: undefined },
        { tagKey: '', tagValue: 'Empty key' }
      ]
    }
  ],
  searchTag: true
}
WithEmptyValues.parameters = {
  docs: {
    description: {
      story: `
빈 값(null, undefined, 빈 문자열)이 포함된 데이터 예시입니다.
- 일반 필드에서 null, undefined, 빈 문자열 값들이 '-'로 표시됩니다.
- 태그에서도 null, undefined, 빈 문자열 값들이 검색 대상에 포함됩니다.
- 검색 시 "필드명:-" 또는 "태그키:-"로 빈 값을 검색할 수 있습니다.
- 예시 검색어:
  - \`Status:- \` (null 값 검색)
  - \`Description:- \` (빈 문자열 검색)
  - \`Project:- \` (태그의 null 값 검색)
  - \`Team:- \` (태그의 빈 문자열 검색)
      `
    }
  }
}
