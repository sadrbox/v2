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
      <div class="col-12">
        <form action="#" class="form mt-3">
          <div class="mb-3 form-group">
            <!-- <label for="title" class="form-label">Заголовок</label> -->
            <input type="title" class="form-control" id="title" placeholder="Заголовок новости" />
          </div>
          <div class="mb-3 form-group">
            <!-- <label for="text" class="form-label">Текст</label> -->
            <textarea class="paper-style form-control" id="text" rows="30" placeholder="Текст">
             По своей сути рыбатекст является альтернативой традиционному lorem ipsum, который вызывает у некторых людей недоумение при попытках прочитать рыбу текст. 
             В отличии от lorem ipsum, текст рыба на русском языке наполнит любой макет непонятным смыслом и придаст неповторимый колорит советских времен.
            </textarea>
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
.paper-style {
  padding:60px;
  width: 800px;
}
</style>
