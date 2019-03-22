<template>
  <v-app id="eventos"> v-model="tabs"
    <div id="lateral" href="#one">
      <v-dialog v-model="dialog" persistent>
          <template v-slot:activator="{ on }">
            <v-layout >
              <div>
                <v-fab-transition >
                  <v-btn
                    color="primary"
                    dark  
                    bottom
                    right
                    fixed
                    v-on="on" 
                    fab
                  >
                    <v-icon>add</v-icon>
                  </v-btn>
                </v-fab-transition>
              </div>
              
            </v-layout>
            
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
      <div class="contenedor">
        <div class="lista">
          <v-timeline dense align-top >
            <v-slide-x-transition
              group
            >
              <div v-for="event in events" :key="event.id">
                <div v-if="event.status==true">
                  <v-timeline-item
                  :key="event.id"
                  class="mx-auto"
                  color="sdark"
                  icon="done"
                  fill-dot
                  >
                    <v-card class="elevation-2">
                      <v-card-text>
                        <v-flex><strong>{{event.time}}</strong></v-flex>
                        <v-flex v-text="event.date"></v-flex>
                      </v-card-text>
                    </v-card>
                </v-timeline-item>
              </div>
              <div v-else>
                <v-timeline-item
                class="mb-auto"
                color="slight"
                icon="schedule"
                fill-dot
                >
                  <v-card class="elevation-2">
                    <v-card-text>
                      <v-flex><strong>{{event.time}}</strong></v-flex>
                      <v-flex v-text="event.date"></v-flex>
                    </v-card-text>
                  </v-card>
                </v-timeline-item>
              </div>
            </div>
          </v-slide-x-transition>
        </v-timeline>
      </div>
    <div>
      <v-snackbar
      v-model="snackbar"
      :bottom="y === 'bottom'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :right="x === 'right'"
      :timeout="timeout"
      :top="y === 'top'"
      :vertical="mode === 'vertical'"
      >
        {{ text }}
        <v-btn
        color="plight"
        flat
        @click="snackbar = false"
        >
          Cerrar
        </v-btn>
      </v-snackbar>
    </div>
    </div>
  </v-app>
</template>
<style>
.contenedor{
    display: flex;
    flex-direction: column;
    margin-top: 2.5%;
}
.lista{
    /* padding: 5%;
    border-radius: 5px;
    box-shadow: 0 2px 4px -1px rgba(0, 0, 0, .2), 0 4px 5px 0 rgba(0, 0, 0, .14), 0 1px 10px 0 rgba(0, 0, 0, .12);
    background-color: white; */
    margin-left: 30%;
    margin-right: 30%;
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
  #lateral .v-btn--floating {
    margin-bottom: 60px;
    margin-right: 10px;
  }
</style>
<script>
import { API } from '../services/axios';
  export default {
    data () {
      return {
        snackbar: false,
        y: 'bottom',
        x: null,
        timeout: 6000,
        mode: '',
        text: 'Evento de riego agregado.',
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
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
        guardar(){
          const tiempo = (new Date()).toTimeString().replace(" GMT-0600 (Central Standard Time)","")

          API.post('evento/',{
            date: this.date,
            time: tiempo,          
          }).then(()=>{
              this.dialog=false;
              API.get('evento/').then(response=>{
                this.events=response.data.slice().reverse();
                this.snackbar = true;
              });
          })
          
        },
        // editar(id){

        // },
        // eliminar(id){

        // }
    }
  }
</script>