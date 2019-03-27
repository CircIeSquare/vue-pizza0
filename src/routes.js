//一级路由
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/About/About'
import Login from './components/Login'
import Register from './components/Register'

//二级路由
import Contact from './components/About/Contact'
import Delivery from './components/About/Delivery'
import History from './components/About/History'
import OrderingGuide from './components/About/OrderingGuide'

//三级路由
import Phone from './components/About/contact/Phone'
import PersonName from './components/About/contact/PersonName'

export const routes = [
    {path:'/',name:'homeLink',/*component:Home*/
        components:{
             default:Home,
            'orderingGuide':OrderingGuide,
            'delivery':Delivery,
            'history':History
        }
    },
    {path:'/menu',name:'menuLink',component:Menu},
    {path:'/admin',name:'adminLink',component:Admin,
    //beforeEnter:(to,from,next)=>{
        //组件内守卫,路由独享守卫
        //alert("非登录状态，不能访问此页面");  
        //next(false);
  
        //   //判端store.getters.isLogin === false
        //   if(to.path=='/login'|| to.path== '/register'){
        //     next();
        //   }else{
        //     alert("还没有登录，请先登录");
        //     next('login');
        //   }
    //}
    },
    {path:'/about',name:'aboutLink',component:About,redirect:'/about/contact',
      children:[
        {path:'/about/contact',name:"contactLink",component:Contact,redirect:'/personname',
        children:[
          {path:'/phone',name:"phoneNumberLink",component:Phone},
          {path:'/personname',name:"personnameLink",component:PersonName}
        ]},
        {path:'/history',name:"historyLink",component:History},
        {path:'/delivery',name:"deliveryLink",component:Delivery},
        {path:'/orderingGuide',name:"orderingGuideLink",component:OrderingGuide}
      ]
    },
    {path:'/login',name:'loginLink',component:Login},
    {path:'/register',name:'registerLink',component:Register},
    {path:"*",redirect:'/'}
  ]