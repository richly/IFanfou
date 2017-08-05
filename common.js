//全局公用配置
//****************************************
/* 全局有三个参数
 * __PROJECT 项目名称
 * __ENV 环境模式 development || production
 * __VERSION 版本号（不带v）
*/

//去掉提示，可取消
Vue.config.productTip = false;

//基础样式
// import  '@/css/reset.css'

//获取数据插件 like ajax
import VueResource from 'vue-resource'
Vue.use(VueResource);

//语言包
import Lang from '@/lang'
Vue.filter('lang',Lang.filter);
export {
    Lang
}

//过滤器
import Install from 'build/filters/index'

//接口配置
import * as Service from '@/service'
Vue.use(Service);
export {
    Service
};

//控制台输出辅助信息
if(__ENV == 'development') {
    setTimeout(()=>{
        console.log('语言包:',Lang);
    })
}

// ###################################################################
//全局 Vue 实例 以及 第一层组件实例 app
var vm,dispatch = () => {},
    commit = () => {};
const initVue = (_vm) => {
    vm = _vm,
    if (Vuex && vm.$store) {
        dispatch = vm.$store.dispatch;
        commit = vm.$store.commit;
    }
}
export {
    vm
};
export {
    dispatch
};
export {
    commit
};

//配置入口
export const set = ({
    vm
}) => {
    if (vm) {
        initVue(vm);
    }
}

//##########################################################
//自定义方法，根据项目需要来编写