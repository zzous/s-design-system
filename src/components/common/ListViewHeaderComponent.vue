<template>
  <div class='titleWrapper mr-2'>
    <div class='titleContainer d-flex justify-space-between align-center'>
      <span class='titleContents'>
        <img :src='titleSvgPath' alt='icon' class='titleIcon'/>
        {{title}} ({{ listCnt }})
      </span>
        <div class="d-flex inputWrapper">
          <slot/>
        </div>
    </div>

  </div>
</template>

<script>
import titleSvg from '@/assets/svg/title_bg.svg'
export default {
  name: 'ListViewHeaderComponent',
  props: {
    title: {
      type: String,
      required: true
    },
    listCnt: {
      type: Number,
      default: 0
    }
  },
  data: function() {
    return {
      titleSvgPath: titleSvg
    }
  }
}
</script>

<style scoped>
.titleWrapper {
  border-bottom: 1px solid #eeeeee;
  height: 50px;
  align-items: center;
}

.titleIcon {
  width: 24px; /* 아이콘 크기 */
  height: 24px;
  margin-right: 8px; /* 타이틀과의 간격 */
}
.titleContents {
  display: inline-flex;
}
</style>