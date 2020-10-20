<template>
  <div id="app">
    <b-container fluid="lg">
      <header class="navbar">
        <section class="navbar-section">
          <a href="/">Blog</a>
        </section>
        <section class="navbar-section">
          <router-link :to="{ name: 'postAdd' }" class="mr-2">Add New Post</router-link>
          <a href="#" class="mr-2">Login</a>
          <a href="#" class="mr-2">Logout</a>
        </section>
      </header>
    </b-container>
    <b-container fluid="lg">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.container {
  margin-top: 100px;
  margin-bottom: 100px;
}
</style>
