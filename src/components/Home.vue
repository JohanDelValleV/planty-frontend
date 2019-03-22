<template>
  <v-app>
      <v-toolbar color="primary" app>
      <v-toolbar-title>
        <v-icon color="white">local_florist</v-icon>
            <span class="titulo"><strong>planty</strong></span>
        </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <div class="vista">
        <div v-if="bottomNav === 'eventos'">
          <Eventos/>
        </div>
        <div v-else-if="bottomNav === 'live'">
          <Live/>
        </div>
        <div v-else>
          <Weather/>
        </div>
    </div>
    <v-bottom-nav
      :active.sync="bottomNav"
      :value="true"
      app
      shift
    >
      <v-btn
        color="primary"
        flat
        value="eventos"
      >
        <span>Riegos</span>
        <v-icon>local_drink</v-icon>
      </v-btn>

      <v-btn
        color="primary"
        flat
        value="live"
      >
        <span>En vivo</span>
        <v-icon>linked_camera</v-icon>
      </v-btn>

      <v-btn
        color="primary"
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
  .vista{
    margin-top: 50px;
    margin-bottom: 70px;
  }
  .titulo{
    font-family: 'Quicksand', Bold;
    color: #FFFFFF;
    font-size: 120%;
  }
</style>
<script>
  import Live from './Live'
  import Eventos from './Eventos'
   import Weather from './Weather'
  export default {
    components: {
      Live,
      Eventos,
      Weather
    },
    data () {
      return {
        bottomNav: 'eventos'
      }
    }
  }
</script>