<template>
  <div>
    <div class="spinner" v-if="loading">
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div v-else>
      <div class="list-content d-flex justify-content-center" v-if="!error">
        <ListItem v-for="post in posts" :post="post" :key="post.id" @remove="removePost" />
      </div>
      <b-toast variant="danger" class="mb-2" v-else>
        Error!
      </b-toast>
    </div>
  </div>
</template>

<script>
import ListItem from './ListItem';
import { server } from "../../utils/helper";

export default {
  name: 'PostList',
  data() {
    return {
      posts: [],
      loading: true,
      error: false,
    };
  },
  components: {
    ListItem,
  },
  methods: {
    removePost(id) {
      if (confirm('Are you sure to delete the post?')) {
        this.$http.delete(`${server.serverURL}/delete/${id}`)
        .then(() => {
          const index = this.posts.findIndex(post => post._id === id);
          this.posts.splice(index, 1)
        })
        .catch(() => {
          alert('Something goes wrong!')
        });
      }
      
    }
  },
  created() {
      this.$http
        .get(`${server.serverURL}/posts`)
        .then(({ data }) => {
        console.log(data);
        this.posts = data;
    })
    .catch(() => {
      this.error = true;
    })
    .finally(()=> {
      this.loading = false;
    });
  },
};
</script>

<style scoped>
  .list-content {
    display: flex;
    flex-wrap: wrap;
  }
</style>