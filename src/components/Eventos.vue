<template>
  <v-app id="eventos">
       <div class="contenedor">
           <div class="boton-crear">
               
               <v-dialog v-model="dialog" persistent>
                    <template v-slot:activator="{ on }">
                        <div><v-btn large round color="secondary" class="boton" dark v-on="on" >Crear evento<v-icon>add</v-icon></v-btn></div>
                    </template>
                        <v-card>
                            <v-container>
                            <div><h2>Programar regadero</h2></div>
                            <div class="contenedor-modal">
                                <div class="fecha-picker">
                                    <v-date-picker
                                    v-model="date"
                                    full-width
                                    landscape
                                    class="mt-3"
                                    color="primary"
                                ></v-date-picker>
                                </div> 
                                 <div class="tiempo-picker">
                                     <v-time-picker
                                v-model="time"
                                full-width
                                landscape
                                type="month"
                                class="mt-3"
                                color="primary"
                                ></v-time-picker>
                                 </div>
                            </div>
                        </v-container>
                        <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" flat @click="dialog = false">Close</v-btn>
                        <v-btn color="secondary" flat @click="guardar()">Save</v-btn>
                        </v-card-actions>
                    </v-card>
                    </v-dialog>
            </div>
           <div class="lista">
           </div>
        </div>
  </v-app>
</template>
<style>
.contenedor{
    display: flex;
    flex-direction: column;
}
.boton-crear{
    display: flex;
    flex-direction: row-reverse;
    margin-top: 2.5%;
    margin-right: 2.5%;
}
.lista{
    margin-top: 2.5%;
    margin-left: 10%;
    margin-right: 10%;
}
.contenedor-modal{
    display: flex;
    flex-direction:row-reverse;

}
.tiempo-picker{
    width: 50%;
    margin: 2%;
}
.fecha-picker{
    width: 50%;
    margin: 2%;
}
</style>
<script>
  export default {
    data () {
      return {
        time: new Date().getHours().toString() +':'+new Date().getMinutes().toString(),
        date: new Date().toISOString().substr(0, 10),
        dialog: false,
        items: [
          { header: 'Today' },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
            title: 'Brunch this weekend?',
            subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend."
          },
          { divider: true, inset: true },
          {
            avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
            title: 'Oui oui',
            subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?"
          }
        ]
      }
    },
    methods:{
        guardar(){
            this.dialog=false;
            console.log(this.time)
            console.log(this.date)
        },
        editar(id){

        },
        eliminar(id){

        }
    }
  }
</script>