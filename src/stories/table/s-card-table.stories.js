import {SCardTable} from '@';
import { ref } from 'vue'

export default {
    title: 'Table/SCardTable',
    component: SCardTable,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SCardTable },
    setup() {
        return { args };
    },
    template: `<SCardTable v-bind="args" />`,
});

export const Default = Template.bind({});
Default.args = {
    headers: [
        {
            title: "VPC Name",
            key: 'vpcName',
            width: 300,
            align: 'center',
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
        },
        {
            title: "Tag",
            key: 'tagList',
            width: 180,
            align: 'd-none',
        },
    ],
    datas: [
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1001",
            "cloudType": "AWS",
            "regionCode": "us-west-1",
            "tagList": "aws-vpc"
        },
        {
            "vpcName": "first-vpc",
            "vpcId": "vpc-1000",
            "cloudType": "GCP",
            "regionCode": "us-west-2",
            "tagList": "gcp-vpc"
        },
    ]
};

const selectTemplateCode = `
    <div>
        <s-card-table
            :headers="headers"
            :datas="datas"
            show-select
            select-strategy="single"
            :selected="selected"
            item-value="vpcId"
            @update:selected="selected = $event"
        />
    </div>
`

const SelectedTemplate = (args) => ({
    components: { SCardTable },
    setup() {
        const selected = ref([]);
        return { args, headers: args.headers, datas: args.datas, selected };
    },
    template: selectTemplateCode,
});


export const SelectedTable = SelectedTemplate.bind({});
SelectedTable.args = {
    headers: [
        {
            title: "VPC Name",
            key: 'vpcName',
            width: 300,
            align: 'center',
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
        },
        {
            title: "Tag",
            key: 'tagList',
            width: 180,
            align: 'd-none',
        },
    ],
    datas: [
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1001",
            "cloudType": "AWS",
            "regionCode": "us-west-1",
            "tagList": "aws-vpc"
        },
        {
            "vpcName": "first-vpc",
            "vpcId": "vpc-1000",
            "cloudType": "GCP",
            "regionCode": "us-west-2",
            "tagList": "gcp-vpc"
        },
    ]
};

SelectedTable.parameters = {
    docs: {
        source: {
            code: `<template>${selectTemplateCode}</template>`,
            language: 'html',
            type: 'auto',
        },
    },
};

const expandableCode = `
<template>
  <div>
    <SCardTable
      :headers="headers"
      :datas="datas"
      :show-expand="true"
      :item-value="itemValue"
      :expand-on-click="true"
    >
      <template #expanded-row="{ item }">
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
      </template>
    </SCardTable>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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

const datas = [
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
]

const expanded = ref([])
const itemValue = 'vpcId'

const updateExpanded = (newExpanded) => {
  console.log(newExpanded)
}
</script>
`

const Template2 = (args) => ({
    components: { SCardTable },
    setup() {
        const expanded = ref([]);
        const itemValue = 'vpcId';

        const updateExpanded = (newExpanded) => {
            console.log(newExpanded);
        };

        return {
            args,
            expanded,
            itemValue,
            updateExpanded
        };
    },
    template: `
        <div>
            <SCardTable
                v-bind="args"
                v-model:expanded="expanded"
                @update:expanded="updateExpanded"
            >
                <template #expanded-row="{ item }">
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
                </template>
            </SCardTable>
        </div>
    `
});

export const ExpandableCardTable = Template2.bind({});
ExpandableCardTable.args = {
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
  datas: [
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
  itemValue: 'vpcId',
  expandOnClick: true,
};

ExpandableCardTable.parameters = {
  docs: {
    source: {
      code: expandableCode,
      language: 'vue',
      type: 'auto',
    },
    description: {
      story: `
\`SCardTable\` 컴포넌트의 확장 기능을 사용하는 예시입니다.

**주요 기능**
- \`showExpand\`: 확장 토글 버튼을 표시합니다.
- \`expandOnClick\`: 행 클릭 시 확장 여부를 설정합니다.
- \`expanded-row\` 슬롯을 사용하여 확장된 행의 내용을 커스터마이징할 수 있습니다.
- \`v-model:expanded\`: 확장된 행을 관리합니다.
- \`@update:expanded\`: 확장 상태가 변경될 때마다 호출됩니다.
      `
    }
  }
};
