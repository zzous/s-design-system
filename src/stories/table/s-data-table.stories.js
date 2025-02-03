import {SDataTable, SRefreshBtn, SSmartSearch} from '@';
import { ref } from 'vue';

export default {
    title: 'Table/SDataTable',
    component: SDataTable,
    tags: ['autodocs'],
    argTypes: {
        headers: {
            control: 'object',
            description: '테이블 헤더 정보',
            defaultValue: []
        },
        items: {
            control: 'object',
            description: '테이블 데이터',
            defaultValue: []
        },
        itemValue: {
            control: 'text',
            description: '각 행을 식별하는 고유 키',
            defaultValue: 'id'
        },
        showSelect: {
            control: 'boolean',
            description: '체크박스 선택 기능 사용 여부',
            defaultValue: false
        },
        disableSort: {
            control: 'boolean',
            description: '정렬 기능 비활성화 여부',
            defaultValue: false
        },
        selectedItems: {
            control: 'object',
            description: '선택된 항목들',
            defaultValue: []
        },
        search: {
            control: 'text',
            description: '검색어 (주의: 서버 사이드 페이지네이션 사용 시에는 이 prop을 사용하지 마세요. 서버에서 검색 로직을 처리해야 합니다.)',
            defaultValue: ''
        },
        options: {
            control: 'object',
            description: `테이블 옵션 정보
- pageCnt: 서버 사이드 페이지네이션을 사용할 경우에만 설정하세요. 클라이언트 사이드 페이지네이션의 경우 자동으로 계산됩니다.`,
            defaultValue: {}
        },
        highlight: {
            control: 'object',
            description: `행 강조 표시를 위한 설정

**사용 가능한 클래스**
- s-highlight-warning: 노란색 배경
- s-highlight-error: 빨간색 배경
- s-highlight-success: 초록색 배경`,
            defaultValue: null
        }
    }
};

const defaultCode = `
<template>
  <div>
    <div class="search">
      <v-text-field
        v-model="searchValue"
        class="search__text-field"
        variant="outlined"
        density="comfortable"
        hide-details
        placeholder="리소스 명으로 검색"
        prepend-inner-icon="mdi-magnify"
      />
      <SRefreshBtn :on-click-refresh="() => refresh(page)" />
    </div>
    <div>
      <SDataTable
        :headers="headers"
        :items="items"
        :page="page"
        :search="searchValue"
        @update:page="updatePage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const page = ref(1)
const searchValue = ref('')

const headers = [
  {
    title: "VPC Name",
    key: 'vpcName',
    width: 300,
    align: 'start',
  },
  {
    title: "VPC ID",
    key: 'vpcId',
    width: 250,
    align: 'center',
  },
  {
    title: "Cloud Type",
    key: 'cloudType',
    width: 150,
    align: 'center',
  },
  {
    title: "Region",
    key: 'regionCode',
    width: 170,
    align: 'center',
  }
]

const items = [
  {
    "vpcName": "default-vpc",
    "vpcId": "vpc-1001",
    "cloudType": "AWS",
    "regionCode": "us-west-1"
  },
  {
    "vpcName": "first-vpc",
    "vpcId": "vpc-1011",
    "cloudType": "GCP",
    "regionCode": "us-west-2"
  }
]

const updatePage = (newPage) => {
  if (page.value !== newPage) {
    page.value = newPage
  }
}

const refresh = (pageNum) => {
  const tempItems = [...items]
  items.length = 0

  setTimeout(() => {
    items.push(...tempItems)
    updatePage(pageNum)
  }, 500)
}
</script>

<style scoped>
.search {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.search__text-field {
  width: 300px;
}
</style>
`

const Template = (args) => ({
    components: { SDataTable, SRefreshBtn },
    setup() {
        const headers = args.headers;
        const page = ref(1);
        const items = ref([...args.items]);
        const searchValue = ref('');

        const updatePage = (newPage) => {
            if (page.value !== newPage) {
                page.value = newPage;
            }
        };

        const refresh = (pageNum) => {
            const tempItems = [...items.value];
            items.value = [];

            setTimeout(() => {
                items.value = tempItems;
                console.log(pageNum, page.value)
                updatePage(pageNum);
            }, 500);
        };

        return {
            args,
            page,
            updatePage,
            refresh,
            headers,
            items,
            searchValue
        };
    },
    template: `
    <div class="search">
        <v-text-field
            v-model="searchValue"
            class="search__text-field"
            variant="outlined"
            density="comfortable"
            hide-details
            placeholder="리소스 명으로 검색"
            prepend-inner-icon="mdi-magnify"
            />
        <SRefreshBtn :on-click-refresh="() => refresh(page)" />
    </div>
    <div>
        <SDataTable
            v-bind="args"
            :headers="headers"
            :items="items"
            :page="page"
            :search="searchValue"
            @update:page="updatePage"
        />
    </div>
    `,
});

export const Default = Template.bind({});
Default.args = {
    headers: [
        {
            title: "VPC Name",
            key: 'vpcName',
            width: 300,
            align: 'start',
        },
        {
            title: "VPC ID",
            key: 'vpcId',
            width: 250,
            align: 'center',
        },
        {
            title: "Cloud Type",
            key: 'cloudType',
            width: 150,
            align: 'center',
        },
        {
            title: "Region",
            key: 'regionCode',
            width: 170,
            align: 'center',
        }
    ],
    items: [
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1001",
            "cloudType": "AWS",
            "regionCode": "us-west-1"
        },
        {
            "vpcName": "first-vpc",
            "vpcId": "vpc-1011",
            "cloudType": "GCP",
            "regionCode": "us-west-2"
        }
    ]
};

Default.parameters = {
    docs: {
        source: {
            code: defaultCode,
            language: 'vue',
            type: 'auto',
        },
        description: {
            story: `
기본적인 데이터 테이블 사용 예시입니다.

**주요 기능**
- 검색 기능
- 새로고침 기능
- 페이지네이션
- 정렬 기능

**컴포넌트 구성**
- 검색 필드 (v-text-field)
- 새로고침 버튼 (SRefreshBtn)
- 데이터 테이블 (SDataTable)

**데이터 바인딩**
- \`headers\`: 테이블 헤더 정보
- \`items\`: 테이블 데이터
- \`page\`: 현재 페이지
- \`search\`: 검색어
            `
        }
    }
};

const selectableCode = `
<template>
  <div>
    <div class="search">
      <v-text-field
        v-model="searchValue"
        class="search__text-field"
        variant="outlined"
        density="comfortable"
        hide-details
        placeholder="리소스 명으로 검색"
        prepend-inner-icon="mdi-magnify"
      />
      <SRefreshBtn :on-click-refresh="() => refresh(page)" />
    </div>
    <div>
      <SDataTable
        :headers="headers"
        :items="items"
        :page="page"
        :search="searchValue"
        :show-select="true"
        :item-value="itemValue"
        v-model="selectedItems"
        @update:page="updatePage"
      />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const page = ref(1)
const searchValue = ref('')
const selectedItems = ref([])
const itemValue = 'vpcId'

const headers = [
  {
    title: "VPC Name",
    key: 'vpcName',
    width: 300,
    align: 'start',
  },
  {
    title: "VPC ID",
    key: 'vpcId',
    width: 250,
    align: 'center',
  },
  {
    title: "Cloud Type",
    key: 'cloudType',
    width: 150,
    align: 'center',
  },
  {
    title: "Region",
    key: 'regionCode',
    width: 170,
    align: 'center',
  }
]

const items = [
  {
    "vpcName": "default-vpc",
    "vpcId": "vpc-1001",
    "cloudType": "AWS",
    "regionCode": "us-west-1",
    "selectable": true
  },
  {
    "vpcName": "first-vpc",
    "vpcId": "vpc-1000",
    "cloudType": "GCP",
    "regionCode": "us-west-2",
    "selectable": false
  }
]

const updatePage = (newPage) => {
  if (page.value !== newPage) {
    page.value = newPage
  }
}

const refresh = (pageNum) => {
  const tempItems = [...items]
  items.length = 0

  setTimeout(() => {
    items.push(...tempItems)
    updatePage(pageNum)
  }, 500)
}
</script>

<style scoped>
.search {
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
}

.search__text-field {
  width: 300px;
}
</style>
`

export const SelectableTable = Template.bind({})
SelectableTable.args = {
    showSelect: true,
    itemValue: 'vpcId',
    items: [
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1001",
            "cloudType": "AWS",
            "regionCode": "us-west-1",
            "selectable": true
        },
        {
            "vpcName": "first-vpc",
            "vpcId": "vpc-1000",
            "cloudType": "GCP",
            "regionCode": "us-west-2",
            "selectable": false
        }
    ]
}

SelectableTable.parameters = {
    docs: {
        source: {
            code: selectableCode,
            language: 'vue',
            type: 'auto',
        },
        description: {
            story: `
선택 가능한 테이블을 구현할 수 있습니다.
- \`showSelect\`: 체크박스를 표시합니다.
- \`selectStrategy\`: 선택 전략을 설정합니다. ('page' | 'single' | 'all')
  - page: 현재 페이지의 항목만 선택
  - single: 단일 항목만 선택
  - all: 모든 페이지의 항목 선택 가능
- \`itemValue\`: 선택된 항목을 식별하는 고유 키를 지정합니다. (예: 'vpcId')
- \`modelValue\`: v-model을 통해 선택된 항목들의 배열을 관리합니다.
  - 선택된 항목의 \`itemValue\`로 지정된 값들의 배열이 반환됩니다.
  - 예: ['vpc-1001', 'vpc-1002']
- \`return-object\`: 선택된 항목의 반환 형식을 설정합니다.
  - true: 선택된 항목의 전체 객체를 반환합니다.
  - false: 선택된 항목의 \`itemValue\` 값만 반환합니다.
  - 예시) return-object가 true일 때:
    \`\`\`json
    [{
      "vpcName": "default-vpc",
      "vpcId": "vpc-1001",
      "cloudType": "AWS",
      "regionCode": "us-west-1"
    }]
    \`\`\`

\`selectable\` 속성을 통해 개별 항목의 선택 가능 여부를 제어할 수 있습니다.
            `
        }
    }
}

const disabledSortCode = `
<template>
  <SDataTable
    :headers="headers"
    :items="items"
    :disable-sort="true"
  />
</template>

<script setup>
const headers = [
  { title: "VPC Name", key: 'vpcName', width: 300, align: 'start' },
  { title: "VPC ID", key: 'vpcId', width: 250, align: 'center' },
  { title: "Cloud Type", key: 'cloudType', width: 150, align: 'center' },
  { title: "Region", key: 'regionCode', width: 170, align: 'center' }
]

const items = [
  {
    "vpcName": "default-vpc",
    "vpcId": "vpc-1001",
    "cloudType": "AWS",
    "regionCode": "us-west-1"
  },
  {
    "vpcName": "first-vpc",
    "vpcId": "vpc-1011",
    "cloudType": "GCP",
    "regionCode": "us-west-2"
  }
]
</script>
`

export const DisabledSort = Template.bind({});
DisabledSort.args = {
    ...Default.args,
    disableSort: true
};

DisabledSort.parameters = {
    docs: {
        source: {
            code: disabledSortCode,
            language: 'vue',
            type: 'auto',
        },
        description: {
            story: `
정렬 기능이 비활성화된 테이블입니다.
- \`disable-sort\` prop을 true로 설정하면 모든 컬럼의 정렬 기능이 비활성화됩니다.
            `
        }
    }
};

const customRowspanCode = `
<template>
  <SDataTable
    :headers="headers"
    :items="items"
    :disable-sort="true"
    item-value="col1"
  >
    <template #body>
      <tr>
        <td rowspan="3" class="v-data-table-column--align-start">1</td>
      </tr>
      <tr>
        <td class="v-data-table-column--align-center">2</td>
        <td class="v-data-table-column--align-center">2</td>
      </tr>
      <tr>
        <td class="v-data-table-column--align-center">3</td>
        <td class="v-data-table-column--align-center">3</td>
      </tr>
    </template>
  </SDataTable>
</template>

<script setup>
const headers = [
  { title: "Column 1", key: 'col1', width: 300, align: 'start' },
  { title: "Column 2", key: 'col2', width: 250, align: 'center' },
  { title: "Column 3", key: 'col3', width: 150, align: 'center' }
]

const items = [
  { col1: 'Row 1', col2: 'Data 1-2', col3: 'Data 1-3' },
  { col1: 'Row 2', col2: 'Data 2-2', col3: 'Data 2-3' },
  { col1: 'Row 3', col2: 'Data 3-2', col3: 'Data 3-3' }
]
</script>
`

const Template3 = (args) => ({
  components: { SDataTable },
  setup() {
    return { args }
  },
  template: `
    <SDataTable v-bind="args">
      <template #body>
        <tr>
          <td rowspan="3" class="v-data-table-column--align-start">1</td>
        </tr>
        <tr>
          <td class="v-data-table-column--align-center">2</td>
          <td class="v-data-table-column--align-center">2</td>
        </tr>
        <tr>
          <td class="v-data-table-column--align-center">3</td>
          <td class="v-data-table-column--align-center">3</td>
        </tr>
      </template>
    </SDataTable>
  `
})

export const CustomRowspan = Template3.bind({});
CustomRowspan.args = {
    headers: [
        {
            title: "Column 1",
            key: 'col1',
            width: 300,
            align: 'start',
        },
        {
            title: "Column 2",
            key: 'col2',
            width: 250,
            align: 'center',
        },
        {
            title: "Column 3",
            key: 'col3',
            width: 150,
            align: 'center',
        }
    ],
    items: [
        { col1: 'Row 1', col2: 'Data 1-2', col3: 'Data 1-3' },
        { col1: 'Row 2', col2: 'Data 2-2', col3: 'Data 2-3' },
        { col1: 'Row 3', col2: 'Data 3-2', col3: 'Data 3-3' }
    ],
    disableSort: true,
};

CustomRowspan.parameters = {
    docs: {
        source: {
            code: customRowspanCode,
            language: 'vue',
            type: 'auto',
        },
        description: {
            story: `
커스텀 rowspan을 사용하는 테이블입니다.
- \`body\` 슬롯을 사용하여 테이블 본문을 완전히 커스터마이징할 수 있습니다.
- rowspan 속성을 사용하여 셀을 병합할 수 있습니다.
- 각 셀의 정렬은 \`v-data-table-column--align-{start|center|end}\` 클래스를 사용합니다.
            `
        }
    }
};

const Template4 = (args) => ({
    components: { SDataTable },
    setup() {
        const headers = args.headers;
        const page = ref(1);
        const items = ref([...args.items]);
        const searchValue = ref('');

        const updatePage = (newPage) => {
            if (page.value !== newPage) {
                page.value = newPage;
            }
        };

        const refresh = (pageNum) => {
            const tempItems = [...items.value];
            items.value = [];

            setTimeout(() => {
                items.value = tempItems;
                console.log(pageNum, page.value)
                updatePage(pageNum);
            }, 500);
        };

        return {
            args,
            page,
            updatePage,
            refresh,
            headers,
            items,
            searchValue
        };
    },
    template: `
    <div>
        <SDataTable
            v-bind="args"
            :headers="headers"
            :items="items"
            :page="page"
            :search="searchValue"
            @update:page="updatePage"
        >
            <template #expanded-row="{ item }">
                <tr>
                    <td :colspan="headers.length">
                        <div class="pa-4">
                            <h4>상세 정보</h4>
                            <div class="mt-2">
                                <p><strong>CIDR Block:</strong> {{ item.details.cidrBlock }}</p>
                                <p><strong>State:</strong> {{ item.details.state }}</p>
                                <div v-if="item.details.tags.length">
                                    <strong>Tags:</strong>
                                    <ul>
                                        <li v-for="tag in item.details.tags" :key="tag.key">
                                            {{ tag.key }}: {{ tag.value }}
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </template>
        </SDataTable>
    </div>
    `
});

export const ExpandableTable = Template4.bind({});
ExpandableTable.args = {
    headers: [
        {
            title: "VPC Name",
            key: 'vpcName',
            width: 300,
            align: 'start',
        },
        {
            title: "VPC ID",
            key: 'vpcId',
            width: 250,
            align: 'center',
        },
        {
            title: "Cloud Type",
            key: 'cloudType',
            width: 150,
            align: 'center',
        },
        {
            title: "Region",
            key: 'regionCode',
            width: 170,
            align: 'center',
        }
    ],
    items: [
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1001",
            "cloudType": "AWS",
            "regionCode": "us-west-1",
            "details": {
                "cidrBlock": "172.31.0.0/16",
                "state": "available",
                "tags": [
                    { "key": "Environment", "value": "Production" }
                ]
            }
        },
        {
            "vpcName": "first-vpc",
            "vpcId": "vpc-1002",
            "cloudType": "GCP",
            "regionCode": "us-west-2",
            "details": {
                "cidrBlock": "10.0.0.0/16",
                "state": "available",
                "tags": [
                    { "key": "Environment", "value": "Development" }
                ]
            }
        }
    ],
    showExpand: true,
    expandOnClick: true,
    itemValue: 'vpcId',
};

ExpandableTable.parameters = {
    docs: {
        description: {
            story: `
\`expanded\` 속성을 사용하여 행을 확장할 수 있습니다.
- \`showExpand\`: 확장 토글 버튼을 표시합니다.
- \`expandOnClick\`: 행 클릭 시 확장 여부를 설정합니다.
- \`expanded-row\` 슬롯을 사용하여 확장된 행의 내용을 커스터마이징할 수 있습니다.
            `
        }
    }
};

const TableWithSearchTemplate = (args) => ({
    components: { SDataTable, SSmartSearch },
    setup() {
        const searchValues = ref([])
        const page = ref(1)

        const headers = [
            { title: "Instance Name", key: 'instanceName', align: 'start' },
            { title: "Instance Type", key: 'instanceType', align: 'center' },
            { title: "Status", key: 'status', align: 'center' },
            { title: "Region", key: 'region', align: 'center' }
        ]

        const items = [
            {
                instanceName: 'prod-server-01',
                instanceType: 't3.large',
                status: 'running',
                region: 'ap-northeast-2',
                tagList: [
                    { tagKey: 'Environment', tagValue: 'Production' },
                    { tagKey: 'Project', tagValue: 'WebService' }
                ]
            },
            {
                instanceName: 'dev-server-01',
                instanceType: 't3.medium',
                status: 'stopped',
                region: 'ap-northeast-2',
                tagList: [
                    { tagKey: 'Environment', tagValue: 'Development' },
                    { tagKey: 'Project', tagValue: 'TestEnv' }
                ]
            },
            {
                instanceName: 'staging-server-01',
                instanceType: 't3.small',
                status: 'running',
                region: 'ap-northeast-2',
                tagList: [
                    { tagKey: 'Environment', tagValue: 'Staging' }
                ]
            }
        ]

        return {
            args,
            headers,
            items,
            searchValues,
            page
        }
    },
    template: `
        <div>
            <div class="search">
                <SSmartSearch
                    :items="headers"
                    class="search__text-field"
                    :datas="items"
                    :values="searchValues"
                    :search-tag="true"
                    variant="outlined"
                    density="comfortable"
                    prepend-inner-icon="mdi-magnify"
                    @update:values="searchValues = $event"
                />
            </div>
            <SDataTable
                :headers="headers"
                :items="items"
                :smart-search="searchValues"
                :page="page"
                @update:page="page = $event"
            />
        </div>
    `
})

export const TableWithSearch = TableWithSearchTemplate.bind({})
TableWithSearch.args = {}
TableWithSearch.parameters = {
    docs: {
        description: {
            story: `
SSmartSearch와 SDataTable을 조합하여 고급 검색 기능을 구현한 예시입니다.

**주요 기능**
- 속성 기반 검색: Instance Name, Type, Status 등으로 검색
- 태그 기반 검색: Environment, Project 등의 태그로 검색
- 다중 검색 조건: 여러 검색 조건을 동시에 적용 가능
- 동적 필터링: 검색 조건에 따라 테이블 내용이 실시간으로 필터링

**사용 방법**
1. 검색창에서 검색하려는 속성이나 태그를 선택
2. 검색어를 입력하고 Enter 키를 누르거나 값을 선택
3. 여러 검색 조건을 추가하여 결과를 필터링
4. 검색 조건은 chips 형태로 표시되며, 개별적으로 제거 가능

**검색 예시**
- \`Instance Name:prod\` - 이름에 'prod'가 포함된 인스턴스 검색
- \`Status:running\` - 실행 중인 인스턴스 검색
- \`Environment:Production\` - Production 환경의 인스턴스 검색
            `
        }
    }
}

const nullTagSearchCode = `
<template>
  <div>
    <div class="search">
      <SSmartSearch
        :items="headers"
        class="search__text-field"
        :datas="items"
        :values="searchValues"
        :search-tag="true"
        variant="outlined"
        density="comfortable"
        prepend-inner-icon="mdi-magnify"
        @update:values="searchValues = $event"
      />
    </div>
    <SDataTable
      :headers="headers"
      :items="items"
      :smart-search="searchValues"
      :page="page"
      @update:page="page = $event"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const searchValues = ref([])
const page = ref(1)

const headers = [
  { title: "Instance Name", key: 'instanceName', align: 'start' },
  { title: "Instance Type", key: 'instanceType', align: 'center' },
  { title: "Status", key: 'status', align: 'center' },
  { title: "Region", key: 'region', align: 'center' }
]

const items = [
  {
    instanceName: 'no-tag-server',
    instanceType: 't3.micro',
    status: 'running',
    region: 'ap-northeast-2',
    tagList: []
  },
  {
    instanceName: 'tagged-server',
    instanceType: 't3.small',
    status: 'running',
    region: 'ap-northeast-2',
    tagList: [
      { tagKey: 'Environment', tagValue: 'Production' }
    ]
  }
]
</script>
`

export const TableWithNullTagSearch = TableWithSearchTemplate.bind({})
TableWithNullTagSearch.args = {
  items: [
    {
      instanceName: 'no-tag-server',
      instanceType: 't3.micro',
      status: 'running',
      region: 'ap-northeast-2',
      tagList: []
    },
    {
      instanceName: 'tagged-server',
      instanceType: 't3.small',
      status: 'running',
      region: 'ap-northeast-2',
      tagList: [
        { tagKey: 'Environment', tagValue: 'Production' }
      ]
    }
  ]
}
TableWithNullTagSearch.parameters = {
  docs: {
    source: {
      code: nullTagSearchCode,
      language: 'vue',
      type: 'auto',
    },
    description: {
      story: `
태그가 지정되지 않은 리소스를 검색하는 기능을 보여주는 예시입니다.

**주요 기능**
- 미지정 태그 검색: 태그가 없는 리소스를 찾을 수 있음
- 일반 검색과 함께 사용 가능

**사용 방법**
1. SSmartSearch 컴포넌트와 SDataTable 컴포넌트를 함께 사용
2. searchTag prop을 true로 설정하여 태그 검색 활성화
3. tagList가 비어있는 항목도 검색 가능
      `
    }
  }
}

const footerCode = `
<template>
  <SDataTable
    :headers="headers"
    :items="items"
    :footers="footers"
  >
    <template #footer.price="{ props }">
      Average: {{ (props.total / props.quantity).toFixed(2) }}
    </template>
  </SDataTable>
</template>

<script setup>
const headers = [
  { title: "Product", key: 'product', align: 'start' },
  { title: "Quantity", key: 'quantity', align: 'end' },
  { title: "Price", key: 'price', align: 'end' },
  { title: "Total", key: 'total', align: 'end' }
]

const items = [
  { product: 'Item A', quantity: 2, price: 100, total: 200 },
  { product: 'Item B', quantity: 1, price: 150, total: 150 },
  { product: 'Item C', quantity: 3, price: 80, total: 240 }
]

const footers = {
  product: 'Total',
  quantity: '6',
  price: '',
  total: '590',
  highlight: 's-highlight-default'
}
</script>
`

const TableWithFooterTemplate = (args) => ({
  components: { SDataTable },
  setup() {
    const headers = [
      { title: "Product", key: 'product', align: 'start' },
      { title: "Quantity", key: 'quantity', align: 'end' },
      { title: "Price", key: 'price', align: 'end' },
      { title: "Total", key: 'total', align: 'end' }
    ]

    const items = [
      { product: 'Item A', quantity: 2, price: 100, total: 200 },
      { product: 'Item B', quantity: 1, price: 150, total: 150 },
      { product: 'Item C', quantity: 3, price: 80, total: 240 }
    ]

    const footers = {
      product: 'Total',
      quantity: '6',
      price: '',
      total: '590',
      highlight: 's-highlight-default'
    }

    return {
      headers,
      items,
      footers
    }
  },
  template: `
    <SDataTable
      :headers="headers"
      :items="items"
      :footers="footers"
    >
      <template #footer.price="{ props }">
        Average: {{ (props.total / props.quantity).toFixed(2) }}
      </template>
    </SDataTable>
  `
})

export const TableWithFooter = TableWithFooterTemplate.bind({})
TableWithFooter.parameters = {
  docs: {
    source: {
      code: footerCode,
      language: 'vue',
      type: 'auto',
    },
    description: {
      story: `
테이블 푸터를 사용하는 예시입니다.

**푸터 설정 방법**

1. 기본 푸터 데이터 설정
\`\`\`js
const footers = {
  product: 'Total',      // 일반 텍스트
  quantity: '6',         // 합계
  price: '',            // 슬롯으로 대체
  total: '590',         // 총계
  highlight: 's-highlight-default'  // 푸터 강조 스타일
}
\`\`\`

2. 푸터 슬롯 사용
\`\`\`vue
<template #footer.{column_key}="{ props }">
  <!-- props를 통해 전체 푸터 데이터에 접근 가능 -->
  Average: {{ (props.total / props.quantity).toFixed(2) }}
</template>
\`\`\`

**주요 기능**
- 컬럼별 푸터 값 설정 가능
- 커스텀 푸터 슬롯을 통한 동적 값 표시
- 푸터 스타일링 지원 (highlight 속성)
- 컬럼 정렬 방향 유지
`
    }
  }
}

const highlightCode = `
<template>
  <SDataTable
    :headers="headers"
    :items="items"
  />
</template>

<script setup>
const headers = [
  { title: "Name", key: 'name', align: 'start' },
  { title: "Status", key: 'status', align: 'center' },
  { title: "Value", key: 'value', align: 'end' }
]

const items = [
  {
    name: 'Item 1',
    status: 'Active',
    value: 100,
    highlight: 's-highlight-default'  // 기본 하이라이트
  },
  {
    name: 'Item 2',
    status: 'Warning',
    value: 150,
    highlight: 's-highlight-warning'  // 경고 스타일
  },
  {
    name: 'Item 3',
    status: 'Error',
    value: 200,
    highlight: 's-highlight-error'    // 에러 스타일
  },
  {
    name: 'Item 4',
    status: 'Completed',
    value: 300,
    highlight: 's-highlight-success'  // 성공 스타일
  }
]
</script>
`

export const TableWithHighlight = Template.bind({});
TableWithHighlight.args = {
    headers: [
        { title: "Name", key: 'name', align: 'start' },
        { title: "Status", key: 'status', align: 'center' },
        { title: "Value", key: 'value', align: 'end' }
    ],
    items: [
        {
            name: 'Item 1',
            status: 'Active',
            value: 100,
            highlight: 's-highlight-default'  // 기본 하이라이트
        },
        {
            name: 'Item 2',
            status: 'Warning',
            value: 150,
            highlight: 's-highlight-warning'  // 경고 스타일
        },
        {
            name: 'Item 3',
            status: 'Error',
            value: 200,
            highlight: 's-highlight-error'    // 에러 스타일
        },
        {
            name: 'Item 4',
            status: 'Completed',
            value: 300,
            highlight: 's-highlight-success'  // 성공 스타일
        }
    ]
};

TableWithHighlight.parameters = {
    docs: {
        source: {
            code: highlightCode,
            language: 'vue',
            type: 'auto',
        },
        description: {
            story: `
행 하이라이트 기능을 사용하는 예시입니다.

**하이라이트 설정 방법**
데이터 객체에 highlight 속성을 추가하여 스타일 클래스를 지정합니다:

\`\`\`js
{
  name: 'Item Name',
  status: 'Active',
  value: 100,
  highlight: 's-highlight-warning'  // 스타일 클래스 지정
}
\`\`\`

**제공되는 하이라이트 클래스**
- \`s-highlight-default\`: 기본 하이라이트 (파란색)
- \`s-highlight-warning\`: 경고 스타일 (회색)
- \`s-highlight-error\`: 에러 스타일 (빨간색)
- \`s-highlight-success\`: 성공 스타일 (초록색)
      `
        }
    }
};
