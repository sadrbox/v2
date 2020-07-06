<template>
  <div class="container">
    <div class="row">
      <div class="col-10">
        <h1>{{ $t("views.articles.create") }}</h1>
      </div>
      <div class="col">
        <router-link class="btn btn-warning float-right" to="/article/create">{{
          $t("links.managers.save")
        }}</router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-8">
        <form action="#" class="form mt-3">
          <div class="mb-3 form-group">
            <label for="title" class="form-label">Заголовок</label>
            <input type="title" class="form-control" id="title" placeholder />
          </div>
          <div class="mb-3 form-group">
            <label for="text" class="form-label">Текст</label>
            <textarea class="form-control" id="text" rows="8"></textarea>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.form {
  border-radius: 4px;
  background: #eee;
  padding: 1rem;
}
.form-label {
  text-transform: uppercase;
}
</style>
