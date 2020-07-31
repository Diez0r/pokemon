<template>
  <div class="header">
    <div class="header__container">
      <a
        :href="pages.main"
        class="header__link main"
      >
        Main
      </a>
      <a
        :href="pages.pokemon"
        class="header__link pokemon"
      >
        Pokemon
      </a>
      <a
        :href="pages.search"
        class="header__link search"
      >
        Search
      </a>
    </div>
    <div class="header__mobile">
      <h1 class="header__mob-title">
        PokeDex Mobile
      </h1>
      <button
        type="button"
        class="header__sandwich"
        @click="openMobileMenu"
      />
      <transition name="aside">
        <div
          id="mobile" class="header__mob-menu"
          v-if="showMobileMenu"
        >
          <button
            type="button"
            class="header__close"
            @click="openMobileMenu"
          />
          <div class="header__mob-container">
            <a
              :href="pages.main"
              class="header__mob-link main"
            >
              Main
            </a>
            <a
              :href="pages.pokemon"
              class="header__mob-link pokemon"
            >
              Pokemons
            </a>
            <a
              :href="pages.search"
              class="header__mob-link search"
            >
              Search
            </a>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import constants from "@/constants/pages";


  export default {
    name: 'AppHeader',

    data() {
      return {
        pages: constants,
        showMobileMenu: false,
      }
    },

    methods: {
      openMobileMenu() {
        // ref
        this.showMobileMenu = !this.showMobileMenu;
      },
    },
  };
</script>

<style scoped lang="stylus">
.header
  display flex
  justify-content center
  align-items center
  box-sizing border-box
  width 100%
  padding 50px
  background linear-gradient(to bottom, white, 5%, red)
  font-family 'Lato'

  &__container
    display flex
    justify-content space-between
    align-items center
    width 50%

  &__mobile
    display none

  @media screen and (max-width 1023px)
    &__container
      display none

  &__link
    padding 10px 25px
    border 1px solid black
    border-radius 2px
    text-decoration none
    color #000000

    &.main
      background-color tomato

    &.pokemon
      background-color yellow

    &.search
      background-color green

  @media screen and (max-width 1023px)
    &__mobile
      position relative
      display flex
      flex-direction column
      justify-content center
      align-items center
      width 100%

    &__mob-title
      font-size 14px

    &__sandwich
      position absolute
      top 20px
      right 0
      border none
      padding 0
      height 20px
      width 20px
      background-color transparent
      cursor pointer
      transform translateY(-50%)

      &:hover
        &.header__sandwich::before,
        &.header__sandwich::after
          background-color #fff

      &::before
        content ''
        display block
        height 2px
        width 20px
        background-color #000
        transition background-color ease .3s

      &::after
        content ''
        display block
        height 2px
        width 20px
        margin-top 5px
        background-color #000
        transition background-color ease .3s

    &__close
      position absolute
      top 70px
      right 50px
      border none
      padding 0
      height 20px
      width 20px
      background-color transparent
      cursor pointer
      transform translateY(-50%)

      &:hover
        &.header__close::before,
        &.header__close::after
          background-color #fff

      &::before
        content ''
        display block
        height 2px
        width 20px
        background-color #000
        transition background-color ease .3s

      &::after
        content ''
        display block
        height 2px
        width 20px
        margin-top 5px
        background-color #000
        transition background-color ease .3s

    &__mob-menu
      position fixed
      top 0
      bottom 0
      left 0
      right 0
      display flex
      flex-direction column
      justify-content center
      align-items center
      background linear-gradient(to bottom, white, 1%, red)

    &__mob-container
      display flex
      justify-content space-between
      align-items center
      flex-direction column
      height 30%

    &__mob-link
      padding 10px 25px
      border 1px solid black
      border-radius 2px
      text-decoration none
      color #000000

      &.main
        background-color tomato

      &.pokemon
        background-color yellow

      &.search
        background-color green

.aside-enter,
.aside-leave-to
  transform translateY(-100%)

.aside-enter-to,
.aside-leave
  transform translateY(0)

.aside-enter-active,
.aside-leave-active
  transition transform 0.2s ease-in-out
</style>
