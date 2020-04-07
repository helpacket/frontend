<template>
    <div>
        <v-img
                :src="this.concert.band.imageUrl"
                max-height="400"
        >
            <v-container bg fill-height grid-list-md text-xs-center>
                <v-layout row wrap align-center>
                    <v-flex>
                        <div class="text-center display-3 font-weight-black pb-5" style="color: white;">{{
                            this.concert.band.name }}
                        </div>
                        <!-- <div class="text-center headline font-weight-regular"  style="color: white;">Los mejores conciertos por todo Madrid</div> -->
                    </v-flex>
                </v-layout>
            </v-container>
        </v-img>

        <v-container fluid class="px-8">
            <v-row>
                <div class="subtitle-1 font-regular pt-5">{{ this.concert.band.description }}</div>
            </v-row>
            <!-- <v-row>
              <div class="subtitle-1 font-weight-medium pt-2">Iconos guapos pa pulsar y escuchar</div>
            </v-row> -->

            <v-row class="pt-6">
                <v-divider/>
            </v-row>

            <v-row>
                <v-col cols="12" sm="6">
                    <div class="headline font-weight-medium pt-5">{{ this.formated_datetime() }}</div>
                </v-col>
                <v-col cols="12" sm="6">
                    <div class="headline font-weight-medium pt-5 pb-5">Entrada {{ this.formated_cost() }}</div>
                </v-col>
            </v-row>

            <v-row>
                <v-divider/>
            </v-row>

            <v-row>
                <v-col cols="12" sm="6">
                    <div class="display-1 font-weight-black pt-5">{{ this.concert.bar.name }}</div>
                    <div class="subtitle-1 font-regular pt-5">{{ this.concert.bar.description }}</div>
                    <!-- <div class="subtitle-1 font-weight-medium pt-2 pb-6">Iconos guapos pa pulsar y escuchar</div> -->
                    <!-- <v-icon size="24px">fab fa-facebook</v-icon> -->
                </v-col>

                <v-col cols="12" sm="6">
                    <iframe :src="this.concert.bar.mapUrl" width="100%" height="100%" frameborder="0" style="border:0;"
                            allowfullscreen></iframe>
                </v-col>
            </v-row>
        </v-container>

    </div>
</template>

<script>
    import {gql} from 'apollo-boost';

    export default {
        props: ['id'],
        components: {},
        data: () => ({
                concert: {}
            }
        ),
        apollo: {
            concert: {
                query: gql`
      query myQuery ($concert_id: Int!) {
        concert (id: $concert_id ){
          cost,
          startDatetime,
          bar {
            name,
            description,
            mapUrl
          },
          band {
            name,
            description,
            imageUrl
          }
        }
      }
      `,
                variables() {
                    return {
                        concert_id: this.id,
                    }
                }
            }
        },
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
                return start_date.toLocaleString("es-ES", {month: 'long', day: 'numeric'}) +
                    " a las " + start_date.toLocaleString("es-ES", {
                        timeZone: 'UTC',
                        hour: 'numeric',
                        minute: '2-digit'
                    })
            }
        }
    }
</script>
