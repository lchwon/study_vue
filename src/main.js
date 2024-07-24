import "./assets/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

//app.component("AppCard", AppCard);

app.provide("app-message", "app 메세지입니다.");
//
app.config.globalProperties.msg = "헬로~";
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";
