/*
 * @Author: aFei
 * @Date: 2022-11-16 16:53:45
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-01-12 11:23:38
*/
import vueEchartsBlockPlus from "./index.vue";
const arr = [vueEchartsBlockPlus];
const comment = {
  install(Vue) {
    arr.forEach(item => {
      Vue.component('vueEchartsBlockPlus', item);
    })
  },
};
// 注入script方式vue中
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(comment);
}
// 导出为全量
export default comment;