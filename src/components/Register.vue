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
                        <div class="form-group">
                            <label for="confirm-password">确认密码</label>
                            <input type="password" v-model='confirmPassword' value="" class='form-control'>
                        </div>
                        <button type="submit" class="btn btn-block btn-success">注册</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import logoPic from '../../src/assets/logo.png'
    import axios from 'axios'
    export default{
        data(){
            return{
                picUrl:logoPic,
                email:'',
                password:'',
                confirmPassword:''
            }
        },
        methods:{
            onSubmit(){
                if(this.password==this.confirmPassword){
                    const formData={
                        email:this.email,
                        password:this.password,
                        confirmPassword:this.confirmPassword
                    };
                    // axios.post('/user.json',formData)
                    //.then(res=>{
                        //console.log(res);
                        this.$router.push({name:'loginLink'});
                    //});
                }else{
                    alert("两次密码不一致");
                }
            }
        }

    }
</script>