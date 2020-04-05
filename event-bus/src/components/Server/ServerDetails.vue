<template>
  <div class="col-xs-12 col-sm-6">
    <li class="list-group-item" v-for="server in servers" :key="server">
      {{ server.status }}
    </li>
  </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
  props: ['servers'],
  created() {
    this.servers = eventBus.servers;
    eventBus.$on('statusChanged', (passedServers) => {
      this.servers = passedServers;
    });
  },
};
</script>

<style scoped></style>
