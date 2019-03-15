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
        color="secondary"
        flat
        value="eventos"
      >
        <span>Eventos</span>
        <v-icon>today</v-icon>
      </v-btn>

      <v-btn
        color="secondary"
        flat
        value="live"
      >
        <span>En vivo</span>
        <v-icon>linked_camera</v-icon>
      </v-btn>

      <v-btn
        color="secondary"
        flat
        value="estado"
      >
        <span>Estado</span>
        <v-icon>wb_sunny</v-icon>
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