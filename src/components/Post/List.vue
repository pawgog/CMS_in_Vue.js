<template>
  <div>
    <div v-if="!error">
      <ListItem />
      <!-- <ListItem v-for="post in posts" /> -->
    </div>
    <b-toast variant="danger" class="mb-2" v-else>
      Error!
    </b-toast>
  </div>
</template>

<script>
import ListItem from './ListItem';

export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
      error: false,
    };
  },
  components: {
    ListItem,
  },
  methods: {},
};
</script>
