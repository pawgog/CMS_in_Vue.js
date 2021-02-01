<template>
  <b-card class="card-content card-item" no-body>
    <div class="card-content-img" v-bind:style="{ backgroundImage: `url(${post.img})` }"></div>
    <div class="post-details">
      <span>{{ post.date_posted }}</span>
      <h5>{{ post.title }}</h5>
      <router-link :to="{ name: 'post', params: { slug: post.slug }}"><b-button size="sm">Read more...</b-button></router-link>
      <div class="btn-list">
        <router-link :to="{ name: 'postEdit', params: { slug: post.slug } }">
          <b-button variant="outline-primary"
            ><b-icon icon="pencil"></b-icon
          ></b-button>
        </router-link>
        <b-button variant="danger" @click="remove"><b-icon icon="x-circle"></b-icon></b-button>
      </div>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'PostListItem',
  props: ['post'],
  methods: {
    remove() {
      this.$emit('remove', this.post._id)
    }
  },
};
</script>

<style lang="scss">
  .card-content {
    margin: 20px;

    &-img {
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 25vh;
      margin: 0 auto;
    }
    & .post-details {
      display: flex;
      flex-direction: column;
      padding: 20px;
    }
    & span {
      margin-bottom: 10px;
      font-size: 12px;
      text-align: right;
    }
    & h5 {
      margin: 5px 0 30px 0;
    }
    & button {
      margin-right: 5px;
    }
    & .btn-list {
      margin: 10px 0;
    }
  }
  .card-item {
    width: 25%;
  }
</style>
