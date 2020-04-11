<template>
  <v-container justify="center">
    <v-row>
      <v-col align="center">
        <v-img src="@/assets/main_logo.png" height="400px" width="400px"></v-img>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="center">
        <div class="text-center headline font-weight-regular pb-5">
          {{this.descriptionMessage}}
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col align="right">
        <v-btn
            color="red darken-4"
            class="ma-2 white--text"
            @click="addSupply"
        >
          {{this.offerMessage}}
          <v-icon right dark>fas fa-arrow-alt-circle-up</v-icon>
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
            align="left"
            color="blue-grey"
            class="ma-2 white--text"
            @click="addRequest"
        >
          {{this.requestMessage}}
          <v-icon right dark>fas fa-arrow-alt-circle-down</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                descriptionMessage: "Plataforma colaborativa contra el coronavirus",
                offerMessage: "Doy mascarillas",
                requestMessage: "Quiero mascarillas",
            }
        },
        methods: {
            addSupply: function () {
                this.$router.push('/statistics');
            },
            addRequest: function () {
                this.$router.push('/requests/new');
            },
        }
    };
</script>

<style scoped>

</style>
