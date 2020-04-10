<template>
    <v-container>
        <h2 class="title red--text text--darken-4 my-4">
            Historial de transacciones
        </h2>
        <v-data-table
                :headers="headers"
                :items="table_content"
                :items-per-page="5"
        >
            <template v-slot:item.icon="{ item }">
                <v-icon v-if="item.icon === 'request'" right dark color="red">fas fa-long-arrow-alt-left</v-icon>
                <v-icon v-else right dark color="green">fas fa-long-arrow-alt-right</v-icon>
            </template>
            <template v-slot:item.status="{ item }">
                <v-chip :color="STATUS_COLOR[item.status]" dark>{{ STATUS_TEXT[item.status] }}</v-chip>
            </template>
        </v-data-table>
    </v-container>
</template>

<script>
    import {gql} from "apollo-boost";

    export default {
        name: "TransactionHistory",
        data () {
            return {
                headers: [
                    { text: '', value: 'icon', align: 'center', sortable: false, },
                    { text: 'Producto', value: 'product_name', align: 'center', sortable: false, },
                    { text: 'Cantidad', value: 'amount', align: 'center', sortable: false, },
                    { text: 'Fecha', value:'date', align: 'center',},
                    { text: 'Estado', value:'status', align: 'center',}
                ],
                data: '',
                STATUS_COLOR: {
                    'A_0': 'red',
                    'A_1': 'orange',
                    'A_2': 'green',
                },
                STATUS_TEXT: {
                    'A_0': 'Pendiente',
                    'A_1': 'Asignado',
                    'A_2': 'Enviado',
                }
            }
        },
        apollo: {
            data: {
                query: gql`
                    {
                        supplies {
                            edges{
                                node{
                                    id,
                                    amount,
                                    creationDatetime,
                                    product{
                                        id,
                                        name
                                    },
                                    status
                                }
                            }
                        },
                        requests {
                            edges{
                                node{
                                    id,
                                    amount,
                                    creationDatetime,
                                    product{
                                        id,
                                        name
                                    },
                                    status
                                }
                            }
                        }
                    }
                  `,
                result(data) {
                    this.data = data["data"]
                }
            }
        },
        computed: {
            table_content: function () {
                let history = []
                let history_object

                if( this.data["requests"] === undefined){
                    return
                }

                window.console.log("Building table content...")

                for (const value of this.data.requests.edges.values()) {
                    window.console.log(typeof value.node.creationDatetime)

                    history_object = {
                        "icon": "request",
                        "id": value.node.id,
                        "amount": value.node.amount,
                        "product_name": value.node.product.name,
                        "date": this.format_date(value.node.creationDatetime),
                        "status": value.node.status
                    }
                    history.push(history_object)
                }

                for (const value of this.data.supplies.edges.values()) {
                    history_object = {
                        "icon": 'supply',
                        "id": value.node.id,
                        "amount": value.node.amount,
                        "product_name": value.node.product.name,
                        "date": this.format_date(value.node.creationDatetime),
                        "status": value.node.status
                    }
                    history.push(history_object)
                }

                window.console.log("Built table content successfully.")

                return history
            }
        },
        methods: {
            format_date: function (str_datetime) {
                let date = new Date(str_datetime)
                return date.toLocaleString("es-ES", {year:'numeric', month:'2-digit', day:'2-digit'})
            }
        }
    }
</script>

<style scoped>

</style>