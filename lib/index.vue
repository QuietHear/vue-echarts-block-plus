/*
 * @Author: aFei
 * @Date: 2022-11-16 16:53:45
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2022-11-17 11:05:07
*/
<template>
  <div :id="id" class="vue-echarts-block-plus"></div>
</template>
<script>
import * as echarts from "echarts";
import { onBeforeUnmount, shallowRef, watch, onMounted } from "vue";
export default {
  name: "vueEchartsBlockPlus",
  emits: ["getRef"],
  props: {
    // 图表ID
    id: {
      required: true,
    },
    // 设置数据（setOption）时的规则
    optionOpts: {
      type: Object,
      default: () => {
        return {
          notMerge: true,
        };
      },
    },
    // 图表配置
    option: {
      type: Object,
      required: true,
    },
  },
  setup(props, { attrs, slots, emit, expose }) {
    const myChart = shallowRef();
    // Echarts重绘
    const changeSize = () => {
      myChart.value.resize();
    };
    // 数据重置
    const changeData = () => {
      myChart.value.setOption(props.option, props.optionOpts);
    };
    onMounted(() => {
      myChart.value = echarts.init(document.getElementById(props.id));
      emit("getRef", myChart.value);
      changeData();
      window.addEventListener("resize", changeSize);
    });
    onBeforeUnmount(() => {
      myChart.value.dispose();
      window.removeEventListener("resize", changeSize);
    });
    // 监听数据
    watch(
      () => props.option,
      () => {
        changeData();
      }
    );
    return {};
  },
};
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>