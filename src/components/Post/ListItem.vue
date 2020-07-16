<template>
  <b-card no-body>
    <h4>{{ post.title }}</h4>
    <span>{{ post.date }}</span>
    <b-link href="#" class="card-link">Read more</b-link>
    <b-button variant="outline-primary"><b-icon icon="pencil"></b-icon></b-button>
    <b-button variant="danger"><b-icon icon="x-circle"></b-icon></b-button>
  </b-card>
</template>

<script>
export default {
  name: 'PostListItem',
  props: ['post'],
  methods: {},
};
</script>
