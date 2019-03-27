import Vue from 'vue'
import Vuex from 'vuex'


// 
//对store文件的抽离
import * as actions from './actions.js'
import * as getters from './getters.js'
import * as mutations from './mutations.js'

/*
*Modulel对store文件的模块化
*/
// import Menu from './module/menu.js'
// import Status from './module/status.js'
// import Users from './module/users.js'

Vue.use(Vuex)

export const store=new Vuex.Store({
    
    //store文件的module模块化写法
    // modules:{
    //     Menu,
    //     Status,
    //     Users
    // }

    //store文件的抽离写法
    getters,
    mutations,
    actions

    // store文件的集合写法
    // state:{
    //     //设置属性
    //     menuItems:{},
    //     currentUser:null,
    //     isLogin:false
    // },

    // getters:{
        //获取属性的状态
        // getMenuItems:(state)=>{
        //     state.menuItems;        
        // },
        // currentUser:(state)=>{
        //     state.currentUser;
        // },
        // isLogin:(state)=>state.isLogin
    // },
    
    // mutations:{
    //     //改变属性的状态
    //     setMenuItems(state,data){
    //         state.menuItems=data;
    //     },
    //     //将匹配到的数组在menuItems数组中删除
    //     removeMenuItems(state,item){
    //         state.menuItems.forEach((item,index)=> {
    //            if(item==data){
    //                state.menuItems.splice(index,1);
    //            } 
    //         });
    //     },
    //     //将新添加的pizza push到menuItems属性中
    //     pushToMenuItems(state,data){
    //         state.menuItems.push(data);
    //     },
    //     //更改用户的状态信息
    //     userStatus(state,user){
    //         if(user){
    //             state.currentUser=user,
    //             state.isLogin=true
    //         }else{
    //             state.currentUser=null,
    //             state.isLogin=false
    //         }
    //     }
    // },
    
    // actions:{
    //     //应用mutations,不直接操作状态
    //     setUser({commit},user){
    //         commit("userStatus",user);
    //     }
    // }


});
