<template>
  <v-col cols='auto'>
    <v-row>
      <v-col>
        <div class='workFlowEl' :class='type'>
          <div :class='type + "El"' class='centerVertical textAlignCenter flowEL'>
            <span :class='type + "Text"'>{{ title }}</span>
          </div>
        </div>
        <div class='centerVertical workFlowEl editUser textAlignCenter' :class='type'>
          {{ userName }}<br/>{{ updateDate }}
        </div>
      </v-col>
    </v-row>
  </v-col>
  <v-col cols='auto' v-if='showArrow'>
    <v-row>
      <v-col>
        <div class='centerVertical direction top'>
          <div class='arrowHead'></div>
        </div>
        <div class='centerVertical direction row'></div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col>
        <div class='centerVertical direction'></div>
        <div class='centerVertical direction'></div>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'WorkFlowComponent',
  props: {
    title: {
      type: String,
      default: 'default title'
    },
    userName: {
      type: String,
      default: 'default user name'
    },
    updateDate: {
      type: String,
      default: 'yyyy-MM-dd hh:mm'
    },
    showArrow: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      required: true,
      validator: (value) => {
        return ['circle', 'decision', 'dotCircle'].includes(value)
      }
    }
  }
}
</script>

<style scoped lang='scss'>
$work-flow-height: 100px;
$work-flow-width: 100px;
$work-flow-wrapper-height: 200px;
$work-flow-arrow-head-size: 15px;

.editUser {
  font-size: 12px;
}

.direction {
  height: $work-flow-height / 2;
  width: $work-flow-width / 2;
}

.top {
  position: relative;
  border-bottom: 1px solid;
}

.row {
  border-top: 1px solid;
}

.arrowHead {
  left: $work-flow-width / 2 - $work-flow-arrow-head-size - 2;
  top: $work-flow-height / 2 - $work-flow-arrow-head-size / 2;
  rotate: 45deg;
  position: absolute;
  height: 15px;
  width: 15px;
  border-right: 2px solid;
  border-top: 2px solid;
}

.decision {
  width: $work-flow-width + 44 !important;
}

.decisionEl {
  background: #d5c3fd;
  height: 100px;
  width: 100px;
  rotate: 45deg;
  left: 22px;
  position: relative;
}

.circleEl {
  background: #EFF2F5;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  padding: 0 20px;
}

.dotCircleEl {
  background: #EFF2F5;
  height: 100px;
  width: 100px;
  border-radius: 50px;
  padding: 0 20px;
  border: 3px dashed;
}

.workFlowEl {
  height: $work-flow-height;
  width: $work-flow-width;
  white-space: normal;
}
.flowEL {
  padding: 0 10px;
}
.decisionText {
  rotate: -45deg;
}

</style>