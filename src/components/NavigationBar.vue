<template>
  <v-app-bar dense light fixed>
    <v-btn
        text
        color="secondary"
        @click="goHome">
      <img class="logo" src="@/assets/icon_logo.png" alt="logo">
      <v-toolbar-title>
        {{this.titleMessage}}
      </v-toolbar-title>
    </v-btn>
    <v-spacer></v-spacer>
    <div v-if="!isLoggedIn()">
      <v-btn
          @click="goLogin"
          color="secondary"
          text
          v-if="!inLogin()"
          class="ma-2 white--text"
      >
        {{this.loginMessage}}
      </v-btn>
      <v-btn
          v-if="!inJoin()"
          @click="goJoin"
          text
          color="primary"
          class="ma-2 white--text"
      >
        {{this.joinMessage}}
      </v-btn>
    </div>
    <div v-else>
      <v-btn
          text
          color="primary"
          class="ma-2 white--text"
          @click="goNewSupply"
      >
        {{this.supplyMessage}}
        <v-icon right dark>fas fa-arrow-alt-circle-up</v-icon>
      </v-btn>
      <v-btn
          text
          color="secondary"
          class="ma-2 white--text"
          @click="goNewRequest"
      >
        {{this.requestMessage}}
        <v-icon right dark>fas fa-arrow-alt-circle-down</v-icon>
      </v-btn>
      <v-btn
          text
          color="secondary"
          class="ma-2 white--text"
          @click="goTransactions"
      >
        {{this.transactionsMessage}}
        <v-icon right dark>fas fa-history</v-icon>
      </v-btn>
      <v-btn
          text
          color="secondary"
          class="ma-2 white--text"
          @click="goStatistics"
      >
        {{this.analyticsMessage}}
        <v-icon right dark>fas fa-chart-pie</v-icon>
      </v-btn>
      <v-menu
          left
          bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn
              color="secondary"
              dark
              icon
              v-on="on"
          >
            <v-icon>fa-user-circle</v-icon>
          </v-btn>
        </template>

        <v-list
            color="secondary"
            dark
        >
          <v-list-item
              @click="goTransactions"
          >
            <v-list-item-title>
              <v-icon left>fas fa-user-circle</v-icon>
              {{ this.humanizedUser() }}
            </v-list-item-title>
          </v-list-item>
          <v-list-item
              @click="logout"
          >
            <v-list-item-title>
              <v-icon left>fas fa-sign-out-alt</v-icon>
              {{this.logOutMessage}}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </div>
  </v-app-bar>
</template>


<script>
    import {USER_QUERY} from "../apis/constants";

    export default {
        name: 'HelpacketToolbar',
        data() {
            return {
                titleMessage: "Helpacket",
                transactionsMessage: "Historial",
                analyticsMessage: "Analíticas",
                logOutMessage: "Cerrar Sessión",
                supplyMessage: "Ofrecer",
                requestMessage: "Solicitar",
                loginMessage: "Iniciar Sesión",
                joinMessage: "Registrarme",
                people: {}
            }
        },
        apollo: {
            people: {
                query: USER_QUERY,
                skip() {
                    return !this.isLoggedIn();
                },
                error() {
                    // TODO: Handle errors...
                }
            }
        },
        methods: {
            logout() {
                this.$store.commit("setToken", null)
                this.$router.push('/');
            },
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            },
            inLogin() {
                return this.$route.path === "/login"
            },
            inJoin() {
                return this.$route.path === "/join"
            },
            inNewRequest() {
                return this.$route.path === "/requests/new"
            },
            inNewSupply() {
                return this.$route.path === "/supplies/new"
            },
            inStatistics() {
                return this.$route.path === "/statistics"
            },
            inTransactions() {
                return this.$route.path === "/transactions"
            },
            humanizedUser() {
                if (this.people === undefined || this.people.edges === undefined) {
                    return "";
                }
                const user = this.people.edges[0].node;

                return `${user.firstName} ${user.lastName}`;
            },
            goHome: function () {
                if (this.isLoggedIn()) {
                    this.goTransactions()
                } else {
                    this.goLanding();
                }
            },
            goLanding: function () {
                if (this.$route.path !== '/') {
                    this.$router.push('/');
                }
            },
            goStatistics: function () {
                if (!this.inStatistics()) {
                    this.$router.push('/statistics');
                }
            },
            goNewRequest: function () {
                if (!this.inNewRequest()) {
                    this.$router.push('/requests/new');
                }
            },
            goNewSupply: function () {
                if (!this.inNewRequest()) {
                    this.$router.push('/supplies/new');
                }
            },
            goTransactions: function () {
                if (!this.inTransactions()) {
                    this.$router.push('/transactions');
                }
            },
            goLogin: function () {
                if (!this.inLogin()) {
                    this.$router.push('/login');
                }
            },
            goJoin: function () {
                if (!this.inJoin()) {
                    this.$router.push('/join');
                }
            },
        }
    };
</script>
