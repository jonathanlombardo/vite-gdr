import { createMemoryHistory, createRouter } from "vue-router";
import CharacterIndex from "./components/CharacterIndex.vue";

const routes = [
  { path: "/", name: "characters.index", component: CharacterIndex },
  // { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export { router };
