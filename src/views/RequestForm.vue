<template>
    <v-form>
        <v-container>
            <v-row>
                <h1>Aquí va un formulario to guapo</h1>
            </v-row>
            <v-row align="center">
                <v-col cols="6">
                    <v-select
                            v-model="e6"
                            :items="states"
                            menu-props="auto"
                            label="Select"
                            hide-details
                            single-line
                    ></v-select>
                </v-col>
                <v-col cols="6">
                    <v-select
                            v-model="e7"
                            :items="states"
                            menu-props="auto"
                            hide-details
                            label="Select"
                            single-line
                    ></v-select>
                </v-col>
            </v-row>
        </v-container>
    </v-form>
</template>

<script>
    export default {
        name: "RequestForm",
        data (){
            return {
                e6: [],
                e7: [],
                states: [
                    'Alabama', 'Alaska', 'American Samoa', 'Arizona',
                    'Arkansas', 'California', 'Colorado', 'Connecticut',
                    'Delaware', 'District of Columbia', 'Federated States of Micronesia',
                    'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
                    'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
                    'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
                    'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
                    'Missouri', 'Montana', 'Nebraska', 'Nevada',
                    'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
                    'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
                    'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
                    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
                    'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
                    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
                ],
            }
        }
    }
</script>

<style scoped>

</style>