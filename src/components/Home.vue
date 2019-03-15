<template>
  <v-app>
      <!-- <v-toolbar app color="primary">
      <v-toolbar-title class="headline text-uppercase">
        <span class="title">planty</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar> -->
    <div class="headline text-xs-center pa-5">
    </div>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      absolute
      color="transparent"
    >
      <v-btn
        color="primary"
        flat
        value="recent"
      >
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        value="favorites"
      >
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        value="nearby"
      >
        <span>Nearby</span>
        <v-icon>place</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>
<style>
  .title{
    color:"white"
  }
</style>
<script>
  export default {
    data () {
      return {
        bottomNav: 'recent'
      }
    }
  }
</script>