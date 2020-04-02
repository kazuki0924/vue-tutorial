import Vue from 'vue';
import App from './App.vue';
import ServerStatus from './ServerStatus.vue';
import ServerDetail from './ServerDetail.vue';
import Servers from './Servers.vue';

Vue.component('app-server-status', ServerStatus);
Vue.component('app-server-detail', ServerDetail);
Vue.component('app-servers', Servers);

new Vue({
  el: '#app',
  render: h => h(App)
});
