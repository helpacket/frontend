<template>
    <v-container justify="center" dense>
        <v-row dense justify="center" height="300">
<!--            <v-col cols="8">-->
<!--                <PruebaChartJs></PruebaChartJs>-->
<!--            </v-col>-->
<!--            <v-col cols="4">-->
<!--                <PruebaChart2></PruebaChart2>-->
<!--            </v-col>-->
<!--            <v-col cols="8">-->
<!--                <GeneralNeeds></GeneralNeeds>-->
<!--            </v-col>-->
        </v-row>
    </v-container>
</template>

<script>
    // import GeneralNeeds from "../components/dashboard/GeneralNeeds"
    // import PruebaChartJs from "../components/dashboard/PruebaChartJs";
    // import PruebaChart2 from "../components/dashboard/PruebaChart2";

    export default {
        name: "Statistics",
        // components: {PruebaChart2, PruebaChartJs, GeneralNeeds },
        methods: {
            addSupply: function () {
                this.$router.push('/supplies/new');
            },
        }
    }
</script>

<style scoped>

</style>