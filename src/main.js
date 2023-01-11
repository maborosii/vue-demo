import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import './plugins/element.js'

// css 初始化
import './assets/css/reset.css'

// iconfont 初始化
import './assets/css/iconfont.css'

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: (h) => h(App),
}).$mount('#app')