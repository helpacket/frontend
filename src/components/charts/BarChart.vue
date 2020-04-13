<script>
    import { Bar } from 'vue-chartjs'

    export default {
        extends: Bar,
        name: "LineChart",
        mounted () {
            this.renderChart(this.data, this.options)
        },
        data () {
            return {
                data: {
                    labels: ['Mascarillas', 'Pantallas', 'Batas', 'Guantes', 'Respiradores'],
                    datasets: [{
                        data: [12, 19, 3, 5, 2],
                        label: '',
                        backgroundColor: [
                            'rgba(68, 114, 105, 0.5)',
                            'rgba(68, 114, 105, 0.5)',
                            'rgba(68, 114, 105, 0.5)',
                            'rgba(68, 114, 105, 0.5)',
                            'rgba(68, 114, 105, 0.5)',
                        ],
                        borderColor: [
                            'rgba(68, 114, 105, 1)',
                            'rgba(68, 114, 105, 1)',
                            'rgba(68, 114, 105, 1)',
                            'rgba(68, 114, 105, 1)',
                            'rgba(68, 114, 105, 1)',
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    legend: {
                        display: false
                    },
                    tooltips: {
                        callbacks: {
                            label: function(tooltipItem) {
                                return tooltipItem.yLabel;
                            }
                        }
                    },
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                display: false
                            }
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