<template>
  <div>
    <div v-if="!error"></div>
    <div class="toast toast-error" v-else>
      Error!
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
      error: false,
    };
  },
  components: {},
  methods: {},
};
</script>
