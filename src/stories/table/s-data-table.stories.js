import {SDataTable} from '@';

export default {
    title: 'Table/SDataTable',
    component: SDataTable,
    tags: ['autodocs'],
    argTypes: {
        // 📌 스토리북 작성 가이드 https://storybook.js.org/docs/essentials/controls#annotation
    },
};

const Template = (args) => ({
    components: { SDataTable },
    setup() { return { args }; },
    template: `<SDataTable v-bind="args" />`,
});

const Template2 = (args) => ({
    components: { SDataTable },
    setup() { return { args }; },
    template: `<SDataTable v-bind="args" item-value="vpcId" show-select>
    </SDataTable>`,
});

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

export const Default = Template.bind({});
export const SelectableTable = Template2.bind({});
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
        },
        {
            title: "Tag",
            key: 'tagList',
            width: 180,
            align: 'd-none',
        },
    ],
    items: [
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1001",
            "cloudType": "AWS",
            "regionCode": "us-west-1",
            "tagList": "aws-vpc",
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

SelectableTable.args = {
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
        },
        {
            title: "Tag",
            key: 'tagList',
            width: 180,
            align: 'd-none',
        },
    ],
    items: [
        {
            "vpcName": "default-vpc",
            "vpcId": "vpc-1001",
            "cloudType": "AWS",
            "regionCode": "us-west-1",
            "tagList": "aws-vpc",
            "selectable": true
        },
        {
            "vpcName": "first-vpc",
            "vpcId": "vpc-1000",
            "cloudType": "GCP",
            "regionCode": "us-west-2",
            "tagList": "gcp-vpc",
            "selectable": false
        },
    ]
};


export const Rowspan = Template3.bind({});
Rowspan.args = {
    headers: [
        {
            title: "1",
            key: 'value',
            width: 300,
            align: 'start',
        },
        {
            title: "2",
            key: 'value',
            width: 250,
            align: 'center',
        },
        {
            title: "3",
            key: 'value',
            width: 150,
            align: 'center',
        },
    ]
}
