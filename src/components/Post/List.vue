<template>
  <div>
    <div v-if="!error">
      <ListItem v-for="post in posts" :post="post" :key="post.id" @remove="removePost" />
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
  methods: {
    removePost(id) {
      if (confirm('Are you sure to delete the post?')) {
        this.$http.delete(`/post/${id}`)
        .then(({ data }) => {
          console.log(data);
        })
        .catch(() => {
          alert('Something goes wrong!')
        });
      }
      
    }
  },
  created() {
    this.$http
      .get('/posts')
      .then(({ data }) => {
        this.posts = data;
      })
      .catch(() => {
        this.error = true;
      });
  },
};
</script>
