<template>
    <v-card>
        <v-card-title>
            Oferta satisfecha
        </v-card-title>
        <v-card-text>
            <DonutChartRequest :height=200></DonutChartRequest>
        </v-card-text>
    </v-card>
</template>

<script>
    import DonutChartRequest from "../charts/DonutChartRequest";

    export default {
        name: "DoughnutChartExample",
        components: { DonutChartRequest }
    }
</script>

<style scoped>

</style>