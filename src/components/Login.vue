<template>
    <v-app class="background">
        <div class="container">
            <v-flex xs12 sm8 offset-sm2>
                <v-container style="position: relative;" class="text-xs-center">
                    <v-card max-height="auto" max-width="auto" class="borde">
                        <v-card-title>
                            <div>
                                <v-icon color="primary">local_florist</v-icon>
                                <span class="titulo"><strong>planty</strong></span>
                            </div>
                        </v-card-title>
                        <v-card-text>
                        <v-form>
                            <v-text-field outline prepend-inner-icon="person" name="Username" label="Username" clearable primary></v-text-field>
                            <v-text-field outline prepend-inner-icon="lock" name="Password" label="Password" type="password" primary></v-text-field>
                            <v-card-actions>
                                <v-btn large depressed block dark color="primary" to="/home" class="button">Login</v-btn>
                            </v-card-actions>
                        </v-form>
                        </v-card-text>
                    </v-card>
                </v-container>
            </v-flex>
        </div>
    </v-app>
</template>

<script>
export default {
    
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