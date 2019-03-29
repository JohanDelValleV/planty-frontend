<template>
    <v-app>
        <div class="container">
            <h1>{{temp}}</h1>
            <v-flex sm4 oofset-sm4>
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
                                <div>Humedad: <span v-bind:hum="hum">{{hum}}</span></div>
                            </div>
                        </div>
                    </v-layout>
                </v-card>
            </v-flex>
        </div>
    </v-app>
</template>

<style scoped>
    .card {
        border: 1px solid #dfe1e5;
        border-radius: 8px;
        box-shadow: none;
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
</style>
<script>
import io from 'socket.io-client';
export default {
    data: () => ({
        socket : io('192.168.1.28:3030'),
        temp: String,
        hum: String,
    }),
    mounted(){
        this.socket.on('temperatura', (t) => {
            this.temp=t;
            console.log(t)
        });
        this.socket.on('humedad', (h) => {
            this.hum=h;
            console.log(h)
        });
    }
}
</script>