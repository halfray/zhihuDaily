import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import index from '@/components/index'


Vue.use(Router)

export default new Router({
  routes: [
 	{path:'/',component:index},
    // { path: '/',name: 'HelloWorld',component: HelloWorld}
  ]
})