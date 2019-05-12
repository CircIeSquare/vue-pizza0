const state={
    currentUser:null,
};

const getters={
    currentUser:(state)=>{
        state.currentUser;
    },
};

const actions={
    //应用mutations,不直接操作状态
        setUser({commit},user){
            commit("userStatus",user);
        }    
};

const mutations={
        //更改用户的状态信息
        userStatus(state,user){
            if(user){
                state.currentUser=user,
                state.isLogin=true
            }else{
                state.currentUser=null,
                state.isLogin=false
            }
        }
};

export default{
    state,
    getters,
    actions,
    mutations
}
