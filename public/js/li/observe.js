function observe(data){
  if(!typeof data!=='object' || typeof data ==null)return
  // 排除不是对象的类型

  for(let key in data){
    // 只对对象进行劫持处理
    reactive(data,key,data[key])
  }
}
// 响应式数据处理 target目标对象
function reactive(target,key,value){
  Object.defineProperty(target,key,{
    get(){
      return value
    },
    set(v){
      value = v
    }
  })
}
export default observe