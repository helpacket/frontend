<template>
    <v-container>
        <v-row>
            <v-col align="center">
                <h1>Aquí estás registrado</h1>
            </v-col>
        </v-row>
        {{ this.bands }}
    </v-container>
</template>

<script>
    import {gql} from "apollo-boost";

    export default {
        name: "Registered",
        data: () => ({
                bands: {}
            }
        ),
        apollo: {
            bands: {
                query: gql`
                    query myQuery {
                        bands {
                            edges {
                                node {
                                    name
                                }
                            }
                        }
                    }
                `,
            }
        },
    }
</script>

<style scoped>

</style>
