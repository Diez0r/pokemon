<template>
  <div
    class="pokemon"
  >
    <div
      v-if="getPokemonById"
      :style="{backgroundColor: getBackgroundColor(getPokemonById.type)}"
      class="pokemon__container">
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
    <div
      v-else
      class="pokemon__error"
    >
      <p class="pokemon__error-text">
        Sorry, but this pokemon doesn't exist
      </p>
      <img
        src="https://cdn.vox-cdn.com/thumbor/TXmncr7POeZm36ewwo-Zsi6hvmo=/0x58:600x493/920x613/filters:focal(252x252:348x348):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/65369769/600px_778Mimikyu.0.png"
        class="pokemon__error-img"
        alt=""
      >
      <a
        :href="pages.main"
        type="button"
        class="pokemon__error-button"
      >
        Go to Main
      </a>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import pokemons from "../pokemons";
import pokemonMixin from "./mixin.ts";
import constants from "@/constants/pages";

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
      pages: constants,
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
  font-family 'Lato'

  &__container
    display flex
    flex-direction column
    justify-content spa
    align-items center
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

  &__error
    display flex
    flex-direction column
    justify-content center
    align-items center

  &__error-text
    font-size 32px

  &__error-img
    width 50%

  &__error-button
    margin-top 50px
    padding 10px 25px
    border 1px solid black
    border-radius 2px
    text-decoration none
    color #000000
    background-color red
  </style>
