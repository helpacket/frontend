<template>
  <v-container justify="center">
    <v-row justify="center">
      <v-card width="90%" justify="center">
        <v-card-title class="pb-2">
          {{this.tableHeader}}
        </v-card-title>
        <v-card-text class="pb-2">
          <v-data-table
              :headers="headers"
              :items="table_content"
              :items-per-page="10"
          >
            <template v-slot:item.icon="{ item }">
              <v-icon v-if="item.icon === 'request'" right dark color="secondary">fas fa-arrow-alt-circle-down</v-icon>
              <v-icon v-else right dark color="primary">fas fa-arrow-alt-circle-up</v-icon>
            </template>
            <template v-slot:item.status="{ item }">
              <v-chip :color="STATUS_COLOR[item.status]" dark>{{ STATUS_TEXT[item.status] }}</v-chip>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
    import {TRANSACTION_QUERY} from "../apis/constants";

    export default {
        name: "TransactionHistory",
        data() {
            return {
                tableHeader: "Mi Historial de Transacciones",
                headers: [
                    {text: '', value: 'icon', align: 'center', sortable: false,},
                    {text: 'Producto', value: 'product_name', align: 'center', sortable: false,},
                    {text: 'Cantidad', value: 'amount', align: 'center', sortable: false,},
                    {text: 'Fecha', value: 'date', align: 'center',},
                    {text: 'Estado', value: 'status', align: 'center',}
                ],
                data: {},
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
                query: TRANSACTION_QUERY,
                result(result) {
                    if (result === undefined || !result.hasOwnProperty("data")) {
                        return
                    }
                    window.console.log(result)
                    this.data = result["data"]
                },
                error() {
                    // TODO: Handle errors...
                }
            }
        },
        computed: {
            table_content: function () {
                let history = []
                let history_object

                if (this.data === undefined) {
                    return
                }

                window.console.log("Building table content...")

                if (this.data["requests"] !== undefined) {
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

                }
                if (this.data["requests"] !== undefined) {
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
                }

                window.console.log("Built table content successfully.")

                return history
            }
        },
        methods: {
            format_date: function (str_datetime) {
                let date = new Date(str_datetime)
                return date.toLocaleString("es-ES", {
                    year: 'numeric', month: '2-digit', day: '2-digit'
                })
            }
        },
        mounted() {
            this.$apollo.queries.data.refetch()
        }
    }
</script>

<style scoped>

</style>