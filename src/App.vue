<template>
  <div id="app">
    <AppHeader />
    <!--router-view не удалять-->
    <router-view/>
  </div>
</template>

<script>
  import AppHeader from '@/components/AppHeader.vue';

  export default {
    name: 'App',

    components: {
      AppHeader,
    },
  };
</script>

<style lang="stylus">
body
  margin 0

a
  color inherit
  text-decoration none
</style>
