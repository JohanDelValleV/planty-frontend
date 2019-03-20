<template>
    <v-app>
        <div class="container">
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-layout>
                        <v-flex xs4 offset-xs>
                            <v-img :src="img" height="110px" width="110px" contain></v-img>
                        </v-flex>
                        <v-flex xs7>
                            <v-card-title primary-title>
                                <div>
                                    <div v-bind:location="location"> {{ location }} </div>
                                    <div v-bind:clima="clima"> {{ clima }} </div>
                                    <div v-bind:condition="condition"> {{ condition }} </div>
                                    <div v-bind:humdity="humidity"> {{ humidity }} </div>
                                </div>
                            </v-card-title>
                        </v-flex>
                    </v-layout>
                    <v-card-actions>
                        <v-btn flat color="orange" v-on:click="getWeather()">Reload</v-btn>
                        <v-btn flat color="orange">Explore</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </div>
    </v-app>
</template>

<script>
    import { WEATHER } from '../services/weather';
    export default {
        name: 'Weather',
        props: {
            
        },
        data: () => ({
            clima: String,
            location: String,
            img: String,
            humidity: String,
            condition: String,

        }),
        methods: {
            getWeather(){
                WEATHER.get().then(response => {
                    this.clima = response.data.current.temp_c + ' °C';
                });
            },
            getImgUrl(){
                WEATHER.get().then(response => {
                    this.img = response.data.current.condition.icon;
                });
            },
            getLocation(){
                WEATHER.get().then(response => {
                    this.location = response.data.location.name + ', ' + response.data.location.region;
                })
            },
            getHumidity(){
                WEATHER.get().then(response => {
                    this.humidity = response.data.current.humidity;
                })
            },
            getCondition(){
                WEATHER.get().then(response => {
                    this.condition = response.data.current.condition.text;
                })
            }
        },
        mounted: function(){
            WEATHER.get().then(response => {
                console.log(response)
                this.getWeather();
                this.getLocation();
                this.getImgUrl();
                this.getHumidity();
                this.getCondition();
            })
        }
    }
</script>

<style scoped>

</style>