<template functional>
  <b-card class="card-content" no-body>
    <div class="text-error">
      <h3><b-icon icon="exclamation-circle"></b-icon>404</h3>
      <h4>Page not found!</h4>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "NotFound"
}
</script>

<style lang="scss">
  .text-error {
    margin: 0 auto;
    text-align: center;
    color: red;
    & .b-icon {
      margin-right: 10px;
    }
  }
</style>