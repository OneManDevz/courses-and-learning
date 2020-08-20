import Vue from 'vue'
import VueRouter from 'vue-router'

// views
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tunes from '../views/Tunes.vue'

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'home',
		// Code of this page is loaded the moment page loads
		component: Home
	},
	{
		path: '/tunes',
		name: 'tunes',
		component: Tunes
	},
	{
		path: '/about',
		name: 'about',
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
