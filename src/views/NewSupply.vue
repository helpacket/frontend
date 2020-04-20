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
            ¿Qué productos deseas ofrecer?
          </v-card-title>
          <v-card-text class="pb-2">
            <v-form ref="form">
              <v-select
                  label="Producto"
                  v-model="supply.productId"
                  :items="processedProducts"
                  menu-props="auto"
                  @click="refreshProducts"
                  hide-details
                  class="mp-2"
                  :rules="productRules"
              ></v-select>
              <v-text-field
                  label="Cantidad"
                  v-model="supply.amount"
                  type="number"
                  @keyup.enter="submit"
                  single-line
                  :rules="numberRules"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-btn justify="right" color="white--text primary" @click="submit">Ofrecer</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    import {CREATE_SUPPLY, PRODUCT_QUERY} from "../apis/constants";

    export default {
        name: "NewSupply",
        data() {
            return {
                supply: {},
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
            submit() {
              if(!this.$refs.form.validate())
                return

              this.$apollo.mutate({
                  mutation: CREATE_SUPPLY,
                  variables: {
                      input: this.supply
                  },
              }).then(() => {
                this.$router.push('/transactions')
              }).catch(() => {
                window.console.log("ERROOOOR")
              });
            },
            refreshProducts() {
                this.$apollo.queries.products.refetch();
            }
        },
        mounted() {
            this.refreshProducts()
        }
    }
</script>

<style scoped>

</style>