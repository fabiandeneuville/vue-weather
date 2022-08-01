import Vue from 'vue'
import App from './App.vue'
import store from './store/store'

/* Importing fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* Importing fontawesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* Importing specific icons to be used on the project */
import { faInfo } from '@fortawesome/free-solid-svg-icons';

/* Adding icons to the library */
library.add(faInfo);

/* Adding font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  created(){
    document.documentElement.setAttribute('lang', 'fr')
  },
  render: h => h(App),
  store
}).$mount('#app')
