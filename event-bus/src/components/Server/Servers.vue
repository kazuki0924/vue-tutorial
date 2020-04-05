<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <li class="list-group-item" v-for="server in servers" :key="server">
        Server #{{ server.id }}
        <button @click="editStatus(server)">Change Status</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { eventBus } from '../../main';
export default {
  data: function () {
    return {
      servers: [
        { id: 1, status: 'Normal' },
        { id: 2, status: 'Critical' },
        { id: 3, status: 'Unknown' },
        { id: 4, status: 'Normal' },
      ],
    };
  },
  methods: {
    editStatus(server) {
      server.status = 'Normal';

      eventBus.changeStatus(this.servers);
    },
  },
  created() {
    eventBus.servers = this.servers;
  },
};
</script>

<style scoped></style>
