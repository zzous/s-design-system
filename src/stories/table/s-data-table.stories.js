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
        }
    }
};

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
            "vpcName": "default-vpc",
            "vpcId": "vpc-1002",
            "cloudType": "AWS",
            "regionCode": "us-west-1"
        },
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1003",
            "cloudType": "AWS",
            "regionCode": "us-west-1"
        },
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1004",
            "cloudType": "AWS",
            "regionCode": "us-west-1"
        },
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1005",
            "cloudType": "AWS",
            "regionCode": "us-west-1"
        },
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1006",
            "cloudType": "AWS",
            "regionCode": "us-west-1"
        },
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1007",
            "cloudType": "AWS",
            "regionCode": "us-west-1"
        },
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1008",
            "cloudType": "AWS",
            "regionCode": "us-west-1"
        },
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1009",
            "cloudType": "AWS",
            "regionCode": "us-west-1"
        },
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1010",
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

export const SelectableTable = Template.bind({});
SelectableTable.args = {
    ...Default.args,
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
};

SelectableTable.parameters = {
    docs: {
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
};

export const DisabledSort = Template.bind({});
DisabledSort.args = {
    ...Default.args,
    disableSort: true
};

const Template3 = (args) => ({
    components: { SDataTable },
    setup() { return { args }; },
    template: `<SDataTable v-bind="args" item-value="vpcId">
    <template #body>
        <tr>
            <td rowspan="3" :class="\`v-data-table-column--align-${args.headers.at(0)?.align}\`">1</td>
        </tr>
        <tr>
            <td :class="\`v-data-table-column--align-${args.headers.at(1)?.align}\`">2</td>
            <td :class="\`v-data-table-column--align-${args.headers.at(2)?.align}\`">2</td>
        </tr>
        <tr>
            <td :class="\`v-data-table-column--align-${args.headers.at(1)?.align}\`">3</td>
            <td :class="\`v-data-table-column--align-${args.headers.at(2)?.align}\`">3</td>
        </tr>
    </template>
    </SDataTable>`,
});

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
            code: `<SDataTable v-bind="args" item-value="vpcId">
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
    </SDataTable>`,
            language: 'html',
            type: 'auto',
        }
    },
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

// 미지정 태그 검색 예시
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
        description: {
            story: `
태그가 지정되지 않은 리소스를 검색하는 기능을 보여주는 예시입니다.

**주요 기능**
- 미지정 태그 검색: 태그가 없는 리소스를 찾을 수 있음
- 일반 검색과 함께 사용 가능
            `
        }
    }
}
