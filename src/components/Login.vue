<template>
    <div class="row mt-3">
        <div class="col-md-12 col-lg-12">
            <div class="card">
                <div class="card-body">
                    <!-- <img src="../../src/assets/logo.png" alt="" class="mx-auto d-block"> -->
                    <!-- <img src="../../dist/logo.png" alt="" class="mx-auto d-block"> -->
                     <img :src="picUrl" alt="" class="mx-auto d-block">
                    <form @submit.prevent='onSubmit'>
                        <div class="form-group">
                            <label for="email">邮箱</label>
                            <input type="email" v-model='email' value="" class='form-control'>
                        </div>
                        <div class="form-group">
                            <label for="password">密码</label>
                            <input type="password" v-model='password' value="" class='form-control'>
                        </div>
                        <button type="submit" class="btn btn-block btn-success">登录</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import logoPic from '../../src/assets/logo.png'
    export default{
        data(){
            return{
                picUrl:logoPic,
                email:'123@test.com',
                password:'123',
            }
        },
        //组件内路由守卫
        beforeRouteEnter:(to,from,next)=>{
            //this.$store.dispatch("setUser",null);
            //next((vm)=>vm.$store.dispatch("setUser",null));
            next((vm)=>vm.$store.commit("userStatus",null));
        },
        methods:{
            onSubmit(){
                //console.log(111);

                //get野狗云数据
                // axios.get('/user.json')
                // .then(res=>{
                //     const data=res.data;
                //     const users=[];
                //     for(let key in data){
                //         const user=data[key];
                //         //console.log(user);
                //         users.push(user);
                //     }
                    
                //     //实现过滤
                //     let result=users.filter(()=>{
                //         return user.email===this.email&&user.password===this.password;
                //     });
                //     console.log(result);
                // });

                // if(result!==null&&result.length>0){
                //       this.$store.dispatch("setUser",result[0].email); 
                //     this.$router.push({name:'homeLink'});
                // }else{
                //       this.$store.dispatch("setUser",null); 
                //     alert("账号密码错误");
                // }
                if(this.email=="123@test.com"&&this.password=='123'){
                    alert(this.email);
                    //使用dispatch提交actions报错，数据不同步
                    //this.$store.dispatch("setUser",this.email);

                    //直接用commit提交到mutation
                    this.$store.commit("userStatus",this.email);
                    this.$router.push({name:'homeLink'});
                }else{
                    this.$store.dispatch("setUser",null); 
                    alert("账号密码错误");
                }    

            }
        }

    }
</script>