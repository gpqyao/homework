<template>
  <div>
    <div class="title">我是一个显示内容 --child</div>
  </div>
</template>

<script>
export default {
    // 在vue中接受父组件通过自定义属性传递过来的数据，通过配置props来接受
    // 语法： props：数组|对象
    // 数组：此方式一般用于你自己定义组件给自己所用 简写方式
    // 对象：封装的组件提供给别人使用，它可以限制属性的类型和默认值
    props:{
      attrtitle:{
        type:String,
        default:'字符串'
      },age:{
        type:Number,
        default:() => 10,
        validator:value => {
          // console.lang(args)
          if(value > 90){
            return false
          }
            return true
        }
      }
    }
}
</script>

<style lang="scss" scoped>
    // lang指定当前的css的预处理版本，如果没有使用css如果安装时，选中对应方案
    // scoped 样式作用域  名称保护 命名空间
    // 在编译的时候，给绑定的css元素添加一个不重复的hash字符串
    // 当前属性名称，然后它通过css3属性
.title{
    color: palegoldenrod;
}
</style>
