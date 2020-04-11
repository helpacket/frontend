<template>
    <v-container justify="center">
        <v-row justify="center">
            <v-card width="90%" justify="center">
                <v-card-title class="pb-2">
                    Necesidades en Madrid
                </v-card-title>
                <v-card-text class="pb-2">
                    Aquí graficas
                </v-card-text>
                <v-card-actions>
                    <v-btn justify="right" color="white--text red darken-4" @click="addSupply">Añadir donación</v-btn>
                </v-card-actions>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>
    export default {
        name: "Statistics",
        methods: {
            addSupply: function () {
                this.$router.push('/supply_form');
            },
        }
    }
</script>

<style scoped>

</style>