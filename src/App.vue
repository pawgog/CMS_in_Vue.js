<template>
  <div id="app">
    <div class="container grid-lg">
      <header class="navbar">
        <section class="navbar-section">
          <a href="/">Blog</a>
        </section>
        <section class="navbar-section">
          <a href="#" class="mr-2">Login</a>
          <a href="#" class="mr-2">Logout</a>
        </section>
      </header>
    </div>
    <div class="container grid-lg">
      <router-view></router-view>
    </div>
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
