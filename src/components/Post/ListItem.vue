<template>
  <b-card class="card-content" no-body>
    <div class="post-details">
      <h5>{{ post.title }}</h5>
      <span>{{ post.date }}</span>
    </div>
    <router-link :to="{ name: 'post', params: { slug: post.slug }}">Read more</router-link>
    <div class="post-details">
      <router-link :to="{ name: 'postEdit', params: { slug: post.slug } }">
        <b-button variant="outline-primary"
          ><b-icon icon="pencil"></b-icon
        ></b-button>
      </router-link>
      <b-button variant="danger"><b-icon icon="x-circle"></b-icon></b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  name: 'PostListItem',
  props: ['post'],
  methods: {},
};
</script>

<style lang="scss">
.card-content {
  margin: 20px 0;
  padding: 20px;

  & span {
    font-size: 12px;
  }
  & button {
    margin-right: 5px;
  }
  & .post-details {
    margin: 10px 0;
  }
}
</style>
