import Vue from 'vue'
import Router from 'vue-router'

import Slider from '@/components/Landing/Slider'
import HowDoesItWork from '@/components/Landing/HowDoesItWork'

import ListMenu from '@/components/ListMenu.vue'
import Footer from '@/components/Footer.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Slider',
			components: {
				default: ListMenu,
				blockBanner: Slider,
				blockFooter: Footer
			}
		},
		{
			path: '/sucursal/:id?',
			name: 'HowDoesItWork',
			components: {
				default: ListMenu,
				containerBlock: HowDoesItWork,
				footerBlock: Footer
			}
		}
	]
})
