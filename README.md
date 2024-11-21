# echarts组件（vue3版）
***vue3版本*** | [**vue2版本**](https://github.com/QuietHear/vue-echarts-block '右键新窗口浏览')


## 预览
	clone项目后npm run preview即可


## 安装
	npm i vue-echarts-block-plus
	// 不需要再安装官方组件，已内置（echarts v5.5.1）


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


## 2. 方法
* `changeSize`：手动重绘当前图表


## 2. 官方文档
[https://echarts.apache.org/zh/index.html](https://echarts.apache.org/zh/index.html '文档')


## 更多vue3组件
[**自定义右键菜单**](https://github.com/QuietHear/vue-diy-rightmenu-plus '右键新窗口浏览') | [**拖拽卡片布局组件**](https://github.com/QuietHear/vue-drag-component-plus '右键新窗口浏览') | [**可拖拽菜单**](https://github.com/QuietHear/vue-drag-menu-plus '右键新窗口浏览') | ***echarts组件*** | [**基于el-menu的菜单组件**](https://github.com/QuietHear/vue-ele-nav-plus '右键新窗口浏览') | [**面包屑组件**](https://github.com/QuietHear/vue-permission-breads-plus '右键新窗口浏览') | [**滑动拼图**](https://github.com/QuietHear/vue-puzzle-slider-plus '右键新窗口浏览') | [**工作日历**](https://github.com/QuietHear/vue-shop-calendar-plus '右键新窗口浏览') | [**多页签组件**](https://github.com/QuietHear/vue-tabs-plus '右键新窗口浏览') | [**uEditor**](https://github.com/QuietHear/vue-ueditor-block-plus '右键新窗口浏览') | [**wangEditor**](https://github.com/QuietHear/vue-wangEditor-block-plus '右键新窗口浏览') | [**年密度组件**](https://github.com/QuietHear/vue-year-density-plus '右键新窗口浏览')