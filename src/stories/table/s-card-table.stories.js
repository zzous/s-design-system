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
