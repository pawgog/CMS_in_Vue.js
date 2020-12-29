<template>
  <b-card class="card-content" no-body>
    <div class="card-content">
      <h3>Edit post</h3>
    </div>
    <div class="card-body">
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Title:" label-for="title">
          <b-form-input id="title" v-model="post.title" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Date:" label-for="date_posted">
          <b-form-input id="date_posted" v-model="post.date_posted" type="date" required></b-form-input>
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
import { server } from "../../utils/helper";

export default {
  name: "PostEdit",
  props: ["slug"],
  data() {
    return {
      post: {},
      error: false,
      form: {
        title: "",
        date_posted: "",
        content: "",
      },
    };
  },
  computed: {
    filled() {
      const { title, date_posted, content} = this.post;
      return title && date_posted && content;
    }
  },
  methods: {
    onSubmit() {
      const { _id, title, date_posted, content} = this.post;
      this.$http.put(`${server.serverURL}/post/${_id}`, {
        _id,
        title,
        date_posted,
        content,
      })
      .catch(() => {
        this.error = true;
      });
    },
  },
  created() {
    this.$http
      .get(`${server.serverURL}/post/${this.slug}`)
      .then(({ data }) => {
        this.post = data;
      })
      .catch(() => {
        this.$router.push({ name: "404" });
      });
  },
};
</script>