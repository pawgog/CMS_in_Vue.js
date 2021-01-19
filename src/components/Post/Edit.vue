<template>
  <b-card class="card-content" no-body>
    <div class="card-content">
      <h3>Edit post</h3>
    </div>
    <div class="card-body">
      <b-form @submit.prevent="onSubmit">
        <b-form-group id="input-group-1" label="Title:" label-for="title">
          <b-form-input id="title" v-model="post.title" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Author:" label-for="author">
          <b-form-input id="author" v-model="post.author" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Date:" label-for="date_posted">
          <b-form-input id="date_posted" v-model="post.date_posted" type="date" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-4" label="Content" label-for="content">
          <b-form-textarea id="content" v-model="post.content" rows="3" max-rows="6"></b-form-textarea>
        </b-form-group>
        <b-form-group id="input-group-5" label="Image url:" label-for="img">
          <b-form-textarea id="img" v-model="post.img" type="text"></b-form-textarea>
        </b-form-group>
        <div class="card-body__buttons">
          <b-button variant="danger" @click="$router.go(-1)">Back</b-button>
          <b-button type="submit" variant="primary" :disabled="!filled">Submit</b-button>
          <div class="card-body__error" v-if="!filled">
            <span>(All inputs are required!)</span>
          </div>
        </div>
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
        author: "",
        date_posted: "",
        content: "",
        img: "",
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
      const { _id, title, author, date_posted, content, img } = this.post;
      this.$http.put(`${server.serverURL}/edit/${_id}`, {
        _id,
        title,
        author,
        date_posted,
        content,
        img,
      })
      .then(({ data }) => {
        const { slug } = data.post;
        this.$router.push({ path: `/post/${slug}` });
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

<style lang="scss" scoped>
  .card-body {
    &__buttons {
      display: flex;
      align-items: center;
    }
    &__error {
      color: red;
    }
  }
</style>