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
