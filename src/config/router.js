import Vue from "vue";
import Router from "vue-router";

const Home = { template: "<div>Home</div>" };
const Article = { template: "<div>Article</div>" };

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/article",
      component: Article,
    },
  ],
});
