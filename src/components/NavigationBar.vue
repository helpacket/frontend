<template>
  <v-app-bar dense light fixed>
    <v-btn
        text
        color="blue-grey"
        @click="goHome">
      <img class="logo" src="@/assets/icon_logo.png" alt="logo">
      <v-toolbar-title>
        Helpacket
      </v-toolbar-title>
    </v-btn>

    <v-spacer></v-spacer>

    <div v-if="!isLoggedIn()">
      <v-btn
          @click="goLogin"
          color="blue-grey"
          text
          v-if="!inLogin()"
          class="ma-2 white--text"
      >
        Iniciar Sesión
      </v-btn>
      <v-btn
          v-if="!inJoin()"
          @click="goJoin"
          text
          color="red darken-4"
          class="ma-2 white--text"
      >
        Registrarme
      </v-btn>
    </div>
    <div v-else>
      <v-btn
          text
          color="red darken-4"
          class="ma-2 white--text"
          @click="goNewSupply"
      >
        Ofrecer
        <v-icon right dark>fas fa-arrow-alt-circle-up</v-icon>
      </v-btn>
      <v-btn
          text
          color="blue-grey"
          class="ma-2 white--text"
          @click="goNewRequest"
      >
        Solicitar
        <v-icon right dark>fas fa-arrow-alt-circle-down</v-icon>
      </v-btn>
      <v-btn
          text
          color="blue-grey"
          class="ma-2 white--text"
          @click="goTransactions"
      >
        Historial
        <v-icon right dark>fas fa-history</v-icon>
      </v-btn>
      <v-btn
              text
              color="blue-grey"
              class="ma-2 white--text"
              @click="goStatistics"
      >
        Analíticas
        <v-icon right dark>fas fa-chart-pie</v-icon>
      </v-btn>
      <v-menu
          left
          bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
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
              Cerrar Sesión
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
        data: () => ({
                people: {}
            }
        ),
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
