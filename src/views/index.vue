/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-09-21 17:22:36
*/
<template>
  <div class="demo">
    <el-scrollbar>
      <el-button @click="changeData">切换数据</el-button>
      <vue-echarts-block-plus id="a" :option="option" />
    </el-scrollbar>
  </div>
</template>
<script setup>
import vueEchartsBlockPlus from "~/lib/index.vue";
const option = ref({});
const type = ref(2);
const changeData = () => {
  type.value = type.value === 1 ? 2 : 1;
  if (type.value === 1) {
    const data = [];
    for (let i = 0; i <= 360; i++) {
      let t = (i / 180) * Math.PI;
      let r = Math.sin(2 * t) * Math.cos(2 * t);
      data.push([r, i]);
    }
    option.value = {
      title: {
        text: "极坐标双数值轴",
      },
      legend: {
        data: ["line"],
      },
      polar: {
        center: ["50%", "54%"],
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
        },
      },
      angleAxis: {
        type: "value",
        startAngle: 0,
      },
      radiusAxis: {
        min: 0,
      },
      series: [
        {
          coordinateSystem: "polar",
          name: "line",
          type: "line",
          showSymbol: false,
          data: data,
        },
      ],
      animationDuration: 2000,
    };
  } else {
    option.value = {
      title: {
        text: "阶梯瀑布图",
        subtext: "Living Expenses in Shenzhen",
      },
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
        formatter: function (params) {
          var tar = params[1];
          return tar.name + "<br/>" + tar.seriesName + " : " + tar.value;
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      xAxis: {
        type: "category",
        splitLine: { show: false },
        data: [
          "Total",
          "Rent",
          "Utilities",
          "Transportation",
          "Meals",
          "Other",
        ],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "Placeholder",
          type: "bar",
          stack: "Total",
          itemStyle: {
            borderColor: "transparent",
            color: "transparent",
          },
          emphasis: {
            itemStyle: {
              borderColor: "transparent",
              color: "transparent",
            },
          },
          data: [0, 1700, 1400, 1200, 300, 0],
        },
        {
          name: "Life Cost",
          type: "bar",
          stack: "Total",
          label: {
            show: true,
            position: "inside",
          },
          data: [2900, 1200, 300, 200, 900, 300],
        },
      ],
    };
  }
};
changeData();
</script>