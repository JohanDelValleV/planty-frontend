<template>
    <v-app class="background">
        <div class="container">
            <v-flex xs12 sm8 offset-sm2>
                <v-container style="position: relative;" class="text-xs-center">
                    <v-card max-height="auto" max-width="auto" class="borde">
                        <v-card-title>
                            <div>
                                <h3 class="headline mb-0">Login</h3>
                            </div>
                        </v-card-title>
                        <v-card-text>
                        <v-form>
                            <v-text-field outline prepend-inner-icon="person" name="Username" label="Username" clearable></v-text-field>
                            <v-text-field outline prepend-inner-icon="lock" name="Password" label="Password" type="password"></v-text-field>
                            <v-card-actions>
                                <v-btn primary large block>Login</v-btn>
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
    .container {
        margin-top: 5%;
    }
    .borde {
        border-radius: 5px;
    }
    .background {
        background-image: url(../assets/background.jpg);
    }
</style>