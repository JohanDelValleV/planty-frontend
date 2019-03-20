<template>
  <v-app>
    

    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>
<style>
  @import url('https://fonts.googleapis.com/css?family=Quicksand');
</style>
<script>
import Home from './components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {
      //
    }
  }
}
</script>
