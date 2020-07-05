import Vue from "vue";
import Router from "vue-router";

import Article from "@/views/article/list";
import ArticleCreate from "@/views/article/form";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: Article,
    },
    {
      path: "/article",
      component: Article,
    },
    {
      path: "/article/create",
      component: ArticleCreate,
    },
  ],
});
