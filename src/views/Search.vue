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
      @input="checkForPokemons"
    >
    <ul
      v-if="newPokArr && newPokArr.length"
      class="search__results">
      <li
        v-for="(item, i) of newPokArr"
        class="search__item">
          <PokemonCard
            :pokemon="item"
          />
      </li>
    </ul>
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
    newPokArr: [],
    }
  },

  methods: {
    checkForPokemons() {
      for (let pokemon of this.pokemons) {
        let inputField = this.searchInput.toLowerCase();
        let search = '';

          if (inputField === pokemon.name.toLowerCase().substr(0, 4)) {
            search += inputField;
            console.log(search);
            this.newPokArr.push(pokemon);
            console.log(this.newPokArr);
          }
      }
    },
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

  &__results
    list-style none
    display flex

</style>
