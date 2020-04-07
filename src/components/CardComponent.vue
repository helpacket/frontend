<template>

    <v-card class="mx-auto" max-width="400" @click.native="go_to_concert_info()">
        <v-img class="white--text align-end" height="200px" :src="concert.band.imageUrl">
            <v-card-title>{{ concert.band.name }}</v-card-title>
        </v-img>
        <v-card-subtitle class="pb-2">{{ this.formated_datetime() }}</v-card-subtitle>
        <v-card-text class="text--primary pb-0">
            <div>{{ concert.bar.name }}</div>
            <div>
                <v-icon small>fas fa-ticket-alt</v-icon>
                {{ this.formated_cost() }}
            </div>
        </v-card-text>

        <v-card-actions>
            <router-link
                    :to="'/concert/' + concert.id"
                    tag="v-btn"
            >
                <v-btn
                        color="orange"
                        text
                >
                    <span>detalles</span>
                </v-btn>
            </router-link>
            <!-- <v-btn color="orange" text>cómo llegar</v-btn> -->
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: 'cardComponent',
        props: ['concert'],
        methods: {
            formated_cost: function () {
                if (this.concert.cost == 0) {
                    return " GRATIS"
                } else {
                    return this.concert.cost + "€"
                }
            },
            formated_datetime: function () {
                var start_date = new Date(this.concert.startDatetime)
                return start_date.toLocaleString("es-ES", {weekday: 'long', month: 'short', day: 'numeric'}) +
                    " | " + start_date.toLocaleString("es-ES", {timeZone: 'UTC', hour: 'numeric', minute: '2-digit'})
            },
            go_to_concert_info: function () {
                this.$router.push({path: `/concert/${this.concert.id}`})
            }
        }

    };
</script>
