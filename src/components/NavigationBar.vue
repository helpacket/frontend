<template>
    <div>
        <v-app-bar color="black" dense dark fixed>
            <router-link to="/" style="text-decoration: none; color:#FFFFFF;">
                <v-toolbar-title class="text-center font-weight-black">Conciertos Madrid</v-toolbar-title>
            </router-link>

            <v-spacer></v-spacer>
        </v-app-bar>
    </div>
</template>


<script>
    export default {
        name: 'navigationBar',
    };
</script>
