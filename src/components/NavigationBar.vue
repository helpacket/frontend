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
        </v-app-bar>
    </div>
</template>


<script>
    export default {
        name: 'navigationBar',
    };
</script>
