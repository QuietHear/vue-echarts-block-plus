# echarts组件（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-echarts-block '浏览')


## 安装
	npm i vue-echarts-block-plus
	// 不需要再安装官方组件，已内置（echarts v5.4.0）

## 使用
	import vueEchartsBlockPlus from "vue-echarts-block-plus";
	import "vue-echarts-block-plus/index.css";
	
	app.use(vueEchartsBlockPlus);


## 0. 可改动样式变量
* `--echarts-block-height`：400px;-->组件高度

* `--echarts-block-width`：90%;-->组件宽度


## 1. 参数
* `id`：图表ID-->Boolean;必传

* `optionOpts`：设置数据（setOption）时的规则-->Object;非必传;默认*{notMerge:true}*

* `option`：图表配置-->Object;必传

* `@getRef`：图标创建时触发-->第一个参数返回图表ref