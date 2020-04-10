<template>
  <div>
    <v-app-bar dense light fixed>
      <router-link to="/">
        <v-avatar>
          <img src="@/assets/icon_logo.png" alt="logo">
        </v-avatar>
      </router-link>

      <v-toolbar-title>Helpacket</v-toolbar-title>

      <v-spacer></v-spacer>

      <div v-if="!isLoggedIn()">
        <router-link
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
          <router-link
              to='/registered'
              tag="v-btn"
          >
            <v-list-item>
              <v-list-item-title>
                DEV
              </v-list-item-title>
            </v-list-item>
          </router-link>
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
    </v-app-bar>
  </div>
</template>


<script>
    export default {
        name: 'navigationBar',
        methods: {
            logout() {
                this.$store.commit("setToken", null)
                this.$router.push('/');
            },
            isLoggedIn() {
                return this.$store.getters.isLoggedIn;
            }
        }
    };
</script>
