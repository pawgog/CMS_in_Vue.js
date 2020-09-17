<template>
  <b-card class="card-content" no-body>
    <div>
      <h5>{{ post.title }}</h5>
      <span>{{ post.date }}</span>
    </div>
    <div class="card-body" v-html="post.content"></div>
    <div>
      <b-button variant="danger"><b-icon icon="arrow-left"></b-icon>Back</b-button>
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
        console.log(404)
      });
  }
};
</script>
