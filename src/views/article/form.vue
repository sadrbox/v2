<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <h1>Article Create</h1>
      </div>
      <div class="col">
        <router-link
          class="btn btn-warning float-right"
          to="/article/create"
        >{{ $t('links.managers.save') }}</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
