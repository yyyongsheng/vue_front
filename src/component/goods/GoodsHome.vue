<template>
  <div>
   <app-breadcumd></app-breadcumd>
   <app-top></app-top>
   <app-list></app-list>
  </div>
</template>

<script>
  import BreadcumdComonent from './frame/Breadcumd.vue';
  import TopComonent from './frame/Top.vue';
  import ListComonent from './frame/List.vue';


  export default {
      components:{
        appBreadcumd:BreadcumdComonent,
        appTop:TopComonent,
        appList:ListComonent
      }


  }
</script>

<style scoped>

</style>