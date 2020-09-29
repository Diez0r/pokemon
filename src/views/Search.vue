<template>
  <div
    class="search"
  >
    <div class="search__wrap">
      <label for="search_id" class="search__label">
        Insert pokemon name:
      </label>
      <input
        type="text"
        class="search__input"
        autocomplete="off"
        id="search_id"
        v-model="searchValue"
        @input="debounceForSearchInput"
      >
      <transition name="fade">
        <p
          v-if="searchValue.length <= 3"
          class="search__info-text"
        >
          {{ infoMessage }}
        </p>
      </transition>
      <transition name="fade">
        <p
          v-if="noResultsError"
          class="search__info-text error"
        >
          {{ errorMessage }}
        </p>
      </transition>
      <div
        v-if="searchValue.length > 0"
        class="search__clear-button"
        @click="clearSearchInput"
        title="Очистить"
      />
    </div>
    <transition name="fade">
    <ul
      v-if="searchResult && searchResult.length"
      class="search__results">
      <li
        v-for="(item, i) of searchResult"
        class="search__item">
          <PokemonCard
            :pokemon="item"
          />
      </li>
    </ul>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
import pokemons from "../pokemons";
import PokemonCard from '@/components/PokemonCard.vue';
import debounce from 'lodash/debounce.js';


export default {
  name: 'Search',

  components: {
    PokemonCard,
  },

  data() {
    return {
      searchValue: '',
      infoMessage: 'Start enter pokemon name to search',
      noResultsError: false,
      errorMessage: 'Search has no results',
      pokemons,
      searchResult: [],
      error: false,
    }
  },

  created() {
    this.debounceForSearchInput = debounce(() => {
      this.searchPokemons();
    }, 500);
  },
  // TODO реализовать
  // Ошибку если введено <= 3 символа при этом поиск не запускать
  // Ошибку если ничего не найдено
  // Кнопку сброса поиска
  // Дебаунс

  methods: {
    searchPokemons() {
      if (!this.searchValue.length) {
        this.searchResult = [];
        this.noResultsError = false;
        return;
      }

      const loverCaseSearchInput = this.searchValue.toLowerCase();

      if (this.searchValue.length > 3) {
        this.searchResult = this.pokemons.filter(({ name }) => name.includes(loverCaseSearchInput));
        this.noResultsError = false;
      }

      if (this.searchValue.length > 3 && this.searchResult.length === 0) {
        this.noResultsError = true;
      }
    },

    clearSearchInput() {
      this.searchValue = '';
      this.searchResult = [];
      this.noResultsError = false;
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
  justify-content flex-start
  margin 0
  height 100vh
  background #EFEFBB
  background linear-gradient(to right, #D4D3DD, #EFEFBB)
  font-family 'Lato'

  &__wrap
    position relative

  &__input
    border-radius 20px
    box-shadow 0 3px 15px rgba(100, 100, 100, 0.5)
    margin 10px
    padding 20px
    text-align center
    background-color #eee
    outline none

  &__info-text
    position absolute
    top 80%
    left 50%
    font-size 12px
    font-style italic

    &.error
      color red


  &__clear-button
    position absolute
    top 50%
    right 20px
    width 15px
    height 15px
    transform translateY(-50%)
    background-color transparent
    background-image url('../assets/img/red_cross.svg')
    cursor pointer

  &__results
    list-style none
    display flex

.fade-enter-active,
.fade-leave-active
  transition opacity .5s

.fade-enter,
.fade-leave-to
  opacity: 0


</style>
