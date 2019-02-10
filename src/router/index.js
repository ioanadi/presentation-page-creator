import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import CreatePage from '@/components/CreatePage';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
			props: true,
		},
		{
			path: '/CreatePage',
			name: 'CreatePage',
			component: CreatePage,
			props: true,
		},
	],
});
