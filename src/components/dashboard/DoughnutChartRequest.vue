<template>
    <v-card>
        <v-card-title>
            Demanda satisfecha
        </v-card-title>
        <v-card-text>
            <DonutChartSupply :height=200></DonutChartSupply>
        </v-card-text>
    </v-card>
</template>

<script>
    import DonutChartSupply from "../charts/DonutChartSupply";

    export default {
        name: "DoughnutChartExample",
        components: { DonutChartSupply }
    }
</script>

<style scoped>

</style>