<template>
    <v-card>
        <v-card-title>
            Necesidades en Madrid
        </v-card-title>
        <v-card-text>
            <div>
                <GChart
                        type="GeoChart"
                        :data="chartData"
                        :options="chartOptions"
                />
            </div>
        </v-card-text>
        <v-card-actions>
            <v-btn justify="right" color="white--text red darken-4" @click="addSupply">Añadir donación</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "MapChartExample",
        data () {
            return {
                // Array will be automatically processed with visualization.arrayToDataTable function
                chartData: [
                    ['Country', 'Popularity'],
                    [{f:'Islas Baleares', v:'ES-IB'},5],
                    [{f:'Madrid', v:'ES-MD'},3],
                    [{f:'Navarra', v:'ES-NC'},1],
                    [{f:'Asturias', v:'ES-AS'},2],
                    [{f:'Cantabria', v:'ES-CB'},1],
                    [{f:'Andalucía', v:'ES-AN'},80],
                    [{f:'Castilla-La Mancha', v:'ES-CM'},-3],
                    [{f:'Castilla y León', v:'ES-CL'},8],
                    [{f:'Cataluña', v:'ES-CT'},1],
                    [{f:'Galicia', v:'ES-GA'},2]
                ],
                chartOptions: {
                    region: 'ES',
                    resolution: 'provinces',
                    displayMode: 'regions'
                }
            }
        }
    }
</script>

<style scoped>

</style>