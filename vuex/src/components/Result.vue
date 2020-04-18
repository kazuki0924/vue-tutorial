<template>
  <div>
    <p>Counter is: {{ counter }}</p>
  </div>
</template>

<script>
  import {mapGetters} from 'vuex';
  import * as types from '../stores/types';
  export default {
    computed: {
      ...mapGetters({
        counter: types.DOUBLE_COUNTER,
      }),
    },
  };
</script>
