<template>
  <b-card class="card-content" no-body>
    <div class="card-content">
      <h3>Edit post</h3>
    </div>
    <div class="card-body">
      <b-form @submit="onSubmit">
        <b-form-group id="input-group-1" label="Title:" label-for="title">
          <b-form-input id="title" v-model="form.title" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Date:" label-for="date">
          <b-form-input id="date" v-model="form.date" type="date" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-3" label="Content" label-for="content">
          <b-form-textarea id="content" v-model="form.content" rows="3" max-rows="6"></b-form-textarea>
        </b-form-group>
        <b-button type="submit" variant="primary">Submit</b-button>
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
  computed: {},
  methods: {
    onSubmit(e) {
      console.log("submit", e);
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