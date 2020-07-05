<template>
  <div id="app">
    <Header />
    <Main />
  </div>
</template>

<script>
import Header from "./components/layouts/header/index.vue";
import Main from "./components/layouts/main/index.vue";

export default {
  name: "App",
  components: {
    Header,
    Main
  }
};
</script>

<style lang="scss">
@import "./assets/scss/main.scss";
</style>
