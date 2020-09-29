<template>
  <div class="home">
<!--    <AppHeader />-->
    <h1 class="home__title">
      PokeDex
    </h1>
    {{ checked }}
    <div class="home__filters-block">
      <div
        v-for="pokemon of getPokemonTypes"
        :key="pokemon.id"
        class="home__checkbox"
      >
        <input
          type="checkbox"
          id="checkbox"
          :value="pokemon"
          v-model="checked"
          @change="sortPokemonsByType"
        >
        <label for="checkbox">
          {{ pokemon }}
        </label>
      </div>
    </div>
    <div class="home__container">
      <PokemonCard
        v-for="pokemon of sortedPokemons"
        :key="pokemon.id"
        :pokemon="pokemon"
      />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import constants from "../constants/pages.js";
import PokemonCard from '@/components/PokemonCard.vue';
import pokemons from "../pokemons";

export default {
  name: 'Home',

  components: {
    PokemonCard,
  },

  computed: {
    getPokemonTypes() {
      const typesArray = []
      for (let pokemon of pokemons) {
        typesArray.push(pokemon.type)
      }

      return typesArray.filter((item, index) => typesArray.indexOf(item) === index);
    },

    shouldBeChecked(val) {
      if (this.checked instanceof Array) {
        return this.checked.includes(this.value)
      }
      return this.checked.includes(val)
    },
  },

  data() {
    return {
      pokemon: constants.pokemon,
      pokemons,
      checked: [],
      sortedPokemons: pokemons,
    }
  },

  watch: {
    '$route.query': function () {
      this.fillChosenFilters();
      this.sortPokemonsByType();
    },
  },

  mounted() {
    this.fillChosenFilters();
    this.sortPokemonsByType();
  },

  methods: {
    fillChosenFilters() {
      if (this.$route.query) {
        this.checked = Object.values(this.$route.query);
        console.log(111);
      }
    },

    sortPokemonsByType() {
      if (this.checked.length > 0) {
        this.sortedPokemons = this.pokemons.filter(pokemon => this.checked.find(item => pokemon.type === item))
      } else this.sortedPokemons = this.pokemons

      this.$router.push({ query: this.checked })
    },
  },

};
</script>

<style scoped lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');

.home
  display flex
  flex-direction column
  align-items center
  justify-content center
  margin 0
  background #EFEFBB
  background linear-gradient(to right, #D4D3DD, #EFEFBB)
  font-family 'Lato'

  &__title
    letter-spacing 1px

  &__container
    display flex
    flex-wrap wrap
    align-items space-between
    justify-content center
    margin 0 auto
    max-width 1200px
  </style>
