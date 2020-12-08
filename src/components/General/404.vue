<template functional>
  <b-card class="card-content" no-body>
    <div class="text-error">
      <h3><b-icon icon="exclamation-circle"></b-icon>404</h3>
      <h4>Page not found!</h4>
      <router-link :to="{ name: 'home' }" class="btn-back">Back</router-link>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "NotFound",
  methods: {
    backToHome() {
      this.$router.push({ name: "home" })
    }    
  }
}
</script>

<style lang="scss">
  .text-error {
    margin: 0 auto;
    text-align: center;
    color: red;
    padding: 25px 0 50px 0;
    & .b-icon {
      margin-right: 10px;
    }
    & .btn-back {
      position: relative;
      top: 15px;
      padding: 10px 20px;
      border-radius: 5px;
      color: white;
      background-color: red;
      text-decoration: none;
    }
  }
</style>