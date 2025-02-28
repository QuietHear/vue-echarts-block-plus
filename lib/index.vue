/*
* @Author: aFei
* @Date: 2022-11-16 16:53:45
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2025-02-28 09:52:10
*/
<template>
  <div :id="id" class="vue-echarts-block-plus"></div>
</template>
<script setup>
import * as echarts from "echarts";
const emit = defineEmits(["getRef"]);
const props = defineProps({
  // 图表ID
  id: {
    required: true
  },
  // 设置数据（setOption）时的规则
  optionOpts: {
    type: Object,
    default: () => {
      return {
        notMerge: true
      };
    }
  },
  // 图表配置
  option: {
    type: Object,
    required: true
  }
});
const myChart = shallowRef();
// Echarts重绘
const changeSize = () => {
  myChart.value?.resize();
};
// 数据重置
const changeData = () => {
  myChart.value.setOption(props.option, props.optionOpts);
};
// 定时器
const inter = ref(null);
const init = () => {
  myChart.value = echarts.init(document.getElementById(props.id));
  emit("getRef", myChart.value);
  changeData();
  resizePageObserver.observe(document.getElementById(props.id));
};
const resizePageObserver = new ResizeObserver(entries => {
  changeSize();
});
onMounted(() => {
  console.log(document.getElementById(props.id), 'dom begin');
  if (document.getElementById(props.id)) {
    init();
  } else {
    inter.value = setInterval(() => {
      console.log(document.getElementById(props.id), 'dom watch');
      if (document.getElementById(props.id)) {
        clearInterval(inter.value);
        init();
      }
    }, 500)
  }
});
onBeforeUnmount(() => {
  if (myChart.value) {
    myChart.value.dispose();
    document.getElementById(props.id) ? resizePageObserver.unobserve(document.getElementById(props.id)) : null;
  } else {
    clearInterval(inter.value);
  }
});
// 监听数据
watch(
  () => props.option,
  () => {
    changeData();
  },
  {
    deep: true
  }
);
defineExpose({ changeSize });
</script>
<style lang="scss">
@use "style/index.scss" as *;
</style>