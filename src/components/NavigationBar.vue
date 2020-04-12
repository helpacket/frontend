<template>
  <div>
    <v-navigation-drawer
        v-if="isLoggedIn()"
        v-model="this.drawer"
        clipped app
    >
      <v-list>
        <v-list-item
            @click="goNewSupply"
        >
          <v-list-item-action>
            <v-icon
                color="primary"
            >
              fas fa-arrow-alt-circle-up
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="primary--text">
              {{this.supplyMessage}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            @click="goNewRequest"
        >
          <v-list-item-action>
            <v-icon
                color="secondary"
            >
              fas fa-arrow-alt-circle-down
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="secondary--text">
              {{this.requestMessage}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            @click="goTransactions"
        >
          <v-list-item-action>
            <v-icon
                color="secondary"
            >
              fas fa-history
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="secondary--text">
              {{this.transactionsMessage}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            @click="goStatistics"
        >
          <v-list-item-action>
            <v-icon
                color="secondary"
            >
              fas fa-chart-pie
            </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="secondary--text">
              {{this.analyticsMessage}}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        app
        dense
        fixed
        clipped-left
        class="elevation-1"
    >
      <v-app-bar-nav-icon
          v-if="isLoggedIn()"
          @click="toggleDrawer"/>

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
            class="ma-2 hidden-xs-only"
        >
          {{this.loginMessage}}
        </v-btn>
        <v-btn
            @click="goJoin"
            text
            color="primary"
            class="ma-2 hidden-xs-only"
        >
          {{this.joinMessage}}
        </v-btn>
        <div>

        </div>
        <v-menu
            left
            bottom
        >
          <template v-slot:activator="{ on }">
            <v-btn
                class="hidden-sm-and-up"
                color="secondary"
                dark
                icon
                v-on="on"
            >
              <v-icon
              >
                fas fa-ellipsis-v
              </v-icon>
            </v-btn>
          </template>

          <v-list
              color="secondary"
              dark
          >
            <v-list-item
                @click="goLogin"
            >
              <v-list-item-title>
                {{this.loginMessage}}
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                @click="goJoin"
            >
              <v-list-item-title>
                {{this.joinMessage}}
              </v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div v-else>
        <v-btn
            @click="goHome"
            text
            color="secondary"
            class="ma-2 hidden-sm-and-down"
        >
          <v-icon left>fas fa-user-circle</v-icon>
            {{ this.humanizedUser() }}
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
              <v-icon>fas fa-ellipsis-v</v-icon>
            </v-btn>
          </template>

          <v-list
              color="secondary"
              dark
          >
            <v-list-item
                @click="goHome"
                class="hidden-md-and-up"
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
  </div>
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
                logOutMessage: "Cerrar Sesión",
                supplyMessage: "Ofrecer",
                requestMessage: "Solicitar",
                loginMessage: "Iniciar Sesión",
                joinMessage: "Registrarme",
                people: {},
                drawer: false,
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
                if (!this.inNewSupply()) {
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
            toggleDrawer(){
                this.drawer = !this.drawer;
            }
        }
    };
</script>
