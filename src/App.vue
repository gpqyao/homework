<template>
<div>
  <h3>组件</h3>
  <hr />
  <div>gpqyao</div>
  <hr>
  <child :title="title" />
  <child :attrtitle:='字符串'/>

</div>
  
</template>

<script>
// 引入组件
// @在vue工程中，进行了webpack别名配置，指向src目录
import child from '@/components/child.vue'
  export default{
    components:{
      child
    },
    data(){
      return{
        title:'这是显示内容'
      }
    }
  }
</script>

<style lang="scss">

</style>
