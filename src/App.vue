<template>
    <v-app style="
  background: #EFEFEF;">
        <!-- background: #E0E0E;"> -->
        <link href="https://cdn.jsdelivr.net/npm/font-awesome@4.x/css/font-awesome.min.css" rel="stylesheet">

        <navigationBar/>

        <div style="padding: 48px 0px 0px;">
            <router-view></router-view>
        </div>

        <afooter/>

    </v-app>
</template>

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
