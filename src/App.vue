<template>
    <v-app id="page-container">
        <navigationBar/>

        <div id="content-wrap">
            <router-view></router-view>
        </div>

        <afooter id="footer"/>

    </v-app>
</template>

<style>
    @import './assets/app.css';
    @import "https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css";
</style>

<script>
    import navigationBar from './components/NavigationBar';
    import afooter from './components/Footer';

    export default {
        name: 'App',

        components: {
            navigationBar,
            afooter,
        },
        computed: {
            username() {
                return this.$route.params.username
            }
        },
        methods: {
            goBack() {
                window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
            }
        }
    };
</script>
