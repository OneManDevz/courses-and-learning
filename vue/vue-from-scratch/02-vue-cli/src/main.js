import Vue from 'vue';
import App from './App.vue';
import Tasks from './components/Tasks';
import HelloWorld from './components/HelloWorld';
import NotFound from './components/NotFound';
import VueRouter from 'vue-router';
import User from './components/User';

Vue.use(VueRouter);

Vue.config.productionTip = false;

const router = new VueRouter({
  routes: [
    { path: '/', component: HelloWorld },
    { path: '/tasks', component: Tasks },
    { path: '/user/:id', component: User },
    { path: '*', component: NotFound }
  ],
  mode: 'history'
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
