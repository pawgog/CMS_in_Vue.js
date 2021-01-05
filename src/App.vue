<template>
  <div id="app">
    <b-container fluid="lg">
      <header class="navbar">
        <section class="navbar-section">
          <a href="/">Blog</a>
        </section>
        <section class="navbar-section">
          <router-link :to="{ name: 'postAdd' }" class="mr-2"><b-icon class="h2" icon="calendar2-plus"></b-icon></router-link>
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

<style lang="scss">
.container {
  margin-top: 100px;
  margin-bottom: 100px;

  &-lg .navbar {
    align-items: normal;
    font-weight: 700;

    &-section {
      margin-top: 10px;
      font-size: 20px;
    }  
  }
}
</style>
