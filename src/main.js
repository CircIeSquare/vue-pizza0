import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'


//引入Vuex配置文件
import {store} from './store/store.js'

//引入路由配置文件
import {routes} from './routes';
import axios from 'axios'

//引入animate.css动画
import animated from 'animate.css'
Vue.use(animated);

//引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);

//Vue使用路由插件
Vue.use(VueRouter)


//设置axios的全局url
axios.defaults.baseURL='https://wd2468178309upkmpi.wilddogio.com/'

//配置Vue原型(在任何组件中都可以正常使用axios)
Vue.prototype.http=axios;

//生成路由配置，设置路由
const router=new VueRouter({
  routes,
  mode:'history',
  //路由控制滚动行为
  scrollBehavior(to,from,savedPosition){
      //x轴为0，y轴为100
      //return {x:0,y:100}
      //return {selector:".btn"}  //跳转到.btn元素的位置

      //保存上次滚动位置
      // if(savedPosition){
      //   return savedPosition
      // }else{
      //   return {x:0,y:0}
      // }

  }
})

//全局守卫
// router.beforeEach((to,from,next)=>{
//   //alert("还没有登录，请先登录");
//   //next();
//   console.log(to);

//   //判端store.getters.isLogin === false
//   //if(to.path)
//   if(to.path=='/login'|| to.path== '/register'){
//     next();
//   }else{
//     alert("还没有登录，请先登录");
//     next('login');
//   }
// });

//后置钩子
// router.afterEach((to,from)=>{
//   alert("after each");
// });


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
