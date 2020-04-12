<template>
    <v-app id="page-container">
        <HelpacketToolbar/>

        <v-content>
            <div id="content-wrap">
                <router-view></router-view>
            </div>
            <HelpacketFooter id="footer"/>
        </v-content>
    </v-app>
</template>

<style>
    @import './assets/app.css';
    @import "https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css";
</style>

<script>
    import HelpacketToolbar from './components/NavigationBar';
    import HelpacketFooter from './components/Footer';

    export default {
        name: 'App',
        components: {
            HelpacketToolbar,
            HelpacketFooter,
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
