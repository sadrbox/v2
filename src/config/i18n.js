import Vue from "vue";
import i18n from "vue-i18n";

Vue.use(i18n);

export default new i18n({
  locale: "kz",
  //fallbackLocale: "ru",
  messages: {
    kz: {
      links: {
        managers: {
          create: "Создать",
          edit: "Редактировать",
          delete: "Удалить",
          save: "Сохранить",
        },
        home: "Басты бет",
        article: "Жаңалықтар",
        articles: {
          create: "Добавить новость",
        },
      },
      welcomeMsg: "Казахский язык to Your Vue.js App",
    },
    ru: {
      links: {
        managers: {
          create: "Создать",
          edit: "Редактировать",
          delete: "Удалить",
          save: "Сохранить",
        },
        home: "Главная страница",
        article: "Новости",
        articles: {
          create: "Добавить новость",
        },
      },
      welcomeMsg: "Приветствую в Vue.js App",
    },
    en: {
      links: {
        managers: {
          create: "Создать",
          edit: "Редактировать",
          delete: "Удалить",
          save: "Сохранить",
        },
        home: "Home",
        article: "News",
        articles: {
          create: "Добавить новость",
        },
      },
      welcomeMsg: "Welcome to Your Vue.js App",
    },
  },
});
