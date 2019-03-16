import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
    },
    {
      path: '/images',
      name: 'images',
      component: () => import('@/views/Images.vue'),
    },
    {
      path: '/images/add/',
      name: 'add-image',
      component: () => import('@/views/AddImage.vue'),
    },
    {
      path: '/images/add/:projectId',
      name: 'add-image-to-project',
      component: () => import('@/views/AddImage.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('@/views/Projects.vue'),
    },
    {
      path: '/projects/create',
      name: 'create-project',
      component: () => import('@/views/CreateProject.vue'),
    },
    {
      path: '/projects/:id',
      name: 'view-project',
      component: () => import('@/views/Project.vue'),
    },
  ],
});
