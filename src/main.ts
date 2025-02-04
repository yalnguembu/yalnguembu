import "@/assets/main.css";

import { createApp } from "vue";

import App from "./App.vue";
// import { createI18n } from "vue-i18n";
// import i18nMessages from "@/modules/i18n.json";

const app = createApp(App);

//   .use(createI18n({
//   locale: navigator.language.split("-")[0],
//   legacy: false,
//   fallbackFormat: "fr",
//   messages: i18nMessages,
// }));

app.mount("#app");
