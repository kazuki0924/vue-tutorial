export const mixin = {
  data() {
    return {
      text: 'Hello',
    };
  },
  computed: {
    addLengthMixin() {
      return this.text + ' (' + this.text.length + ')';
    },
  },
};
