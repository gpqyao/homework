import observe from './li/observe.js';
import proxyData from './li/proxyData.js';
import Compile from './li/Compile.js';


class Vue{
    constructor(options){
        this.$el=options.$el
        this.$data = options.data

        // 响应
        observe(this.$data)
        // 获取数据简化
        proxyData(this)

        // 模板编译
        new Compile(this.$el,this.$data)
    }
}

export default Vue