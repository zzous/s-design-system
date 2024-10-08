<template>
  <div class="view-wrapper">
    <s-sub-header :title="$t('기본 정보')" :show-cnt="false" class-name="sub-title" />
    <form>
      <div class="table__form">
        <s-form-item :label="$t('템플릿')" required />
        <s-form-item :label="$t('프로젝트 명')" required />
        <s-form-item :label="$t('프로젝트 별칭')" />
        <s-form-item :label="$t('빌드 승인 프로세스')" required />
        <s-form-item :label="$t('배포 승인 프로세스')" required />
        <s-form-item :label="$t('프로젝트 관리자')" required />
        <s-form-item :label="$t('설명(250자 이내)')" />
      </div>

      <s-sub-header :title="$t('템플릿 속성')" :show-cnt="false" class-name="sub-title" />
      <div class="table__form">
        <s-form-item :label="$t('패키지 명')" required />
        <s-form-item :label="$t('JDK 버전')" required />
      </div>
    </form>
    <div class="form__btn-wrapper">
      <s-btn color="blue">
        {{ $t('저장') }}
      </s-btn>
      <s-btn variant="outlined" color="blue" @click="$emit('click:cancel')">
        {{ $t('취소') }}
      </s-btn>
    </div>
  </div>
</template>

<script setup>

defineEmits(['click:cancel'])

</script>

<style lang="scss" scoped>

</style>