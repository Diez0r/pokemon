<template>
  <router-link
    :to="`/pokemon/${pokemon.id}`"
  >
    <div
      class="pokemon-card"
      :style="{backgroundColor: getBackgroundColor(pokemon.type)}"
      @click="getPokemonInfo(pokemon)"
    >
      <div class="pokemon-card__img-container">
        <img
          :src="pokemon.image"
          width="120"
          height="120"
          class="pokemon-card__img"
        >
      </div>
      <div class="pokemon-card__info">
        <span class="pokemon-card__number">
          {{ pokemonNumber }}
        </span>
        <h3 class="pokemon-card__name">
          {{ changeNamesLetterCase }}
        </h3>
        <p class="pokemon-card__type">
          Type: {{ pokemon.type }}
        </p>
      </div>
      <div
        ref="pokemonSlider"
        class="swiper-container"
      >
        <div class="swiper-wrapper">
          <img
            :src="pokemon.image"
            width="120"
            height="120"
            class="swiper-slide pokemon-card__img"
          >
        </div>
      </div>
      </div>
  </router-link>
</template>

<script>
import pokemonMixin from "../views/mixin.ts";
import Swiper from "swiper"

export default {
  name: 'PokemonCard',

  mixins: [pokemonMixin],

  props: {
    pokemon: {
    type: Object,
    default: null,
    },

    link: {
      type: String,
      default: '',
    },
  },

  data() {
    return {
      pokemonSlider: null,
    }
  },

  computed: {
    pokemonNumber() {
      const idLenght = String(this.pokemon.id).length;
      if (idLenght === 1) {
        return `#00${this.pokemon.id}`
      } else if (idLenght === 2) {
        return `#0${this.pokemon.id}`
      } else if (idLenght >= 3) {
        return `#${this.pokemon.id}`
      }
    },
    changeNamesLetterCase() {
      if (this.pokemon.name.toLowerCase() === 'pikachu') {
        return this.pokemon.name.toUpperCase()
      } else {
        let toUpperLetter = `${(this.pokemon.name[0]).toUpperCase()}${this.pokemon.name.slice(1)}`
        return toUpperLetter
      }
    },
  },

  mounted() {
    this.$nextTick(() => {
      this.initPokemonSlider();
    });
  },

  methods: {
    initPokemonSlider() {
      const options = {
          slidesPerView: 'auto',
          spaceBetween: 5,
      };

      this.pokemonSlider = new Swiper('.swiper-container', options);
    },

    getPokemonInfo(pokemon) {
      if (pokemon.name.toLowerCase() === 'pikachu') {
        alert('Pika - Pika')
      } else {
        console.log(`Name:${pokemon.name}, Type:${pokemon.type}`)
      }
    }
  },
};
</script>

<style scoped lang="stylus">
.pokemon-card
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
