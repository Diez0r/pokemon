<template>
  <div
    class="search"
  >
    <label for="search_id" class="search__label">
      Insert pokemon name:
    </label>
    <input
      type="text"
      class="search__input"
      id="search_id"
      v-model="searchInput"
    >
    <button
    type="button"
    class="search__button"
    @click="searchPokemon"
    >
      Search
    </button>
    <PokemonCard
      v-if="searchedPokemon"
      :pokemon="searchedPokemon"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import pokemons from "../pokemons";
import PokemonCard from '@/components/PokemonCard.vue';


export default {
  name: 'Search',

  components: {
    PokemonCard,
  },

  data() {
    return {
    searchInput: '',
    pokemons,
    searchedPokemon: '',
    }
  },

  methods: {
    searchPokemon() {
      for (let pokemon of this.pokemons) {
        if (this.searchInput.toLowerCase() === pokemon.name.toLowerCase()) {
          this.searchedPokemon = pokemon;
        }
      }
      console.log(this.searchedPokemon.name);
      return this.searchedPokemon;
    }
  },
};
</script>

<style scoped lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');

.search
  display flex
  flex-direction column
  align-items center
  justify-content center
  margin 0
  background #EFEFBB
  background linear-gradient(to right, #D4D3DD, #EFEFBB)
  font-family 'Lato'

  &__input
    border-radius 20px
    box-shadow 0 3px 15px rgba(100, 100, 100, 0.5)
    margin 10px
    padding 20px
    text-align center
    background-color #eee

</style>
