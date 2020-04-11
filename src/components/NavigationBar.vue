<template>
  <div>
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
        <router-link
            v-if="!inLogin()"
            to='/login'
            tag="v-btn"
        >
          <v-btn
              text
              color="blue-grey"
              class="ma-2 white--text"
          >
            Iniciar Sesión
          </v-btn>
        </router-link>
        <router-link
            v-if="!inJoin()"
            to='/join'
            tag="v-btn"
        >
          <v-btn
              text
              color="red darken-4"
              class="ma-2 white--text"
          >
            Registrarme
          </v-btn>
        </router-link>
      </div>
      <div v-else>
        <v-btn
            text
            color="red darken-4"
            class="ma-2 white--text"
            @click="goStatistics"
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
          <v-icon left dark>fas fa-user</v-icon>
          {{ this.humanizedUser() }}
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
                v-if="isLoggedIn()"
                @click="redirectToDev"
            >
              <v-list-item-title>
                DEV
              </v-list-item-title>
            </v-list-item>
            <v-list-item
                v-if="isLoggedIn()"
                @click="logout"
            >
              <v-list-item-title>
                Cerrar Sesión
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
        name: 'navigationBar',
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
                    this.logout();
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
            redirectToDev() {
                this.$router.push("/dev");
            },
            inLogin() {
                return this.$route.path === "/login"
            },
            inJoin() {
                return this.$route.path === "/join"
            },
            humanizedUser() {
                if (this.people === {}) {
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
    };
</script>
