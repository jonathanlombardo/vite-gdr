<script>
import CharacterCard from "./CharacterCard.vue";
// import {store} from './store/index.js'
import axios from "axios";

export default {
  data() {
    return {
      winner: "",
      userCharacter: false,
      cpuCharacter: false,
      fight: {},
      counter: 0,
    };
  },

  props: {
    // ...
  },

  methods: {
    fetchFight() {
      const userCharacter = this.$route.params.id;

      axios.post("http://127.0.0.1:8000/api/challenge", { id: userCharacter }).then((res) => {
        console.log(res.data);
        this.userCharacter = res.data.user;
        this.cpuCharacter = res.data.computer;
        this.fight = res.data.figth;
        this.winner = res.data.winner;
      });
    },

    handleFightClick() {
      if (this.counter == this.fight.length) return;
      this.fight[this.counter].show = true;
      this.counter++;
    },
  },

  components: { CharacterCard },

  created() {
    // console.log(this.$route.params.id);
    this.fetchFight();
  },
};
</script>

<template>
  <div class="wrapper" v-if="userCharacter && cpuCharacter">
    <!-- <h1 class="text-center my-5">Combatti!</h1> -->
    <div class="title-wrapper text-center my-5">
      <div class="h1">
        <div :class="['fs-1', 'btn', 'btn-primary', { 'd-none': counter == fight.length }]" @click="handleFightClick()">Combatti</div>
      </div>
      <div id="result" :class="['h1', { 'd-none': counter < fight.length }]">{{ winner == userCharacter.name ? "Hai winto" : winner == cpuCharacter.name ? "Hai werso" : "WAREGGIO" }}</div>
    </div>
    <div class="row row-cols-2 g-5">
      <div class="col">
        <h3 class="text-center">UTENTE</h3>
      </div>
      <div class="col">
        <h3 class="text-center">CPU</h3>
      </div>
      <character-card :character="userCharacter" :fight="fight" player="user" />
      <character-card :character="cpuCharacter" :fight="fight" player="cpu" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.title-wrapper {
  min-height: 75px;
}

#result {
  opacity: 0;
  animation-name: appear;
  animation-duration: 5s;
  animation-fill-mode: forwards;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
