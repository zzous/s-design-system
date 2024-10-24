<template>
  <div class="form-wrapper">
    <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
    <s-form-table>
      <s-form-item :label="$t('프로바이더')" name="buildName">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('클러스터')" name="branch">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('배포 복사')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('네임스페이스')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('컨트롤러 이름')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('컨트롤러')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('배포 복사')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('레플리카')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('배포 전략')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('서비스 타입')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('포트')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
      <s-form-item :label="$t('도메인')" name="deployApproveFlow">
        <v-select
          v-model="deployApproveFlow"
          variant="outlined"
          density="compact"
          hide-details="auto"
          item-value="templateId"
          item-title="templateName"
          :placeholder="$t('템플릿을 선택해주세요')"
          :items="projectTemplates"
        />
      </s-form-item>
    </s-form-table>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
