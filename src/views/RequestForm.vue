<template>
  <v-container justify="center">
    <v-row justify="center">
      <v-card width="600" justify="center">
        <v-card-title class="pb-2">
          Crear solicitud de material
        </v-card-title>
        <v-card-text class="pb-2">
          <v-select
              v-model="request.productId"
              :items="processedProducts"
              menu-props="auto"
              label="Producto"
              hide-details
              class="mp-2"
          ></v-select>
          <v-text-field
              v-model="request.amount"
              type="number"
              label="Cantidad"
              @keyup.enter="submit"
              single-line
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn justify="right" color="white--text red darken-4" @click="submit">Crear</v-btn>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
    import {CREATE_REQUEST, PRODUCT_QUERY} from "../apis/constants";

    export default {
        name: "RequestForm",
        data() {
            return {
                request: {},
                products: {},
            }
        },
        apollo: {
            products: {
                query: PRODUCT_QUERY,
                error() {
                    // TODO: Handle errors...
                }
            }
        },
        computed: {
            processedProducts() {
                if (this.products === undefined || this.products.edges === undefined) {
                    return
                }
                let result = []
                for (const product of this.products.edges.values()) {
                    result.push(
                        {
                            "text": product.node.name,
                            "value": product.node.id
                        }
                    )
                }
                return result
            }
        },
        methods: {
            submit: function () {
                this.$apollo.mutate({
                    mutation: CREATE_REQUEST,
                    variables: {
                        input: this.request
                    },
                }).then(() => {
                    this.$router.push('/transactions');
                });

            },
            refreshProducts: function () {
            }
        },
        mounted() {
            this.$apollo.queries.products.refetch();
        }
    }
</script>

<style scoped>

</style>