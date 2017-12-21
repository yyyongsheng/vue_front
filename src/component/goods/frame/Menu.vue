<template>
  <p>
    <router-link :to="{name:'gd',params:{id:item.id}}"  v-for="item in menu" :key="item.id">
      
    {{item.title}}
    

       <!-- 这里判断item是否还有子级数据, 如果有那么递归调用自己进行数据的渲染, 如果没有递归结束 -->
       
       <app-menu v-if="item.subcates && item.subcates.length!=0" :menu="item.subcates"></app-menu>


   </router-link>


  </p>
</template>

<script>
  export default {
    name:"app-menu",

    props:['menu']
    
  }
</script>

<style scoped>

</style>