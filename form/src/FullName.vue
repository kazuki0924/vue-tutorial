<template>
  <div>{{ firstName + ' ' + lastName }}</div>
</template>

<script>
export default {
  props: ['firstName', 'lastName'],
};
</script>

<style></style>
