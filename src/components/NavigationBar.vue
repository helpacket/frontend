<template>
    <div>
        <v-app-bar dense light fixed>
            <router-link to="/" style="text-decoration: none; color:#FFFFFF;">
                <v-avatar :tile="true">
                    <img src="@/assets/text_logo.png" alt="logo">
                </v-avatar>
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
