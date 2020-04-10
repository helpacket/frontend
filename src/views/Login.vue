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
                            <v-toolbar-title>Inicio de Sesión</v-toolbar-title>
                        </v-toolbar>
                        <v-card-text>

                            <v-text-field
                                @keyup.enter="submit"
                                label="Nombre de Usuario"
                                name="username"
                                type="text"
                                v-model="username"
                            />
                            <v-text-field
                                @keyup.enter="submit"
                                label="Contraseña"
                                name="password"
                                type="password"
                                v-model="password"
                            />
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer/>
                            <v-btn
                                v-on:click="submit"
                                color="red darken-4"
                                dark
                            >
                                Iniciar Sesión
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import {LOGIN_QUERY} from "../apis/constants";

    export default {
        name: "Login",
        data() {
            return {
                username: "",
                password: "",
            }
        },
        methods: {
            submit: function () {
                this.$apollo.mutate({
                    mutation: LOGIN_QUERY,
                    variables: {
                        username: this.username,
                        password: this.password,
                    },
                }).then((result) => {
                    let token = result.data.tokenAuth.token;
                    this.$store.commit("setToken", token)

                    let destination = this.$route.query.destination
                    if (destination === undefined) {
                        destination = '/dev';
                    }
                    this.$router.push(destination);
                });

            },
        }
    }
</script>

<style scoped>

</style>
