<template>
  <div class="pokemon">
    <h1 class="pokemon__title">
      Pokemon  {{ getPokemonById.name }}
    </h1>
    <div class="pokemon__img-container">
      <img
        :src="getPokemonById.image"
        width="120"
        height="120"
        class="pokemon__img"
      >
    </div>
    <div class="pokemon__info">
        <span class="pokemon__number">
          {{ getPokemonById.id }}
        </span>
      <h3 class="pokemon__name">
        {{ getPokemonById.name }}
      </h3>
      <p class="pokemon__type">
        Type: {{ getPokemonById.type }}
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import pokemons from "../pokemons";
import pokemonMixin from "./mixin.ts";

export default {
  name: 'Pokemon',

  mixins: [pokemonMixin],

  computed: {
    getPokemonById() {
      for (let pokemon of this.pokemonCard) {
        if (pokemon.id.toString() === this.pokemonId) {
          console.log(pokemon);
          return pokemon;
        }
      }
    },
  },

  data() {
    return {
      pokemonId: this.$route.params.id,
      pokemonCard: pokemons,
    }
  },
};
</script>

<style scoped lang="stylus">
@import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
@import url('https://fonts.googleapis.com/css?family=Lato:300,400&display=swap');

.pokemon
  border-radius 20px
  box-shadow 0 3px 15px rgba(100, 100, 100, 0.5)
  margin 10px
  padding 20px
  text-align center
  background-color #eee

  &__img-container
    background-color rgba(255, 255, 255, 0.6)
    border-radius 50%
    width 120px
    height 120px
    text-align center

  &__img
    max-width 90%
    margin-top 10px

  &__info
    margin-top 30px

  &__number
    background-color rgba(0, 0, 0, 0.1)
    border-radius 10px
    padding 5px 10px

  &__name
    margin 15px 0 7px
    letter-spacing 1px
  </style>
