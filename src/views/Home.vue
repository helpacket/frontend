<template>
  <v-container justify="center">
    <v-row>
      <v-col align="center">
        <v-img src="@/assets/main_logo.png" height="400px" width="400px"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <div class="text-center headline font-weight-regular pb-5">Plataforma colaborativa contra el coronavirus</div>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="right">
        <v-btn
            color="primary"
            class="ma-2 white--text"
            @click="addSupply"
            x-large
        >
          OFRECER
          <v-icon right dark>fas fa-arrow-alt-circle-up</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
            align="left"
            color="secondary"
            class="ma-2 white--text"
            @click="addRequest"
            x-large
        >
          SOLICITAR
          <v-icon right dark>fas fa-arrow-alt-circle-down</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "Home",
        methods: {
            addSupply: function () {
                this.$router.push('/supplies/new');
            },
            addRequest: function () {
                this.$router.push('/requests/new');
            },
        }
    };
</script>

<style scoped>

</style>
