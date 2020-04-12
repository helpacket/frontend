<template>
    <v-card>
        <v-card-title>
            Oferta y Demanda
        </v-card-title>
        <v-card-text>
            <LineChart :height=200></LineChart>
        </v-card-text>
    </v-card>
</template>

<script>
    import LineChart from "../charts/LineChart";

    export default {
        name: "LineChartExample",
        components: { LineChart }
    }
</script>

<style>
</style>
