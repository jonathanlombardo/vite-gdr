<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'
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

  components: {},

  created() {
    this.fetchCharacters();
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-5">Play</h1>
    <div class="row row-cols-4 g-3">
      <div v-for="character in characters" class="col">
        <div class="card">
          <img :src="character.type.image" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ character.name }}</h5>
            <ul class="list-group">
              <li class="list-group-item">Forza {{ character.strength }}</li>
              <li class="list-group-item">Difesa {{ character.defence }}</li>
              <li class="list-group-item">Velocità {{ character.speed }}</li>
              <li class="list-group-item">Vita {{ character.life }}</li>
              <li class="list-group-item">Intelligenza {{ character.intelligence }}</li>
            </ul>
            <a href="#" class="btn btn-primary">Scegli me!</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "./general.scss";
</style>
