<template>
  <b-card class="card-content card-details" no-body>
    <div>
      <h5>{{ post.title }}</h5>
      <span>{{ post.date }}</span>
    </div>
    <div class="card-body" v-html="post.content"></div>
    <div>
      <b-button variant="danger" @click="$router.push({ name: 'home' })">
        <b-icon icon="arrow-left"></b-icon>Back
      </b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'PostDetails',
  props: ["slug"],
  data() {
    return {
      post: {}
    }
  },
  created() {
    this.$http.get(`/post/${this.slug}`)
      .then(({ data }) => {
        const [getData] = data
        this.post = getData;
      })
      .catch(() => {
        this.$router.push({ name: "404" })
      });
  }
};
</script>

<style scoped>
  .card-details {
    padding: 20px;
  }
  .card-body {
    padding: 1.25rem 0;
  }
</style>