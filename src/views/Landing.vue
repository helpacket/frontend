<template>
  <v-container justify="center">
    <div id="first-view">
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
              color="primary"
              class="ma-2 white--text"
              @click="addSupply"
          >
            {{this.supplyMessage}}
            <v-icon right dark>fas fa-arrow-alt-circle-up</v-icon>
          </v-btn>
        </v-col>
        <v-col>
          <v-btn
              align="left"
              color="secondary"
              class="ma-2 white--text"
              @click="addRequest"
          >
            {{this.requestMessage}}
            <v-icon right dark>fas fa-arrow-alt-circle-down</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </div>
    <div class="second-view">
      <v-row>
        <v-col>
          <h1>Explanation</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <img src="https://via.placeholder.com/480x360">
        </v-col>
        <v-col>
          <p class="text-justify">
            {{this.loremIpsumMessage}}
          </p>
          <p class="text-justify">
            {{this.loremIpsumMessage}}
          </p>
        </v-col>
      </v-row>
    </div>
    <div class="second-view">
      <v-row>
        <v-col>
          <h1>Explanation</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="text-justify">
            {{this.loremIpsumMessage}}
          </p>
          <p class="text-justify">
            {{this.loremIpsumMessage}}
          </p>
        </v-col>
        <v-col>
          <img src="https://via.placeholder.com/480x360">
        </v-col>
      </v-row>
    </div>
    <div class="second-view">
      <v-row>
        <v-col>
          <h1>Team</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <img src="https://via.placeholder.com/180">
        </v-col>
        <v-col>
          <img src="https://via.placeholder.com/180">
        </v-col>
        <v-col>
          <img src="https://via.placeholder.com/180">
        </v-col>
        <v-col>
          <img src="https://via.placeholder.com/180">
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <img src="https://via.placeholder.com/180">
        </v-col>
        <v-col>
          <img src="https://via.placeholder.com/180">
        </v-col>
        <v-col>
          <img src="https://via.placeholder.com/180">
        </v-col>
        <v-col>
          <img src="https://via.placeholder.com/180">
        </v-col>
      </v-row>
    </div>
    <div class="second-view">
      <v-row>
        <v-col>
          <h1>Contact</h1>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <p class="text-justify">
            {{this.loremIpsumMessage}}
          </p>
        </v-col>
        <v-col>
          <v-card>
            <v-card-text>
              <v-form>
                <v-text-field
                    label="Correo Electrónico"
                    name="username"
                    type="text"
                />
                <v-textarea
                    @keyup.enter="submit"
                    label="Message"
                />
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
    export default {
        name: "Landing",
        data() {
            return {
                descriptionMessage: "Plataforma colaborativa contra el coronavirus",
                supplyMessage: "Ofrecer",
                requestMessage: "Solicitar",
                loremIpsumMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        },
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
  #first-view {
    min-height: 90vh;
  }

  .second-view {
    min-height: 100vh;
  }

</style>
