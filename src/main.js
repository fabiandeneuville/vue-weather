import Vue from 'vue'
import App from './App.vue'

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
  render: h => h(App),
}).$mount('#app')
