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
        <div class="container">
            <v-flex sm4 offset-sm4>
                <v-card class="card">
                    <v-layout>
                        <div class="container">
                            <div>
                                <v-icon color="primary" size="65px">local_florist</v-icon>
                                <span class="titulo"><strong>planty</strong></span>
                            </div>
                            <div>
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
        margin-top: 5%;
    }
    /* .borde {
        border-radius: 5px;
        padding-top: 10%;
        padding-bottom: 10%;
        padding-left: 25%;
        padding-right: 25%;
    } */
    .card {
        border: 1px solid #dfe1e5;
        border-radius: 8px;
        box-shadow: none;
    }
    .button{
        border-radius: 5px;
    }
    .background {
        background-color: #EEEEEE;
    }
</style>