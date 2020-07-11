<template>
  <b-card title="Title">
    <span>date</span>
    <b-link href="#" class="card-link">Read more</b-link>
    <b-button variant="outline-primary">Edit</b-button>
    <b-button variant="danger">Delete</b-button>
  </b-card>
</template>

<script>
export default {
  name: "PostListItem",
  props: ["post"],
  methods: {
    
  }
}
</script>