<template>
  <b-card class="card-content" no-body>
    <div>
      <h5>{{ post.title }}</h5>
      <span>{{ post.date }}</span>
    </div>
    <b-link href="#" class="card-link">Read more</b-link>
    <div>
      <b-button variant="outline-primary"
        ><b-icon icon="pencil"></b-icon
      ></b-button>
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
  & > div {
    margin: 10px 0;
  }
}
</style>
