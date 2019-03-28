<template>
    <v-app>
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
                color="secondary"
                flat
                @click="snackbar = false"
            >
                Close
            </v-btn>
        </v-snackbar>
            <img id="play" width="700px">
    </v-app>
</template>

<script>
    import Ws from '@adonisjs/websocket-client';
    import $ from 'jquery';
    const ws = Ws('ws://192.168.43.99:3333');
    export default {
        data() {
            return {
                snackbar: false,
                y: 'bottom',
                x: null,
                mode: '',
                timeout: 4000,
                text: '',
                riego: null,
            }
        },
        methods: {
            inicializeRiegows: async function(){
                ws.connect();
                this.riego = ws.subscribe('riego')
                let riego = this.riego;
                riego.on('riegos',(data)=>{
                    console.log(data)
                })
                riego.on('ready', (data)=> {
                    this.riego.emit('riego', 'Hola')
                    console.log(data)
                })
                // this.riego.emit('riego', 'Hola')
            },
        },
        mounted(){
            // this.socket.on('stream', (image) => {
            //    $('#play').attr('src',image);
            // });
            this.inicializeRiegows();
        }
    }
</script>

<style scoped>

</style>