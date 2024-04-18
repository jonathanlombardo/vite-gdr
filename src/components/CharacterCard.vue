<script>
// import MyComp from './components/MyComp.vue';
// import {store} from './store/index.js'

export default {
  data() {
    return {
      linkDisabled: 'style="pointer-events: none"',
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
      <router-link :to="{ name: 'characters.show', params: { id: character.id } }" :class="$route.name == 'characters.index' ? '' : 'routerLinkDisabled'">
        <img :src="character.type.imgUrl" class="card-img-top" alt="..." />
      </router-link>
      <div class="card-body">
        <h5 class="card-title">{{ character.name }}</h5>
        <ul class="list-group">
          <li class="list-group-item">Forza {{ character.strength }}</li>
          <li class="list-group-item">Difesa {{ character.defence }}</li>
          <li class="list-group-item">Velocità {{ character.speed }}</li>
          <li class="list-group-item">Vita {{ character.life }}</li>
          <li class="list-group-item">Intelligenza {{ character.intelligence }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.col {
  position: relative;
  left: 100vw;
  animation-name: entryRight;
  animation-duration: 4s;
  animation-fill-mode: forwards;

  .card {
    text-align: center;
    border: none;
    .routerLinkDisabled {
      pointer-events: none;
    }
    // v-if="$route.name == 'characters.index'"
    img {
      max-width: 310px;
      aspect-ratio: 1;
      object-fit: cover;
      object-position: bottom;
      margin-bottom: 10px;
    }
    .list-group-item {
      border-top: none;
      border-left: none;
      border-right: none;
    }
  }
}

@keyframes entryRight {
  from {
    left: 100vw;
  }
  to {
    left: 0;
  }
}
</style>
