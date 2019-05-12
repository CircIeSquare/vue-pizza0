<template>
  <div id="app">
    <div class="container">
        <appHeader></appHeader>      
    </div>
    <div class="container">
      <!-- 添加animate.css过渡动画  leave-active-class="animated bounceOutDown"-->
      <transition enter-active-class="animated bounceInDown">
        <router-view></router-view>
      </transition>
      <!-- <router-view></router-view>
      <router-view></router-view>
      <router-view></router-view> -->
    </div>
    <br/>
    <!-- router-view的复用 -->
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-4">
              <router-view name='orderingGuide'></router-view>    
            </div>
            <div class="col-sm-12 col-md-4">
              <router-view name='delivery'></router-view>    
            </div>
            <div class="col-sm-12 col-md-4">
              <router-view name='history'></router-view>    
            </div>
        </div>
    </div>

    <!-- element-ui的使用 -->
    <div class="container el-button">
      <div class="row">
        <div class="col-md-9 col-offset-2">
            <el-time-select v-model="value1"
          :picker-options="{start: '08:30',step: '00:15',end: '18:30'}"
          placeholder="选择时间">
        </el-time-select>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Header from './components/Header'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      value1:''
    }
  },
  components:{
    appHeader:Header
  }
}
</script>

<style>
.el-button{margin-bottom:100px;}

</style>
