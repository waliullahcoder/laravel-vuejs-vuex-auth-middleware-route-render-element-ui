
require('./bootstrap');

window.Vue = require('vue').default;


import router from './router/admin-router'
import store from './store'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css';



Vue.component('backend-master-component', require('./components/AdminApp.vue').default);

Vue.use(ElementUI, { locale })

const adminapp = new Vue({
    el: '#adminapp',
    router,
    store,
    data: {
        test: 'Test Data'
    }
});
