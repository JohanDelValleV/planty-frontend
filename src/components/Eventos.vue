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
             <v-timeline>
              <v-slide-x-transition
                group
              >
                <div >
                  
                </div>
                <v-timeline-item
                  v-for="event in events"
                  :key="event.id"
                  class="mb-4"
                  color="slight"
                  icon="local_drink"
                  fill-dot
                >
                    <v-card class="elevation-2">
                      <v-card-text>
                        <v-flex><strong>{{event.time}}</strong></v-flex>
                        <v-flex v-text="event.date"></v-flex>
                      </v-card-text>
                    </v-card>
                </v-timeline-item>
              </v-slide-x-transition>
              </v-timeline>
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
    /* padding: 5%;
    border-radius: 5px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
    background-color: white; */
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
import { API } from '../services/axios';
  export default {
    data () {
      return {
        time: new Date().getHours().toString() +':'+new Date().getMinutes().toString(),
        date: new Date().toISOString().substr(0, 10),
        dialog: false,
        events:[],
      }
    },
    mounted () {
      API.get('evento/').then(response=>{
        this.events=response.data.slice().reverse();
      });
      
    },
    methods:{
        guardar(){
          const tiempo = (new Date()).toTimeString().replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          })

          API.post('evento/',{
            date: this.date,
            time: tiempo,          
          }).then(()=>{
              this.dialog=false;
              API.get('evento/').then(response=>{
                this.events=response.data.slice().reverse();
              });
          })
          
        },
        editar(id){

        },
        eliminar(id){

        }
    }
  }
</script>