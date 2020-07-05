import Vue from "vue";
import i18n from "vue-i18n";

Vue.use(i18n);

export default new i18n({
  locale: "kz",
  //fallbackLocale: "ru",
  messages: {
    kz: {
      link: {
        home: "Басты бет",
        article: "Жаңалықтар",
      },
      welcomeMsg: "Казахский язык to Your Vue.js App",
      pluginsTxt: "Installed CLI Plugins",
      guideTxt:
        "For a guide and recipes on how configure / customize this project",
      guideDocTxt: "vue-cli documentaion",
    },
    ru: {
      link: {
        home: "Главная страница",
        article: "Новости",
      },
      welcomeMsg: "Приветствую в Vue.js App",
      pluginsTxt: "Установленные CLI Plugins",
      guideTxt:
        "Для руководства и примеров как настроить этот проект, {break} смотреть",
      guideDocTxt: "vue-cli документация",
    },
    en: {
      link: {
        home: "Home",
        article: "News",
      },
      welcomeMsg: "Welcome to Your Vue.js App",
      pluginsTxt: "Installed CLI Plugins",
      guideTxt:
        "For a guide and recipes on how configure / customize this project",
      guideDocTxt: "vue-cli documentaion",
    },
  },
});
