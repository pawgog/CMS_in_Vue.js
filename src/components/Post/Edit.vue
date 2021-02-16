<template>
  <b-card class="card-content" no-body>
    <div class="card-content">
      <h3>Edit post</h3>
    </div>
    <div class="card-body">
      <b-form @submit.prevent="onSubmit">
        <b-form-group id="input-group-1" label="Title:" label-for="title">
          <b-form-input id="title" v-model="post.title" type="text"></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Author:" label-for="author">
          <b-form-input id="author" v-model="post.author" type="text"></b-form-input>
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
        <div class="card-body__error" v-if="!filled">
          <ul>
            <li v-for="error in errors" :key="error">
              {{ error }}
            </li>
          </ul>
        </div>
        <div class="card-body__buttons">
          <b-button variant="danger" @click="$router.go(-1)">Back</b-button>
          <b-button type="submit" variant="primary">Submit</b-button>
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
      errors: [],
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
      const { title, date_posted, content, img} = this.post;
      return title && date_posted && content && img;
    }
  },
  methods: {
    onSubmit() {
      const { _id, title, author, date_posted, content, img } = this.post;
      this.errors = [];

      if (!title) {
        this.errors.push("Title is required.");
      }
      if (!author) {
        this.errors.push('Author is required.');
      }
      if (!img) {
        this.errors.push('Image is required.');
      } else if (!this.validImg(img)) {
        this.errors.push('Valid image required.');
      }
      if (!this.errors.length) {
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
        return true;
      }
    },
    validImg: function (img) {
      const re = /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,}))\.?)(?::\d{2,5})?(?:[/?#]\S*)?$/i;
      return re.test(img);
    }
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
      margin: 20px 0;
      color: red;

      ul {
        font-size: 16px;
        font-weight: 600;
      } 
    }
  }
</style>