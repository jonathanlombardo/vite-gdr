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

  computed: {
    mappedFight() {
      if (this.$route.name == "characters.index") return null;
      const mappedFight = {};

      this.fight.forEach((match) => {
        mappedFight[match.type] = {
          winnerClass: match.winner == this.character.name ? "winner" : match.winner == "Pareggio" ? "pair" : "loser",
          show: match.show,
          value: "",
        };
        if (this.showValue || mappedFight[match.type].show) {
          mappedFight[match.type].value = this.character[match.type];
        }
      });

      return mappedFight;
    },

    showValue() {
      if (this.$route.name == "characters.index") return true;
      return this.player == "user";
    },
  },

  props: {
    character: Object,
    fight: Object,
    player: String,
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
          <!-- <li :class="['list-group-item', { $winnerClass: mappedFight ? mappedFight.strength.show : false }]">Forza {{ character.strength }}</li> -->
          <li class="list-group-item" :class="mappedFight ? (mappedFight.strength.show ? mappedFight.strength.winnerClass : '') : ''">Forza {{ mappedFight ? mappedFight.strength.value : character.strength }}</li>
          <li class="list-group-item" :class="mappedFight ? (mappedFight.defence.show ? mappedFight.defence.winnerClass : '') : ''">Difesa {{ mappedFight ? mappedFight.defence.value : character.defence }}</li>
          <li class="list-group-item" :class="mappedFight ? (mappedFight.speed.show ? mappedFight.speed.winnerClass : '') : ''">Velocità {{ mappedFight ? mappedFight.speed.value : character.speed }}</li>
          <li class="list-group-item" :class="mappedFight ? (mappedFight.intelligence.show ? mappedFight.intelligence.winnerClass : '') : ''">Intelligenza {{ mappedFight ? mappedFight.intelligence.value : character.intelligence }}</li>
          <!-- <li class="list-group-item">Vita {{ character.life }}</li> -->
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

      &.winner,
      &.loser,
      &.pair {
        animation-name: lamp;
        animation-duration: 0.5s;
        animation-iteration-count: 10;
        animation-fill-mode: backwards;
        animation-timing-function: linear;
        color: white;
      }

      &.winner {
        background-color: green;
      }
      &.loser {
        background-color: red;
      }
      &.pair {
        background-color: gray;
      }
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

@keyframes lamp {
  from {
    background-color: gray;
  }
  to {
    background-color: white;
  }
}
</style>
