<template>
    <v-container>
        <v-row>
            <v-col align="center">
                <h1>Development View</h1>
            </v-col>
        </v-row>
        {{ this.bands }}
    </v-container>
</template>

<script>
    import {gql} from "apollo-boost";

    const BANDS_QUERY = gql`
        query myQuery {
            bands {
                edges {
                    node {
                        name
                    }
                }
            }
        }
    `;

    export default {
        name: "Dev",
        data: () => ({
                bands: {}
            }
        ),
        apollo: {
            bands: {
                query: BANDS_QUERY,
            }
        },
    }
</script>

<style scoped>

</style>
