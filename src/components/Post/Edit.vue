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
  name: "PostEdit",
  props: ["slug"],
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
    onSubmit() {
      const { id, title, date, content} = this.post;
      this.$http.put(`/post/${id}`, {
        id,
        title,
        date,
        content,
      })
      .catch(() => {
        this.error = true;
      });
    },
  },
  created() {
    this.$http
      .get(`/post/${this.slug}`)
      .then(({ data }) => {
        const [getData] = data;
        this.post = getData;
      })
      .catch(() => {
        this.$router.push({ name: "404" });
      });
  },
};
</script>