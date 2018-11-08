<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

  // app Vue instance
  const app = {

    name: 'app',

    // app initial state
    data: () => {
      return {
        activeUser: null
      }
    },

    // methods that implement data logic.
    // note there's no DOM manipulation here at all.
    methods: {
      async refreshActiveUser () {
        this.activeUser = await this.$auth.getUser()
        this.$log.debug('activeUser',this.activeUser)
      },
    },

  }

  export default app

</script>

<style>

  [v-cloak] { display: none; }

  body {
    padding-top: 100px;
  }

</style>
