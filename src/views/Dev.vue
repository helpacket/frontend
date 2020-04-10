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
    import {BANDS_QUERY} from "../apis/constants";

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
