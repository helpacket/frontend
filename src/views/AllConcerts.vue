<template>
    <div>

        <div class="text-center display-3 font-weight-black pt-10 pb-5">Concieros Madrid</div>
        <div class="text-center headline font-weight-regular pb-5">Los mejores conciertos por todo Madrid</div>

        <div v-if="$apollo.loading">
            <v-container fluid class="px-5">
                <v-row>
                    <v-col md="3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-col>
                    <v-col md="3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-col>
                    <v-col md="3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-col>
                    <v-col md="3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-col>
                    <v-col md="3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-col>
                    <v-col md="3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-col>
                    <v-col md="3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-col>
                    <v-col md="3">
                        <v-skeleton-loader class="mx-auto" max-width="300" type="card"></v-skeleton-loader>
                    </v-col>
                </v-row>
            </v-container>
        </div>
        <div v-else>

            <v-container fluid class="px-5">
                <v-row>
                    <v-col v-for="concert in allConcerts" :key="concert.id" md="3">
                        <cardComponent :concert="concert"></cardComponent>
                    </v-col>
                </v-row>
            </v-container>

        </div>
    </div>
</template>


<script>
    import cardComponent from '../components/CardComponent';
    import {gql} from 'apollo-boost';


    export default {
        components: {
            cardComponent,
        },

        data: () => ({
                nome: '',
                allConcerts: {}
            }
        ),
        apollo: {
            allConcerts: {
                query: gql`
          {
            allConcerts{
              id,
              band {
                name,
                imageUrl
              },
              bar {
                name
              },
              cost,
              startDatetime
            }
          }
          `
            }
        }

    };
</script>
