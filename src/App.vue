<template>
  <v-app>
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
      <s-navi
        service-name="test"
        menu-path="{ menuUrl: '/', menuName: 'test', menuNameKr: 'test' }"
        lang="ko"
      />
      <div class="base-layout">
        <div class="show-navi">
          <s-slide-panel v-bind="slidePanelProps" :content="Test" />
          <s-btn @click="openSlidePanel" title="Open Slide Panel" />
          <s-btn @click="closeSlidePanel" title="Close Slide Panel" class="ml-4"/>

          <!-- SFilterSelect 테스트 영역 -->
          <div style="margin-top: 5rem; padding: 20px; border: 2px solid #e0e0e0; border-radius: 8px; background: #f9f9f9;">
            <h3 style="margin-bottom: 20px;">SFilterSelect 한글 입력 테스트</h3>
            <div style="margin-bottom: 20px;">
              <p><strong>테스트 방법:</strong></p>
              <ol style="margin-left: 20px;">
                <li>"스" 입력 시 → "스트라토", "테스트", "무한상사" 등 "스"가 포함된 모든 기업이 표시되는지 확인</li>
                <li>backspace로 모두 지우면 → 67개 기업 전체가 표시되는지 확인</li>
                <li>콘솔(F12)을 열어 "[SFilterSelect]" 로그를 확인</li>
              </ol>
            </div>
            <div style="margin-bottom: 10px;">
              <strong>선택된 기업 ({{ selectedCompanies.length }}개):</strong>
              <span v-if="selectedCompanies.length > 0" style="margin-left: 10px;">
                {{ selectedCompanies.join(', ') }}
              </span>
              <span v-else style="margin-left: 10px; color: #999;">없음</span>
            </div>
            <s-filter-select
              v-model="selectedCompanies"
              :items="companyList"
              item-title="companyNameKr"
              item-value="uuid"
              display-text="기업 선택"
              placeholder="기업명으로 검색하세요"
              :width="400"
            />
          </div>

          <div style="margin-top: 10rem;" class="layout__list-contents">
            <div class="search">
              <s-smart-search :items="list" :headers="headers" v-model="searchs" />
            </div>
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
        </div>
        <s-footer />
        <!-- <s-global-progress v-model="loading" /> -->
      </div>
    </div>
  </v-app>
</template>


<script setup>
import SBtn from '@/components/button/SBtn.vue'
import SHeader from '@/components/layout/SHeader.vue'
import SFooter from '@/components/layout/SFooter.vue'
import SSlidePanel from '@/components/slide-panel/SSlidePanel.vue'
import VuetifyWrapper from '../.storybook/VuetifyWrapper.vue'
import SDataTable from '@/components/table/SDataTable.vue'
import SFilterSelect from '@/components/input/SFilterSelect.vue'
import { useTablePage, useSlidePanel } from './hooks/index.js'
import { ref } from 'vue'
import SNavi from '@/components/layout/SNavi.vue'


const { pageNum, searchs, perPages, checkedList, setPage, setPerPages, setCheckedList, onRefresh } =
    useTablePage()

const { slidePanelProps, openSlidePanel, closeSlidePanel } = useSlidePanel({ title: '슬라이드 패널 제목'})


const totalCnt = ref(0)

const notificationSimpleList = ref([])

// SFilterSelect 테스트용 데이터
const selectedCompanies = ref([])
const companyList = ref([
  {
    "companyNameKr": "계정관리확인",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "1fe05811-5a9e-4b31-8ea7-ff7d6f81e0fb",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업AABB-2",
    "companyNameEn": "testCompanyAABB-2",
    "companyType": "managed",
    "uuid": "9b53081c-9e37-4359-8560-a75faa6b34d6",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "무한상사",
    "companyNameEn": "mh comp",
    "companyType": "managed",
    "uuid": "f28e5440-2552-4311-9e6e-569845e98793",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테 스트기업업",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "11f48a71-4f95-4b35-8d1b-6b3b581b96e1",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테 스트기업7",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "12ea9338-8e35-4ae7-93f3-399307406bf5",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테 스트기업6",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "3e495c91-18e0-4a05-8010-99daafa87102",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테 스트기업5",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "852f65cb-7d73-42aa-8d46-70e05fa0a0e2",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테 스트기업4",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "d4480482-615a-4830-9a0e-f7bf5bc4c596",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테 스트기업3",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "dc6fd803-36f0-453e-acaf-58dfa9ba50e3",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스 트기업",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "544c01cc-16ca-475a-b255-42d7809f914e",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "계정사용자등록",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "24698719-44c9-4517-8555-cfa6bb5efc06",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "계정명하나법인",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "9acf78cb-3941-439d-96a3-54282953a577",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "account-test-new",
    "companyNameEn": "account-test-new",
    "companyType": "managed",
    "uuid": "34a88aab-b681-4e18-9d63-aef5f8390418",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "등록계생성및초기데이터2",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "12dd330a-7010-4cf5-8206-26227d041b9b",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "등록계생성및초기데이터1",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "00792ec2-91fb-470d-931f-30cf6bc1ece2",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "등록계생성",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "555233f3-e09d-42e8-b09e-2b1987807928",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "법인등록",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "42e7f36d-61e6-44ba-b1fe-e5e5f4afad8b",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업100",
    "companyNameEn": "testCompany100",
    "companyType": "managed",
    "uuid": "00552f8b-e76a-49a6-b2c2-d78c661962d1",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업99",
    "companyNameEn": "testCompany99",
    "companyType": "managed",
    "uuid": "0592faa6-ff97-46d6-ba31-8ada1a39ec20",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "법인컬럼추가기업",
    "companyNameEn": "engcol",
    "companyType": "managed",
    "uuid": "941aa40f-ffaf-4af7-8931-31c9ff3dfcb8",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업ABC",
    "companyNameEn": "testCompABC",
    "companyType": "managed",
    "uuid": "6db5dce8-bf93-4473-aee2-031def702e2f",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "계정하나야이",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "9e89969b-1ffc-41ce-9de3-979b93cdd400",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "계정하나야",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "da5c3bcb-f02c-4b50-9c2f-d00b4d36ff45",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테테테",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "ab42f56b-0881-4dce-b51a-ea01d2714029",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "계정등록하나둘",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "0512a206-ec58-4d92-a975-59ee50591d49",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "계정등록하나",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "46af7f29-6cc8-4352-8d62-fb175b4fa801",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "test기업정보임",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "dab34758-a50f-4ad9-b12d-13edde06f387",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업A-OPAS",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "b5bc72c2-98ee-4e80-8947-9c3f81519976",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "com회사",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "f9b50abb-6d7d-4eba-82d6-47cfcf867a32",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업A-OPA",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "260b4444-198d-4ec0-84be-7d88dbec4392",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업하나둘셋",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "49d1e48b-d6e0-4778-b645-2493557b554b",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "stratotestcompany",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "187a984f-ae56-4c5a-918d-aa38f856b7d9",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업0730",
    "companyNameEn": "test0730",
    "companyType": "managed",
    "uuid": "a5a8cd24-c917-4edc-9aa4-68683eee96a1",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업CCDD",
    "companyNameEn": "테스트기업CCDD",
    "companyType": "managed",
    "uuid": "3ba4e44c-5b26-4181-88a5-8ff078e0ebcd",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업ACA",
    "companyNameEn": "테스트기업ACA",
    "companyType": "managed",
    "uuid": "40e3d376-f9bd-4d52-9ca1-9381d52e5a29",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업AABB",
    "companyNameEn": "testCompanyAABB",
    "companyType": "managed",
    "uuid": "1c94e216-a4f2-458e-b8b0-67101a59632d",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업9",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "6eaae97b-50a8-458c-be5c-41d27a08d109",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "1a184e16-b4ff-4966-9882-d833c37b9179",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "아이티센",
    "companyNameEn": "itcen",
    "companyType": "managed",
    "uuid": "386003d4-1678-494c-84b4-49f61a7786ce",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "에스피테크놀러지",
    "companyNameEn": "sptek",
    "companyType": "managed",
    "uuid": "29f3194a-336a-469e-8bb8-793b3128c70b",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "클로잇",
    "companyNameEn": "cloit",
    "companyType": "managed",
    "uuid": "20303cca-589f-4f98-8085-985f6363df9e",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업입",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "14c91d9f-ab44-4ed4-b230-b0ba4b684007",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업입니",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "cc73eaa0-1cbd-4482-ac64-a6fe3b256156",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "testt",
    "companyNameEn": "testt",
    "companyType": null,
    "uuid": "4c516463-b597-47b9-890d-cbaaebc56297",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업입니다",
    "companyNameEn": "testcompany",
    "companyType": "member",
    "uuid": "adf457e7-18f9-430b-8a1b-dab930200be3",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업테스트테스트",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "e1d844df-f81a-49cc-a554-01146fffbe45",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "336621da-0dcc-447f-b3ea-d6124abe080d",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "7e468d47-3b5a-40ec-9c5e-f186596d0ca2",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트기업테스트",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "fcb6f5ed-ad9b-4aa8-b9d8-b3927977b2ea",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "testcomp2",
    "companyNameEn": "testcomp2",
    "companyType": null,
    "uuid": "9c67b0e9-43e6-4893-8000-dcbfa748b2e7",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "testcomp",
    "companyNameEn": "testcomp",
    "companyType": "member",
    "uuid": "e30b1384-1c75-4545-9f70-16c9f74435ee",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트오번",
    "companyNameEn": "testNumFive",
    "companyType": null,
    "uuid": "3426fc2a-c9b9-4a36-9631-e29620acdd0d",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트사번",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "d3347c3d-9ddf-431a-861c-5a2a4172de55",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트삼번가",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "80096795-9ce6-44de-96fc-c0d40aa8a6a9",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트이번가",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "d1d2b828-09ac-4254-b876-42dff3c660e5",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트일번지",
    "companyNameEn": null,
    "companyType": "member",
    "uuid": "47a2fbef-fe60-4941-a71a-73a251e5568f",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "회사명_테스트",
    "companyNameEn": "company_test",
    "companyType": "managed",
    "uuid": "5bce08ad-cd62-40fe-9f3b-1267708c9e86",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "테스트",
    "companyNameEn": null,
    "companyType": "managed",
    "uuid": "6c0cf2a2-d9cc-4daa-ac2c-00ce34d9f91c",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "stasring",
    "companyNameEn": "stasring",
    "companyType": "stasring",
    "uuid": "2a4f88b5-610d-41d2-84cd-8084aafa37a1",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "기업명",
    "companyNameEn": "company",
    "companyType": "managed",
    "uuid": "7a90863b-8d64-45c8-80a4-9b95a4ce2989",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "회사명",
    "companyNameEn": "company",
    "companyType": "managed",
    "uuid": "e8d6fa1b-6f75-43d5-b858-54c2e1c2eca4",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "아마존",
    "companyNameEn": "amazon",
    "companyType": "managed",
    "uuid": "62ff14e4-1b85-440d-8be3-8e0612191dc8",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "일감관리",
    "companyNameEn": "working",
    "companyType": "managed",
    "uuid": "413d72e6-04e0-4fe8-a715-1e4adfb43413",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "변화관리",
    "companyNameEn": "chg",
    "companyType": "managed",
    "uuid": "b889461e-a299-4a90-8fb2-eee5dedaf35d",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "삼성전자",
    "companyNameEn": "SAMSUNG",
    "companyType": "managed",
    "uuid": "fa0304c5-4a4d-45a2-8769-b5892b17136e",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "기업확인",
    "companyNameEn": "confrim",
    "companyType": "managed",
    "uuid": "6e625b0b-a6e1-403f-9fb4-6265a0937658",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "회원사",
    "companyNameEn": "Sub Test Company",
    "companyType": "managed",
    "uuid": "efcc683b-4489-4593-84cd-fe2851e19241",
    "defaultSelectYn": "N"
  },
  {
    "companyNameKr": "스트라토",
    "companyNameEn": "Strato",
    "companyType": "managing",
    "uuid": "77eeb5a5-d08d-49b6-a7fe-e15a941a9607",
    "defaultSelectYn": "N"
  }
])

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

<style scoped lang="scss">
.show-header {
  position: relative;
  top: 0;
  height: 100%;
  width: 100%;
  padding: 68px 0;
}

#bell-button {
  width: 48px;
  height: 48px;
  min-width: 48px;
}

</style>
