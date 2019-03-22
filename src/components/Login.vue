<template>
    <v-app class="background">
        <v-snackbar
            v-model="snackbar"
            :multi-line="mode === 'multi-line'"
            :timeout="timeout"
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
            <v-container style="position: relative;" class="text-xs-center">
                <v-card max-height="auto" max-width="auto" class="borde">
                    <v-layout>
                        <div class="container">
                            <v-card-title>
                                <div>
                                    <v-icon color="primary" size="65px">local_florist</v-icon>
                                    <span class="titulo"><strong>planty</strong></span>
                                </div>
                            </v-card-title>
                            <v-card-text>
                            <v-form>
                                <v-text-field outline prepend-inner-icon="person" name="Username" label="Username" 
                                v-model="username"
                                :rules="[rules.username]"
                                clearable primary></v-text-field>
                                <v-text-field outline prepend-inner-icon="lock" name="Password" label="Password" type="password" 
                                :rules="[rules.validatePassword]"
                                v-model="password"
                                @keyup.enter="login"
                                autocomplete
                                primary></v-text-field>
                                <v-card-actions>
                                    <v-btn large depressed block dark color="primary" class="button" v-on:click="login()">Login</v-btn>
                                </v-card-actions>
                            </v-form>
                            </v-card-text>
                        </div>
                    </v-layout>
                </v-card>
            </v-container>
    </v-app>
</template>

<script>
export default {
    data(){
        return{
            snackbar: false,
            mode: '',
            timeout: 6000,
            text: 'Nombre de usuario y/o contraseña incorrecto.',
            defaultUsername: 'planty',
            defaultPassword: 'planty',
            username: '',
            password: '',
            rules:{
                username: value => !!value || 'Ingrese un nombre de usuario.'
                ,
                validatePassword: value => !!value || 'La contraseña no puede ser vacía.',
            }
        }
    },
    methods:{
        login(){
            if(this.username==this.defaultUsername){
                if(this.password==this.defaultPassword){
                    this.$router.replace('home')
                }
                else{
                    this.snackbar=true;
                }
            }
            else{
                this.snackbar=true;
            }
        }
    }
    
}
</script>

<style scoped>
    .titulo{
        font-family: 'Quicksand', Bold;
        color: #00c853;
        font-size: 500%;
    }
    .container {
        margin-top: -1%;
    }
    .borde {
        border-radius: 5px;
        padding-top: 10%;
        padding-bottom: 10%;
        padding-left: 25%;
        padding-right: 25%;
    }
    .button{
        border-radius: 5px;
    }
    .background {
        background-color: #EEEEEE;
    }
</style>