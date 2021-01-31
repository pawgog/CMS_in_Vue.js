<template>
  <div>
    <div class="card-image" v-bind:style="{ backgroundImage: `url(${post.img})` }"></div>
    <b-card class="card-content" no-body>

      <div class="card-details">
        <div>
          <h5>{{ post.author }}</h5>
          <h4>{{ post.title }}</h4>        
        </div>
        <div>
          <span>{{ post.date_posted }}</span>
        </div>
      </div>
      <div class="card-body" v-html="post.content"></div>
      <div>
        <b-button variant="danger" @click="$router.push({ name: 'home' })">
          <b-icon icon="arrow-left">Back</b-icon>
        </b-button>
      </div>
    </b-card>
  </div>
</template>

<script>
import { server } from "../../utils/helper";

export default {
  name: 'PostDetails',
  props: ["slug"],
  data() {
    return {
      post: {}
    }
  },
  created() {
    this.$http.get(`${server.serverURL}/post/${this.slug}`)
      .then(({ data }) => {
        this.post = data;
      })
      .catch(() => {
        this.$router.push({ name: "404" })
      });
  }
};
</script>

<style lang="scss" scoped>
  .card {
    &-image {
      background-size: cover;
      background-position: center;
      width: 80%;
      height: 50vh;
      margin: 0 auto;
    }
    &-content {
      width: 60%;
      margin: 20px auto;
      padding: 20px;
    }
    &-details {
      display: flex;
      justify-content: space-between;
      & h5 {
        margin-bottom: 15px;
        color: grey;
        text-transform: capitalize;
        font-style: italic;
      }
    }
    &-body {
      padding: 1.25rem 0;
      margin-bottom: 1rem;
    }
  }
</style>