<template>
  <div>
    <div v-if="!error"></div>
    <b-toast variant="danger" class="mb-2" v-else>
      Error!
    </b-toast>
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
