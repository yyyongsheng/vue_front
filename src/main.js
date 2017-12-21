// 1.1 导入第三包
import Vue from 'vue';
// 导入第三方包
import  VueRouter from "vue-router";
import ElementUI from 'element-ui';
import Filters from "./filter";
import 'element-ui/lib/theme-chalk/index.css'

import './css/style.css'

Vue.use(VueRouter);
Vue.use(ElementUI)
Vue.use(Filters)


// 1.3 把axios和api配置对象注入到Vue原型中, 这样组件实例就可以直接访问

    import axios from "./js/axios_config.js";

    import api from "./js/api_config.js";

    Vue.prototype.$http=axios;

    Vue.prototype.$api=api;






// 导入根组件
import AppComponent from "./component/App.vue"

import router from './router'


// 渲染根组件, 启动应用程序
new Vue({
    el: '#app',
    render: c => c(AppComponent),
    router:router

});