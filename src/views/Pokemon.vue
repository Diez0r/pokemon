<template>
  <div class="pokemon">
    <h1 class="home__title">
      Pokemon  {{ $route.params.id }}

    </h1>
  </div>
</template>

<script>
// @ is an alias to /src
import pokemons from "../pokemons";

export default {
  name: 'Pokemon',

  data() {
    return {
      pokemons,
    }
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
