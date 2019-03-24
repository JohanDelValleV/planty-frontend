<template>
    <v-app>
        <div class="container">
            <v-flex sm4 oofset-sm4>
                <v-card class="card">
                    <v-layout>
                        <div class="container">
                            <div class="text">Status</div>
                            <div>
                                <v-icon color="primary" style="float:left;height:64px;width:64px">local_florist</v-icon>
                                <div class="status-container" aria-level="3" role="heading">
                                    <span class="status">40</span>
                                    <div style="float:left;font-size:16px;margin-top:6px;" color="#212121">
                                        <span>°C</span>
                                    </div>
                                </div>
                            </div>
                            <div class="data">
                                <div>Humedad: <span>30%</span></div>
                            </div>
                        </div>
                    </v-layout>
                </v-card>
            </v-flex>
        </div>
    </v-app>
</template>

<script>
    export default {
        name: 'Status',
        data: ()=> {

        },
    }
</script>

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