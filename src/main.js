import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import ApiCall from "./components/ApiCall.vue";
import SearchItem from "./components/SearchItem.vue";

import App from "./App.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "ApiCall", component: ApiCall },
    { path: "/SearchItem", name: "SearchItem", component: SearchItem },
  ],
});

const app = createApp(App);
app.use(router);
app.mount("#app");
