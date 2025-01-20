import {SDataTable, SRefreshBtn} from '@';
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

export const DisabledSort = Template.bind({});
DisabledSort.args = {
    ...Default.args,
    disableSort: true
};

const Template3 = (args) => ({
    components: { SDataTable },
    setup() { return { args }; },
    template: `<SDataTable v-bind="args" item-value="vpcId" disable-sort>
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
    disableSort: true
};
