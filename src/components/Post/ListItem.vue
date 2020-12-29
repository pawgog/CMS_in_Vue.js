<template>
  <b-card class="card-content" no-body>
    <b-img :src="post.img"></b-img>
    <div class="post-details">
      <h5>{{ post.title }}</h5>
      <span>{{ post.date }}</span>
      <router-link :to="{ name: 'post', params: { slug: post.slug }}">Read more</router-link>
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
      this.$emit('remove', this.post.id)
    }
  },
};
</script>

<style lang="scss">
  .card-content {
    width: 25%;
    margin: 20px 10px;

    & img {
      max-width: 100%;
      max-height: 250px;
    }
    & .post-details {
      display: flex;
      flex-direction: column;
      padding: 20px;
    }
    & span {
      font-size: 12px;
    }
    & button {
      margin-right: 5px;
    }
    & .btn-list {
      margin: 10px 0;
    }
  }
</style>
