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
        <div style="max-width: 700px; margin: auto;">
            <img id="play" width="700px">
        </div>
    </v-app>
</template>

<script>
    import Ws from '@adonisjs/websocket-client';
    import io from 'socket.io-client';
    import $ from 'jquery';
    const ws = Ws('ws://localhost:3333');
    export default {
        data() {
            return {
                socket : io('LAPTOP-LESS:3001'),
                snackbar: false,
                y: 'bottom',
                x: null,
                mode: '',
                timeout: 4000,
                text: '',
                riego: null,
            }
        },
        async created(){
            this.inicializeriegows();
            },
        methods: {
            inicializeRiegows: async function(){
                ws.connect();
                this.riego = ws.subscribe('riego')
                let riego = this.riego;
                riego.on('ready', ()=> {
                    this.riego.emit('message', 'Hola')
                })
            },
        },
        mounted(){
            this.socket.on('stream', (image) => {
               $('#play').attr('src',image);
            });
        }
    }
</script>

<style scoped>

</style>