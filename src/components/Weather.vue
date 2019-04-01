<template>
    <v-app>
        <div class="concuchara">
            <v-flex sm4 offset-sm1>
                <v-card class="card">
                    <v-layout>
                        <div class="container">
                            <div v-bind:location="location" class="location"> {{ location }} </div>
                            <div style="color:#878787; font-size:15px;"> {{now}} </div>
                            <div v-bind:condition="condition" style="color:#878787; font-size:15px;"> {{ condition }} </div>
                            <div>
                                <v-img :src="img" contain style="float:left;height:64px;width:64px"></v-img> 
                                <div style="" class="clima-container" aria-level="3" role="heading">
                                    <span v-bind:clima="clima" class="clima"> {{ clima }} </span>
                                    <div style="float:left;font-size:16px;margin-top:6px;" color="#212121">
                                        <span>°C</span>
                                    </div>
                                </div>
                            </div>
                            <div class="data-weather">
                                <div v-bind:humdity="humidity">Humedad: <span>{{humidity}}%.</span></div>
                                <div v-bind:viento="viento">Viento a: <span>{{viento}} km/h.</span></div>
                            </div>
                        </div>
                    </v-layout>
                </v-card>
            </v-flex>
            <v-flex sm4 offset-sm2>
                <v-card class="card">
                    <v-layout>
                        <div class="container">
                            <div class="text">Status</div>
                            <div>
                                <v-icon color="primary" style="float:left;height:64px;width:64px">local_florist</v-icon>
                                <div class="status-container" aria-level="3" role="heading">
                                    <span class="status" v-bind:temp="temp">{{temp}}</span>
                                    <div style="float:left;font-size:16px;margin-top:6px;" color="#212121">
                                        <span>°C</span>
                                    </div>
                                </div>
                            </div>
                            <div class="data">
                                <div>Humedad: <span v-bind:hum="hum">{{hum}}</span>%</div>
                            </div>
                        </div>
                    </v-layout>
                </v-card>
            </v-flex>
        </div>
    </v-app>
</template>

<script>
    import { WEATHER } from '../services/weather';
    import io from 'socket.io-client';
    export default {
        name: 'Weather',
        data: () => ({
            socket : io('157.230.169.186:3030'),
            clima: '0',
            location: '-',
            img: '',
            humidity: '0',
            condition: '0',
            viento: '0',
            temp: '0',
            hum: '0',
        }),
        methods: {
            getWeather: async function(){
                await WEATHER.get().then(response => {
                    this.clima = response.data.current.temp_c;
                    this.img = response.data.current.condition.icon;
                    this.location = response.data.location.name + ', ' + response.data.location.region;
                    this.humidity = response.data.current.humidity;
                    this.condition = response.data.current.condition.text;
                    this.viento = response.data.current.wind_kph;
                });
            },
            localTime: function(){
                var day = new Date()
                var hour = day.getHours();
                var minute = day.getMinutes();
                this.time= hour+':'+minute;
            }
        },
        computed: {
            now: function(){
                var day = new Date()
                var weekday = new Array(7)
                weekday = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"]
                return weekday[day.getDay()]
            },
        },
        watch: {
            
        },
        mounted: async function(){
            await this.getWeather();
            // setInterval(function(){
            //     this.getWeather();
            // })
            this.socket.on('temperatura', (t) => {
                this.temp=t;
            });
            this.socket.on('humedad', (h) => {
                this.hum=h;
            });
        }
    }
</script>

<style scoped>
    .card {
        border: 1px solid #dfe1e5;
        border-radius: 8px;
        box-shadow: none;
    }
    .clima-container {
        padding-left: 10px;
        float: left;
        color: #212121 !important;
    }
    .location {
        font-family: arial, sans-serif;
        font-size: x-large;
        color: #878787 !important;
    }
    .clima {
        float: left;
        margin-top: 2px;
        font-size: 32px
    }
    .data-weather {
        color: #878787 !important;
        font-size: 15px;
        padding-right: 30px;
        line-height: 22px;
        float: right;
        margin-top: 2px;
        padding-top: 2px;
        min-width: 43%;
    }
    .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  .text {
        font-family: arial, sans-serif;
        font-size: x-large;
        color: #878787 !important;
    }
    .status-container {
        padding-left: 10px;
        float: left;
        color: #212121 !important;
    }
    .status {
        float: left;
        margin-top: 2px;
        font-size: 32px
    }
    .data {
        color: #878787 !important;
        font-size: 15px;
        padding-right: 30px;
        line-height: 22px;
        float: right;
        margin-top: 2px;
        padding-top: 2px;
        min-width: 43%;  
    }
    .concuchara{
        margin-top: 2%;
        display: flex;
        flex-direction: row;
    }
</style>