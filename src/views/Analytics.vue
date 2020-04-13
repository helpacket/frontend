<template>
    <v-container justify="center" dense fluid>
        <v-row dense align="stretch">
            <v-col md="8" sm="12">
                <LineChartExample></LineChartExample>
            </v-col>
            <v-col md="4" sm="12">
                <BarChartExample></BarChartExample>
            </v-col>
        </v-row>
        <v-row dense align="stretch">
            <v-col md="3" sm="12">
                <DoughnutChartRequest></DoughnutChartRequest>
            </v-col>
            <v-col md="3" sm="12">
                <DoughnutChartSupply></DoughnutChartSupply>
            </v-col>
            <v-col md="3" sm="12">
                <PercentajeExampleRed></PercentajeExampleRed>
            </v-col>
            <v-col md="3" sm="12">
                <PercentajeExample></PercentajeExample>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import LineChartExample from "../components/dashboard/LineChartExample";
    import BarChartExample from "../components/dashboard/BarChartExample";
    import DoughnutChartSupply from "../components/dashboard/DoughnutChartSupply";
    import DoughnutChartRequest from "../components/dashboard/DoughnutChartRequest";
    import PercentajeExample from "../components/dashboard/PercentajeExample";
    import PercentajeExampleRed from "../components/dashboard/PercentajeExampleRed";

    export default {
        name: "Statistics",
        components: {PercentajeExample, BarChartExample, PercentajeExampleRed, LineChartExample, DoughnutChartSupply, DoughnutChartRequest},
        methods: {
            addSupply: function () {
                this.$router.push('/supplies/new');
            },
        }
    }
</script>

<style scoped>

</style>