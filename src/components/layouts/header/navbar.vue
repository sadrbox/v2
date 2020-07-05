<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link" to="/">{{ $t('link.home') }}</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/article">{{ $t('link.article') }}</router-link>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link lang-link" href="#" @click="setLang('kz')">
              <img src="https://image.flaticon.com/icons/svg/330/330611.svg" alt srcset />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link lang-link" href="#" @click="setLang('ru')">
              <img src="https://image.flaticon.com/icons/svg/330/330437.svg" alt srcset />
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link lang-link" href="#" @click="setLang('en')">
              <img src="https://image.flaticon.com/icons/svg/330/330459.svg" alt srcset />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  components: {},
  methods: {
    setLang(locale) {
      this.$i18n.locale = locale;
    }
  }
};
</script>

<style>
.lang-link {
  width: 50px;
  height: 50px;
}
</style>
