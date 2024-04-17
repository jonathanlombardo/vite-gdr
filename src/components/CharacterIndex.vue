<script>
// import {store} from './store/index.js'
// import MyComp from './components/MyComp.vue';
import CharacterCard from "./CharacterCard.vue";
import axios from "axios";

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
};
</script>

<template>
  <div class="row row-cols-4 g-3">
    <character-card v-for="character in characters" :character="character" class="col" />
  </div>
</template>

<style lang="scss" scoped></style>
