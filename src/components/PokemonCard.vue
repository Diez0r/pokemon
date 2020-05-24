<template>
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
        {{ changeLettersCase }}
      </h3>
      <p class="pokemon-card__type">
        Type: {{ pokemon.type }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PokemonCard',
  
  props: {
    pokemon: {
    type: Object,
    default: null,
    },
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
    changeLettersCase() {
      if (this.pokemon.name.toLowerCase() === 'pikachu') {
        return this.pokemon.name.toUpperCase()
      } else {
        let toUpperLetter = `${(this.pokemon.name[0]).toUpperCase()}${this.pokemon.name.slice(1)}`
        return toUpperLetter
      }
    },
  },

  methods: {
    getBackgroundColor(type) {
      switch (type) {
        case 'fire':
          return '#FDDFDF'
          break

        case 'grass':
          return '#DEFDE0'
          break

        case 'electric':
          return '#FCF7DE'
          break

        case 'water':
          return '#DEF3FD'
          break

        case 'ground':
          return '#f4e7da'
          break

        case 'rock':
          return '#d5d5d4'
          break

        case 'fairy':
          return '#fceaff'
          break

        case 'poison':
          return '#98d7a5'
          break

        case 'bug':
          return '#f8d5a3'
          break

        case 'dragon':
          return '#97b3e6'
          break

        case 'psychic':
          return '#eaeda1'
          break

        case 'flying':
          return '#F5F5F5'
          break

        case 'fighting':
          return '#E6E0D4'
          break

        case 'nornal':
          return '#F5F5F5'
          break
      }
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
