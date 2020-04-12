<script>
    import { Line } from 'vue-chartjs'

    export default {
        extends: Line,
        name: "LineChart",
        mounted () {
            this.renderChart(this.data, this.options)
        },
        data () {
            return {
                data: {
                    labels: ['Octubre', 'Noviembre', 'Diciembre', 'Enero', 'Febrero', 'Marzo', 'Abril'],
                    datasets: [
                        {
                            label: 'Demanda',
                            backgroundColor: 'rgba(68, 114, 105, 0.2)',
                            borderColor: 'rgba(68, 114, 105, 1)',
                            data: [ 10, 9, 11, 20, 12, 5, 9],
                        },
                        {
                            label: 'Oferta',
                            backgroundColor: 'rgba(177, 0, 45, 0.2)',
                            borderColor: 'rgba(177, 0, 45, 1)',
                            data: [ 0, .5, 2, 4, 8, 16, 32 ],
                        }
                    ]
                },
                options:  {
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                    display: false
                                },
                            }]
                    },
                    responsive: true,
                    maintainAspectRatio: false
                }
            }
        }
    }
</script>

<style scoped>

</style>