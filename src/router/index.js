import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Admin from '@/components/Admin'
import AddUser from '@/components/AddUser'
import EditUser from '@/components/EditUser'
import UserDash from '@/components/UserDash'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: { requiresAuth: true }
    },
    {
      path: '/user',
      name: 'UserDash',
      component: UserDash,
      meta: { requiresAuth: true }
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { requiresAuth: true }
    },
    {
      path: '/regis',
      name: 'Register',
      component: Register
    },
    {
      path: '/add-user',
      name: 'AddUser',
      component: AddUser,
      meta: { requiresAuth: true }
    },
    {
      path: '/Admin/edit_user/:id?',
      name: 'EditUser',
      component: EditUser
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }

  ]
})

router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
    if(!localStorage.getItem('jwt')){
      next({
        path: '/login',
        query: { redirect: to.fullPath}
      });
    }else{
      next()
    }
  }else{
    next()
  }
})

export default router