import vueKnEva from './vue-kn-eva.vue' // 导入组件
const knEva = {}
knEva.install = function (Vue, options) {
  Vue.component(vueKnEva.name, vueKnEva)
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(knEva);
}
export default knEva // 导出..
