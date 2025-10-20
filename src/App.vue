<template>
  <vuetify-wrapper>
    <s-header is-logged-in>
      <template #inner-append>
        <!-- notification -->
        <s-btn id="bell-button" depressed elevation="0" icon class="text-none backgroundColor mr-2" stacked>
          <v-badge
            class="s-notification-badge"
            bordered
            color="#B80303"
            max="99"
            :content="notificationSimpleList.length"
            :value="notificationSimpleList.length || null"
            overlap
          >
            <v-icon>mdi-bell</v-icon>
          </v-badge>
        </s-btn>
        <v-menu activator="#bell-button" :close-on-content-click="false">
          <div class="notification-wrapper">
            <transition name="fade">
              <s-notification
                class="notification"
                :items="notificationSimpleList"
              />
            </transition>
          </div>
        </v-menu>
      </template>
    </s-header>
    <div class="show-header">
    <s-navi/>
      <div class="base-layout" style="padding: 300px;">
        <s-button @click="openSlidePanel">test</s-button>
      </div>
      </div>
    <div style="padding: 2rem;">

    <br>
    <s-data-table
        v-model="checkedList"
        show-select
        class="fixed-table"
        :headers="headers"
        :items="list"
        :smart-search="searchs"
        :items-per-page="perPages"
        item-value="vpcId"
        :page="pageNum"
        select-strategy="single"
        return-object
        resizable
        tooltip
        @update:page="setPage"
        @update:model-value="setCheckedList"
    />
  </div>

    <s-slide-panel v-bind="slidePanelProps" :content="Test" />

  </vuetify-wrapper>
</template>


<script setup>
import SButton from '@/components/button/SBtn.vue'
import SHeader from '@/components/layout/SHeader.vue'
import SSlidePanel from '@/components/slide-panel/SSlidePanel.vue'
import VuetifyWrapper from '../.storybook/VuetifyWrapper.vue'
import SDataTable from '@/components/table/SDataTable.vue'
import { useTablePage, useSlidePanel } from './hooks/index.js'
import { ref } from 'vue'
import SNavi from '@/components/layout/SNavi.vue'


const { pageNum, searchs, perPages, checkedList, setPage, setPerPages, setCheckedList, onRefresh } =
    useTablePage()

const { slidePanelProps, openSlidePanel, closeSlidePanel } = useSlidePanel({ title: '슬라이드 패널 제목'})


const totalCnt = ref(0)

const notificationSimpleList = ref([])

for (let i = 0; i < 100; i++) {
  notificationSimpleList.value.push({
        "msgTitle": "VM 삭제 작업 실패",
        "msgContent": "자원: advanced-2025-09-30-671qm6",
        "msgAdditional": "CSP: VMWARE",
        "msgTitleEn": null,
        "msgContentEn": null,
        "msgAdditionalEn": null,
        "createdAt": "2025-10-01 13:09:17",
        "detailInfo": "VMware V2 가상머신 삭제 실패: VMware 가상머신 삭제 실패: VMware 가상머신 삭제 실패: 404 Not Found: \"{\"type\":\"com.vmware.vapi.std.errors.not_found\",\"value\":{\"error_type\":\"NOT_FOUND\",\"messages\":[{\"args\":[\"vm-3192:19595054-8196-42fe-a140-bbd3210a3bb8\"],\"default_message\":\"Virtual machine with identifier 'vm-3192:19595054-8196-42fe-a140-bbd3210a3bb8' does not exist.\",\"id\":\"com.vmware.api.vcenter.vm.not_found\"}]}}\"",
        "detailInfoEn": null,
        "notificationIdx": i,
        "alertInfo": {
            "sourceType": null,
            "sourceIdx": null
        }
    }
  )
}

const list = ref([
    {
      "vpcIdx": 13150,
      "vpcId": "fc9cc639-9823-42a4-bac1-15fab501643a",
      "vpcName": "Default Network",
      "ipv4CidrBlock": "192.168.0.0/16",
      "status": "available",
      "tenancy": "56cfa42d10ad4d61a3b985884c171a80",
      "accountId": "자원관리용",
      "regionCode": "kr2",
      "cloudType": "NHN",
      "serviceGroupUuid": "3d1835d9-fdac-480f-9050-10bf8a58b49f",
      "createdAt": "2023-11-08T08:53:06",
      "companyUuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
      "internetGatewayId": null,
      "serviceGroupName": "imp-test-01",
      "defaultYn": "Y",
      "networkAclId": null,
      "networkAclName": null,
      "defaultRouteTableId": "d8abe622-3896-4c5e-8c75-00a0c0dd30aa",
      "defaultRouteTableName": "vpc-fc9cc639-98232-1",
      "vmCount": 0,
      "tagList": null
    },
    {
      "vpcIdx": 13149,
      "vpcId": "4cd51a6f-abcd-4583-9745-82619516dd26",
      "vpcName": "Default Network",
      "ipv4CidrBlock": "192.168.0.0/16",
      "status": "available",
      "tenancy": "56cfa42d10ad4d61a3b985884c171a80",
      "accountId": "자원관리용",
      "regionCode": "kr1",
      "cloudType": "NHN",
      "serviceGroupUuid": "3d1835d9-fdac-480f-9050-10bf8a58b49f",
      "createdAt": "2023-10-11T13:45:36",
      "companyUuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
      "internetGatewayId": null,
      "serviceGroupName": "imp-test-01",
      "defaultYn": "Y",
      "networkAclId": null,
      "networkAclName": null,
      "defaultRouteTableId": "8395c1f7-7ae8-4152-90a0-9b592ffc1f66",
      "defaultRouteTableName": "vpc-4cd51a6f-abcd",
      "vmCount": 0,
      "tagList": null
    },
    {
      "vpcIdx": 13148,
      "vpcId": "007f7c44-1d06-460a-bed7-d86b4c7684c2",
      "vpcName": "d2scuk3ebd5s738h9a90",
      "ipv4CidrBlock": "10.110.0.0/16",
      "status": "available",
      "tenancy": "56cfa42d10ad4d61a3b985884c171a80",
      "accountId": "자원관리용",
      "regionCode": "kr1",
      "cloudType": "NHN",
      "serviceGroupUuid": "3d1835d9-fdac-480f-9050-10bf8a58b49f",
      "createdAt": "2025-09-04T08:29:21",
      "companyUuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
      "internetGatewayId": null,
      "serviceGroupName": "imp-test-01",
      "defaultYn": "N",
      "networkAclId": null,
      "networkAclName": null,
      "defaultRouteTableId": null,
      "defaultRouteTableName": null,
      "vmCount": 0,
      "tagList": null
    },
    {
      "vpcIdx": 13147,
      "vpcId": "447f6bd3-135d-4606-aafd-0cee8a09f2e8",
      "vpcName": "vpc-test02",
      "ipv4CidrBlock": "10.0.0.0/24",
      "status": "available",
      "tenancy": "56cfa42d10ad4d61a3b985884c171a80",
      "accountId": "자원관리용",
      "regionCode": "jp1",
      "cloudType": "NHN",
      "serviceGroupUuid": "3d1835d9-fdac-480f-9050-10bf8a58b49f",
      "createdAt": "2025-02-11T11:19:11",
      "companyUuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
      "internetGatewayId": null,
      "serviceGroupName": "imp-test-01",
      "defaultYn": "N",
      "networkAclId": null,
      "networkAclName": null,
      "defaultRouteTableId": "9561a4eb-2558-497b-b931-b4f265420ede",
      "defaultRouteTableName": "vpc-447f6bd3-135d",
      "vmCount": 0,
      "tagList": null
    },
    {
      "vpcIdx": 13135,
      "vpcId": "vpc-04b1aba72094b9da8",
      "vpcName": "d31od8rebd5s738i4d4g",
      "ipv4CidrBlock": "10.2.0.0/16",
      "status": "available",
      "tenancy": "default",
      "accountId": "자원관리용",
      "regionCode": "ap-northeast-2",
      "cloudType": "AWS",
      "serviceGroupUuid": "3d1835d9-fdac-480f-9050-10bf8a58b49f",
      "createdAt": null,
      "companyUuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
      "internetGatewayId": "igw-045e61fe80b26b98f",
      "serviceGroupName": "imp-test-01",
      "defaultYn": "false",
      "networkAclId": "acl-08682ba51743a4748",
      "networkAclName": null,
      "defaultRouteTableId": "rtb-0307b8073e0addf14",
      "defaultRouteTableName": null,
      "vmCount": 0,
      "tagList": null
    },
    {
      "vpcIdx": 13055,
      "vpcId": "vpc-0cb2c28bbd46b9e93",
      "vpcName": "d2mhst3ebd5s73fqhfm0",
      "ipv4CidrBlock": "10.2.0.0/16",
      "status": "available",
      "tenancy": "default",
      "accountId": "자원관리용",
      "regionCode": "ap-northeast-2",
      "cloudType": "AWS",
      "serviceGroupUuid": "3d1835d9-fdac-480f-9050-10bf8a58b49f",
      "createdAt": null,
      "companyUuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
      "internetGatewayId": "igw-0b235b237849637aa",
      "serviceGroupName": "imp-test-01",
      "defaultYn": "false",
      "networkAclId": "acl-0246d7817411334c1",
      "networkAclName": null,
      "defaultRouteTableId": "rtb-0978161682ed2c777",
      "defaultRouteTableName": null,
      "vmCount": 0,
      "tagList": null
    },
    {
      "vpcIdx": 13021,
      "vpcId": "vpc-0cd879e25e5fc370e",
      "vpcName": "0818_vpc_aws",
      "ipv4CidrBlock": "10.10.0.0/16",
      "status": "available",
      "tenancy": "default",
      "accountId": "자원관리용",
      "regionCode": "ap-northeast-2",
      "cloudType": "AWS",
      "serviceGroupUuid": "3d1835d9-fdac-480f-9050-10bf8a58b49f",
      "createdAt": null,
      "companyUuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
      "internetGatewayId": "igw-05b9daafcd7fd7338",
      "serviceGroupName": "imp-test-01",
      "defaultYn": "false",
      "networkAclId": "acl-0de5d4ff5b60d644d",
      "networkAclName": null,
      "defaultRouteTableId": "rtb-0e95a4e0ca56d43e6",
      "defaultRouteTableName": null,
      "vmCount": 0,
      "tagList": null
    },
    {
      "vpcIdx": 12972,
      "vpcId": "vpc-0a82cc55f901e0764",
      "vpcName": "d28s043ebd5s73f1tpeg",
      "ipv4CidrBlock": "10.2.0.0/16",
      "status": "available",
      "tenancy": "default",
      "accountId": "자원관리용",
      "regionCode": "ap-northeast-2",
      "cloudType": "AWS",
      "serviceGroupUuid": "3d1835d9-fdac-480f-9050-10bf8a58b49f",
      "createdAt": null,
      "companyUuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
      "internetGatewayId": "igw-0d79a297a9fc921a7",
      "serviceGroupName": "imp-test-01",
      "defaultYn": "false",
      "networkAclId": "acl-0a10b5934e11bb43b",
      "networkAclName": null,
      "defaultRouteTableId": null,
      "defaultRouteTableName": null,
      "vmCount": 0,
      "tagList": null
    },
    {
      "vpcIdx": 12971,
      "vpcId": "/subscriptions/dc5a8c9a-9fd3-4c57-bb07-e747622dc66d/resourceGroups/test01_group/providers/Microsoft.Network/virtualNetworks/vpc-test01",
      "vpcName": "vpc-test01",
      "ipv4CidrBlock": "172.0.0.0/16",
      "status": "available",
      "tenancy": null,
      "accountId": "자원관리용",
      "regionCode": "koreasouth",
      "cloudType": "AZURE",
      "serviceGroupUuid": "3d1835d9-fdac-480f-9050-10bf8a58b49f",
      "createdAt": null,
      "companyUuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
      "internetGatewayId": null,
      "serviceGroupName": "imp-test-01",
      "defaultYn": null,
      "networkAclId": null,
      "networkAclName": null,
      "defaultRouteTableId": null,
      "defaultRouteTableName": null,
      "vmCount": 0,
      "tagList": null
    },
])


const headers = [
  { title: 'vpcName', key: 'vpcName', width: 300, align: 'start' },
  { title: 'vpcId', key: 'vpcId', width: 250, align: 'start' },
  { title: 'cloudType', key: 'cloudType', width: 150, align: 'center' },
  { title: 'region', key: 'regionCode', width: 170, align: 'center' },
  { title: 'ipv4Cidr', key: 'ipv4CidrBlock', width: 200, align: 'end'   },
  { title: 'basedNetworkACL', key: 'displayNetworkAcl', width: 300, align: 'center' },
  { title: 'basedVPC', key: 'displayDefaultYn', width: 200, align: 'center' },
  { title: 'tag', key: 'tagList', width: 180, align: 'd-none' },
]

</script>

<style>
* {
  box-sizing: border-box;
}
body {
  min-height: 100dvh;
}

#bell-button {
  width: 48px;
  height: 48px;
  min-width: 48px;
}
</style>
