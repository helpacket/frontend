<template>
  <v-container
      class="fill-height"
      fluid
  >
    <v-row
        align="center"
        justify="center"
    >
      <v-col
          cols="12"
          sm="8"
          md="4"
      >
        <v-card class="elevation-12">
          <v-form>
            <v-toolbar
                color="secondary"
                dark
                flat
            >
              <v-toolbar-title>Página no Encontrada</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              La página a la que se está intentando acceder no existe.
            </v-card-text>
            <v-card-actions>
              <v-spacer/>
              <v-btn
                  color="primary"
                  @click="goHome"
                  dark
              >
                <v-icon left dark>fas fa-home</v-icon>
                Ir al Inicio
              </v-btn>
              <v-spacer/>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "NotFound",
        methods: {
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            },
            goHome: function () {
                if (this.isLoggedIn()) {
                    this.goTransactions()
                } else {
                    this.goLanding();
                }
            },
            goLanding: function () {
                this.$router.push('/');
            },
            goStatistics: function () {
                this.$router.push('/statistics');
            },
            goNewRequest: function () {
                this.$router.push('/requests/new');
            },
            goTransactions: function () {
                this.$router.push('/transactions');
            },
        }
    }
</script>

<style scoped>

</style>
