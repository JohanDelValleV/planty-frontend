<template>
  <v-app>
    <div id="lateral" href="#one">
      <v-dialog v-model="dialog" persistent>
          <template v-slot:activator="{ on }">
            <v-layout>
              <div>
                <v-fab-transition>
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
                    <br><br><br><br><br>
                    <v-flex xs12>
                      <v-text-field
                        v-model="date"
                         :rules="[rules.validate]"
                        @keyup.enter="guardar"
                        label="Cada cuantos dias se regará"
                        outline
                        suffix="dias"
                        type="number"
                        clearable
                      ></v-text-field>
                    </v-flex>
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
      <!-- <v-layout>
        <v-flex sm2 offset-sm1>
          <v-card class="card">
            <div class="container">
              <div v-bind:time="time" style="color:#878787; font-size:15px;">Local time: <span>{{time}}</span></div>
            </div>
          </v-card>
        </v-flex>
      </v-layout> -->
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
                      <div class="tarjeta">
                        <div>
                          <v-flex><strong>Se regará cada {{event.date}} dias</strong></v-flex>
                          <v-flex v-text="event.time"></v-flex>
                        </div>
                        <v-spacer></v-spacer>
                        <div>
                          <v-btn fab small flat @click="eliminar(event.id)" color="grey"><v-icon>delete</v-icon></v-btn>
                        </div>
                      </div>
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
.tarjeta{
  display: flex;
  flex-direction:row;
}
  #lateral .v-btn--floating {
    margin-bottom: 60px;
    margin-right: 10px;
  }
  .card {
    border: 1px solid #878787;
    border-radius: 8px;
    box-shadow: none;
  }
</style>
<script>
import io from 'socket.io-client';
import { API } from '../services/axios';
  export default {
    data () {
      return {
        socket : io('157.230.169.186:4040'),
        snackbar: false,
        y: 'bottom',
        x: null,
        timeout: 6000,
        mode: '',
        text: '',
        time: '',
        date: '',
        dialog: false,
        events:[],
        rules:{
          validate: value => !!value || 'Ingrese un número válido.'
        }
      }
    },
    mounted () {
      this.socket.on('connect', function () {
        console.log(':)')
      });
      API.get('evento/').then(response=>{
        this.events=response.data.slice().reverse();
      });
      
      
    },
    methods:{
      // inicializeRiegows: async function(){
      //     ws.connect();
      //     this.riego = ws.subscribe('riego')
      //     // let riego = this.riego;
      //     // riego.on('riegos',(data)=>{
      //     //     console.log(data)
      //     // })
      //     // riego.on('ready', (data)=> {
      //     //     this.riego.emit('riego', 'Hola')
      //     //     console.log(data)
      //     // })
      //     // this.riego.emit('riego', 'Hola')
      // },
      onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
        guardar(){
          //const tiempo = (new Date()).toTimeString().replace(" GMT-0600 (Central Standard Time)","")
          this.dialog=false;
          API.post('evento/',{
            date: this.date,
            time: this.time,          
          }).then(()=>{
              this.dialog=false;
              API.get('evento/').then(response=>{
                this.events=response.data.slice().reverse();
                this.text='Evento de riego agregado.';
                this.snackbar = true;
                this.date='';
                this.socket.emit('riego', {date:this.date,time:this.time})
              });
          })
          
        },
        eliminar(id){
          API({
              method:'delete',
              url:('evento/').concat(id),
          }).then(()=>{
              this.dialog=false;
              API.get('evento/').then(response=>{
                this.events=response.data.slice().reverse();
                this.text='Evento de riego eliminado.';
                this.snackbar = true;
                this.socket.emit('eliminar', {id:id})
              });
          })
        }
    },
  }
</script>