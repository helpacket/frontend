<template>
    <v-card height="100%">
        <v-card-title>
            Productos más solicitados
        </v-card-title>
        <v-card-text height="100%">
            <BarChart :height=200></BarChart>
        </v-card-text>
    </v-card>
</template>

<script>
    import BarChart from "../charts/BarChart";
    export default {
        name: "BarChartExample",
        components: { BarChart }
    }
</script>

<style scoped>

</style>