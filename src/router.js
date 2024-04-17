import { createMemoryHistory, createRouter } from "vue-router";
import CharacterIndex from "./components/CharacterIndex.vue";
import CharacterShow from "./components/CharacterShow.vue";

const routes = [
  { path: "/", name: "characters.index", component: CharacterIndex },
  { path: "/fight/:id", name: "characters.show", component: CharacterShow },
  // { path: "/about", component: AboutView },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export { router };
