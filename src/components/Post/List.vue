<template>
  <div>
    <div v-if="!error">
      <ListItem v-for="post in posts" :post="post" :key="post.id" />
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
  created() {
    this.$http
      .get('/posts')
      .then(({ data }) => {
        console.log(data);

        this.posts = data;
      })
      .catch(() => {
        this.error = true;
      });
  },
};
</script>
