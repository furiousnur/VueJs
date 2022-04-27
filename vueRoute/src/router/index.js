import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeComponent from "../components/HomeComponent";
import AboutComponent from "../components/AboutComponent";
import ContactComponent from "../components/ContactComponent";
import ProfileComponent from "../components/ProfileComponent";

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/hello-world',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/',
      name: 'HomeComponent',
      component: HomeComponent
    },{
      path: '/about',
      name: 'AboutComponent',
      component: AboutComponent
    },{
      path: '/contact',
      name: 'ContactComponent',
      component: ContactComponent
    },{
      path: '/profile/:user_id',
      name: 'ProfileComponent',
      component: ProfileComponent
    }
  ]
})
