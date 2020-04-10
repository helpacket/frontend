<template>
    <v-container
        class="fill-height"
        fluid
    >
        <v-row
            align="center"
            justify="center"
        >
            <v-col
                cols="12"
                sm="8"
                md="4"
            >
                <v-card class="elevation-12">
                    <v-form>
                        <v-toolbar
                            color="blue-grey"
                            dark
                            flat
                        >
                            <v-toolbar-title>Página no Encontrada</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>
                            La página a la que se está intentando acceder no existe.
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer/>
                            <router-link
                                to='/'
                                tag="v-btn"
                            >
                                <v-btn
                                    color="red darken-4"
                                    dark
                                >
                                    <v-icon left dark>fas fa-home</v-icon>
                                    Ir al Inicio
                                </v-btn>
                            </router-link>
                            <v-spacer/>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "NotFound",
    }
</script>

<style scoped>

</style>
