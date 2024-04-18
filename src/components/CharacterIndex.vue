<script>
import CharacterCard from "./CharacterCard.vue";
import axios from "axios";
import { writingDelay } from "../utility.js";

export default {
  data() {
    return {
      characters: [],
    };
  },

  props: {
    // ...
  },

  methods: {
    fetchCharacters() {
      axios.get("http://127.0.0.1:8000/api/characters").then((res) => {
        this.characters = res.data.characters.data;
      });
    },
  },

  components: { CharacterCard },

  created() {
    this.fetchCharacters();
  },

  mounted() {
    const title = document.getElementById("main-title");
    writingDelay("Scegli il personaggio", title, 50);
  },
};
</script>

<template>
  <h1 id="main-title" class="my-5 text-center"></h1>
  <div class="row row-cols-4 g-5">
    <character-card v-for="character in characters" :character="character" />
  </div>
</template>

<style lang="scss" scoped></style>
