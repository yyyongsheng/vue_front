<template>
<el-container>
  <!-- 左侧公共部分 -->
  <el-aside width="200px">
    <app-aside> </app-aside>
  </el-aside>

  <el-container>
    <!-- 头部公共部分 -->
    <el-header>
       <app-header></app-header> 
     </el-header>
     <!-- 动态变化部分 -->
    <el-main>
      <router-view>
       
      </router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<script>
 import AsideComponent from "./frame/Aside.vue";
 import HeaderComponent from "./frame/Header.vue";
  export default {
     components:{
       appAside:AsideComponent,
       appHeader:HeaderComponent,
     }

  }
</script>

<style scoped lang="less">
.el-container{
  height: 100%;
}
  
  .el-aside {
    background-color: orangered;
    color: white;
    text-align: center;
    border-right: 3px solid yellow;
   
  }
  .el-header{
    // padding: 0;
    background: rgba(243, 5, 5, 0.932);
    color: white;
    text-align: right;
    line-height: 60px;
    
  }
  .el-main {
    background-color:orange;
    color: white;
   
   // text-align: center;
  }
 
  

</style>