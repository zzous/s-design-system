<template>
  <div class="progress-stages">
    <div v-for="stage in stages" :key="stage.id" class="stage-item">
      <div class="stage-header" :class="getStageHeaderClass(stage)">
        <div class="d-flex align-center">
          <v-icon :icon="getStatusIcon(stage.status)" :color="getStatusColor(stage.status)" size="small" class="mr-2" />
          <span class="stage-title">{{ stage.title }}</span>
        </div>
      </div>

      <div class="sub-stages">
        <div
          v-for="(subStage, index) in stage.subStages"
          :key="subStage.id"
          class="sub-stage-item"
          :class="getStageStatusClass(subStage)"
        >
          <div class="d-flex align-center justify-space-between">
            <span :style="{ color: getTextColor(subStage.status) }">
              {{ `${stage.id}-${index + 1}. ${subStage.title}` }}
            </span>
            <v-icon
              v-if="subStage.children?.length"
              :icon="expanded.includes(subStage.id) ? 'mdi-chevron-up' : 'mdi-chevron-down'"
              size="small"
              @click.stop="toggleSubStage(subStage)"
            />
          </div>

          <v-expand-transition>
            <div v-if="expanded.includes(subStage.id) && subStage.children?.length" class="sub-stage-children">
              <div
                v-for="child in subStage.children"
                :key="child.id"
                class="sub-stage-child"
                :class="getStageStatusClass(child)"
              >
                {{ child.title }}
              </div>
            </div>
          </v-expand-transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const { stages } = defineProps({
  stages: {
    type: Array,
    required: true,
  },
})

const expanded = ref([])

const toggleSubStage = subStage => {
  const index = expanded.value.indexOf(subStage.id)
  if (index === -1) {
    expanded.value.push(subStage.id)
  } else {
    expanded.value.splice(index, 1)
  }
}

const getStageHeaderClass = stage => {
  return {
    'stage-header--completed': stage.status === 'completed',
    'stage-header--in-progress': stage.status === 'in-progress',
    'stage-header--pending': stage.status === 'pending',
    'stage-header--delayed': stage.status === 'delayed',
  }
}

const getStageStatusClass = stage => {
  return {
    'sub-stage-item--completed': stage.status === 'completed',
    'sub-stage-item--in-progress': stage.status === 'in-progress',
    'sub-stage-item--pending': stage.status === 'pending',
    'sub-stage-item--delayed': stage.status === 'delayed',
  }
}

const getStatusIcon = status => {
  switch (status) {
    case 'completed':
      return 'mdi-check-circle'
    case 'in-progress':
      return 'mdi-progress-clock'
    default:
      return 'mdi-circle-outline'
  }
}

const getStatusColor = status => {
  switch (status) {
    case 'completed':
      return 'success'
    case 'in-progress':
      return 'primary'
    default:
      return 'grey'
  }
}

const getTextColor = status => {
  switch (status) {
    case 'completed':
      return '#00BA88' // success dark
    case 'in-progress':
      return '#1297F2' // primary dark
    default:
      return '#6C6C6C' // grey darken-1
  }
}
</script>

<style lang="scss" scoped>
.progress-stages {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 20px;
  margin-top: 20px;

  .stage-item {
    border: 1px solid $s-default--gray-5;
    border-radius: 4px;
    overflow: hidden;

    .stage-header {
      padding: 12px;
      background-color: $s-default--gray-1;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: default;

      &.stage-header--completed {
        background-color: rgba($s-btn--green-1, 0.1);
      }

      &.stage-header--in-progress {
        background-color: rgba($s-btn--blue-1, 0.1);
      }

      &.stage-header--pending {
        background-color: rgba($s-default--gray-8, 0.1);
      }

      &.stage-header--delayed {
        background-color: rgba($s-btn--red-1, 0.1);
      }
    }

    .sub-stages {
      .sub-stage-item {
        padding: 8px 12px;
        border-top: 1px solid #e0e0e0;
        font-size: 0.9rem;
        cursor: default;

        &:has(.mdi-chevron-up, .mdi-chevron-down) {
          cursor: pointer;
        }

        &.sub-stage-item--completed {
          background-color: rgba($s-btn--green-1, 0.05);
        }

        &.sub-stage-item--in-progress {
          background-color: rgba($s-btn--blue-1, 0.05);
        }

        &.sub-stage-item--pending {
          background-color: rgba($s-default--gray-8, 0.05);
        }

        &.sub-stage-item--delayed {
          background-color: rgba($s-btn--red-1, 0.05);
        }

        .sub-stage-children {
          margin-left: 20px;
          margin-top: 8px;

          .sub-stage-child {
            padding: 4px 0;
            font-size: 0.9em;

            &.sub-stage-item--completed {
              color: $s-btn--green-1; // success dark
            }

            &.sub-stage-item--in-progress {
              color: $s-btn--blue-1; // primary dark
            }

            &.sub-stage-item--pending {
              color: $s-default--gray-8; // grey darken-1
            }

            &.sub-stage-item--delayed {
              color: $s-btn--red-1; // error dark
            }
          }
        }
      }
    }
  }
}
</style>
