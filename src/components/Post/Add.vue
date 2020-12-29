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
  name: "PostAdd",
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
    onSave() {
      const { title, date_posted, content} = this.post;
      this.$http
        .post(`${server.serverURL}/posts`, {
          title,
          date_posted,
          content
        })
        .then(({ data }) => {
          this.$router.push({ name: "post", params: { slug: data.slug } });
        })
        .catch(() => {
          this.error = true;
        });
    },
  },
};
</script>