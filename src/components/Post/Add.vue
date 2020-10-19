<template>
  <b-card class="card-content" no-body>
    <div class="card-content">
      <h3>Add post</h3>
    </div>
    <div class="card-body">
      <b-form @submit="onSave">
        <b-form-group id="input-group-1" label="Title:" label-for="title">
          <b-form-input id="title" v-model="post.title" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Date:" label-for="date">
          <b-form-input id="date" v-model="post.date" type="date" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Content" label-for="content">
          <b-form-textarea id="content" v-model="post.content" rows="3" max-rows="6"></b-form-textarea>
        </b-form-group>
        <b-button variant="danger" @click="$router.go(-1)">Back</b-button>
        <b-button type="submit" variant="primary" :disabled="!filled">Submit</b-button>
      </b-form>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "PostAdd",
  data() {
    return {
      post: {},
      error: false,
      form: {
        title: "",
        date: "",
        content: "",
      },
    };
  },
  computed: {
    filled() {
      const { title, date, content} = this.post;
      return title && date && content;
    }
  },
  methods: {
    onSave() {

    },
  },
};
</script>