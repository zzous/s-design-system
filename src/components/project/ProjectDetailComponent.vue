<template>
  <div class="view-wrapper">
    <s-sub-header :show-cnt="false" :title="$t('기본 정보')" class-name="sub-title" />
    <s-form-table>
      <s-form-item :label="$t('프로젝트명')" name="projectName">
        {{ dataInfo.projectName }}
      </s-form-item>
      <s-form-item :label="$t('생성 일시')" name="regDate">
        {{ dataInfo.regDate || '-' }}
      </s-form-item>
      <s-form-item :label="$t('수정 일시')" name="modDate">
        {{ dataInfo.modDate || '-' }}
      </s-form-item>
      <s-form-item :label="$t('프로젝트 템플릿')" name="projectCd">
        {{ dataInfo.projectCd || '-' }}
      </s-form-item>
      <s-form-item :label="$t('패키지 정보')" name="packageCd">
        {{ dataInfo.packageCd || '-' }}
      </s-form-item>
      <s-form-item :label="$t('JDK 버전')" name="jdkVersion">
        {{ dataInfo.sourceInfo?.jdkVersion || '-' }}
      </s-form-item>
      <s-form-item :label="$t('패키지명')" name="packageName">
        {{ dataInfo.sourceInfo?.packageName || '-' }}
      </s-form-item>
      <s-form-item :label="$t('프로젝트 별칭')" name="projectAlias">
        {{ dataInfo.projectAlias || '-' }}
      </s-form-item>
      <s-form-item :label="$t('설명({{length}}자 이내)', { length: 250 })" name="projectDesc">
        <span style="white-space: pre">{{ dataInfo.projectDesc || '-' }}</span>
      </s-form-item>
    </s-form-table>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useProjectStore } from '@/stores/devops/project'

const props = defineProps({
  projectId: {
    type: [String, Number],
    required: true,
  },
})

const projectStore = useProjectStore()
const { project: dataInfo } = storeToRefs(projectStore)

onMounted(() => {
  projectStore.getProject(props.projectId)
})
</script>

<style lang="scss" scoped></style>
