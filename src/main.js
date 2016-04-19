import Vue from 'vue'
import App from './components/App.vue'
import Router from 'vue-router'
import InvestList from './views/InvestList.vue'
import BidDetail from './views/BidDetail.vue'
import Resource from 'vue-resource'
import countback from './filter/countback'


Vue.config.debug = true;


// 挂载路由
Vue.use(Router);


Vue.use(Resource);


//注册自定义的过滤器
Vue.filter('countback', countback);



// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var WebApp = Vue.extend()

// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new Router({
    linkActiveClass: 'v-link-active'



})

/**
 * 可以自定义属性logined  ，并且配合路由全局hook函数做验证
 */
router.beforeEach((transition) => {

    if (transition.to.name === 'account' && !transition.to.logined) {
        //  transition.abort();
        router.go({ name: 'login' });


    } else {

        transition.next();

    }



})

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
    '/': {
        component: App,
        logined: true,//嵌套路由，同名属性（logined）会被覆盖
        subRoutes: {
            '/': {
                name: 'default',
                component: {
                    template: '<p>Default sub view for webapp</p>'
                }
            },
            'index': {
                name: 'index',
                component: {
                    template: '<p>Default sub view for index</p>'
                }

            },
            '/account': {
                name: 'account',
                logined: false,
                component: {
                    template: `<div>
                                   <p>Default sub view for account</p>
                                   <p>{{$route.path}}</p>
                                   <p>{{$route.name}}</p>
                              </div>`
                }
            },
            '/investList': {
                name: 'investList',
                component: InvestList

            },
            '/login': {
                name: 'login',
                component: {
                    template: '<p>Default sub view for login</p>'
                }
            },
            '/regist': {
                name: 'regist',
                component: {
                    template: '<p>Default sub view for regist</p>'
                }
            },
            '/bidDetail/:bidId': {
                name: 'bidDetail',
                component: BidDetail


            },
            '/bidForm': {
                name: 'bidForm',
                component: {
                    template: '<p>Default sub view for bid-form</p>'
                }

            },
            '/loanInfo': {
                name: 'loanInfo',
                component: {
                    template: '<p>Default sub view for loanInfo</p>'
                }

            },
            '/bidRec': {
                name: 'bidRec',
                component: {
                    template: '<p>Default sub view for bidRec</p>'
                }

            },
            '/loanImgs': {
                name: 'loanImgs',
                component: {
                    template: '<p>Default sub view for loanImgs</p>'
                }

            }
        }
    }

})

// 现在我们可以启动应用了！
// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(WebApp, 'body')

// var vm = new Vue({
//     el: 'body',
//     components: {
//         App
//     }
// })
