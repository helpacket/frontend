<template>
  <v-container justify="center">
    <v-row justify="center">
      <v-col
          cols="12"
          sm="8"
          md="6"
      >
      <v-card justify="center">
        <v-card-title class="pb-2">
          ¿Qué productos deseas solicitar?
        </v-card-title>
        <v-card-text class="pb-2">
          <v-form ref="form">
            <v-select
                v-model="request.productId"
                :items="processedProducts"
                menu-props="auto"
                label="Producto"
                hide-details
                class="mp-2"
                :rules="productRules"
            ></v-select>
            <v-text-field
                v-model="request.amount"
                type="number"
                label="Cantidad"
                @keyup.enter="submit"
                single-line
                :rules="numberRules"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn justify="right" color="white--text primary" @click="submit">Solicitar</v-btn>
        </v-card-actions>
      </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import {CREATE_REQUEST, PRODUCT_QUERY} from "../apis/constants";

    export default {
        name: "NewRequest",
        data() {
            return {
                request: {},
                products: {},
                productRules: [
                  value => !!value || "Es obligatorio seleccionar un producto."
                ],
                numberRules: [
                  value => !!value || "Es obligatorio añadir la cantidad."
                ]
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
                if(!this.$refs.form.validate())
                  return

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