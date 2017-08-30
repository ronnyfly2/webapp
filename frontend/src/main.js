// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/es'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.use(ElementUI, { locale })

new Vue({
	el: '#app',
	router,
	template: '<App/>',
	components: { App }
})
