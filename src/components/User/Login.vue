<template>
  <b-card class="card-content" no-body>
    <div class="card-content">
      <h3>Login</h3>
    </div>
    <div class="card-body">
      <b-form @submit="onLogin">
        <b-form-group id="input-group-1" label="Username:" label-for="username">
          <b-form-input id="username" v-model="username" type="text" required></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-2" label="Password:" label-for="password">
          <b-form-input id="password" v-model="password" type="text" required></b-form-input>
        </b-form-group>
        <b-button variant="danger" @click="$router.go(-1)">Back</b-button>
        <b-button type="submit" variant="primary" :disabled="!filled">Submit</b-button>
      </b-form>
    </div>
  </b-card>
</template>

<script>
export default {
  name: "UserLogin",
  data() {
    return {
      username: '',
      password: '',
      error: false
    };
  },
  computed: {
    filled() {
      return this.username && this.password;
    }
  }
}
</script>