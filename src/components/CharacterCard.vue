<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      // store,
      // ...
    };
  },

  props: {
    character: Object,
  },

  methods: {
    // ...
  },

  components: {},

  created() {
    // ...
  },
};
</script>

<template>
  <div class="col">
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
</template>

<style lang="scss" scoped></style>
