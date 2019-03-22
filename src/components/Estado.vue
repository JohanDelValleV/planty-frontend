<template>
  <div id="lateral">+
        <v-tabs v-model="tabs">
          <v-tab href="#one"></v-tab>
        </v-tabs>
    <v-fab-transition>
      <v-btn
        :key="activeFab.icon"
        v-model="fab"
        color="primary"
        dark
        fab
        fixed
        bottom
        left
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-fab-transition>
  </div>
</template>
<script>
  export default {
    data: () => ({
      fab: false,
      hidden: false,
      tabs: null
    }),

    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { icon: 'add' }
          default: return {}
        }

      }
    }
  }
</script>