<template>
  <v-container justify="center">
    <div class="first-view">
      <v-row>
        <v-col
            sm="6"
            cols="10"
            offset="1"
            offset-sm="3"
        >
          <v-row>
            <v-col align="center">
              <v-img src="@/assets/main_logo.png" class="image-landing"></v-img>
            </v-col>
          </v-row>
          <v-row>
            <v-col align="center">
              <div class="text-center headline font-weight-regular pb-5">
                {{this.descriptionMessage}}
              </div>
            </v-col>
          </v-row>
          <v-row>
            <v-col
                sm="6"
                xs="12"
            >
              <v-btn
                  color="primary"
                  @click="addSupply"
                  block
              >
                {{this.supplyMessage}}
                <v-icon right dark>fas fa-arrow-alt-circle-up</v-icon>
              </v-btn>
            </v-col>
            <v-col
                sm="6"
                xs="12"
            >
              <v-btn
                  color="secondary"
                  @click="addRequest"
                  block
              >
                {{this.requestMessage}}
                <v-icon right dark>fas fa-arrow-alt-circle-down</v-icon>
              </v-btn>
            </v-col>
          </v-row>
          <v-row style="padding-top: 36px">
            <v-col
                offset-sm="3"
                sm="6"
            >
              <v-btn
                  color="grey"
                  @click="goMoreInfo"
                  block
                  class="white--text"

              >
                {{this.moreInfoMessage}}
                <v-icon right dark>fas fa-arrow-alt-circle-down</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <div id="information">

      <div class="second-view">
        <v-row>
          <v-col
              xs="12"
          >
            <h1>Analíticas de Demanda</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              sm="6"
              xs="12"
          >
            <v-img src="https://via.placeholder.com/480x360"></v-img>
          </v-col>
          <v-col
              sm="6"
              xs="12"
          >
            <p class="text-justify">
              {{this.loremIpsumMessage}}
            </p>
            <p class="text-justify">
              {{this.loremIpsumMessage}}
            </p>
            <v-row>
              <v-col
                  sm="6"
                  offset-sm="3"
              >

                <v-btn
                    align-center
                    block
                    color="primary"
                >
                  {{this.analyticsLinkMessage}}
                  <v-icon right dark>fas fa-chart-pie</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="second-view">
        <v-row>
          <v-col
              xs="12"
          >
            <h1>¿Qué es Helpacket?</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              sm="6"
              xs="12"
              order-sm="2"
          >
            <div class="video-container">

              <iframe
                  class="video"
                  :src="this.yotutubeVideoEmbed"
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
              ></iframe>
            </div>
          </v-col>
          <v-col
              sm="6"
              order-sm="1"
          >
            <p class="text-justify">
              {{this.loremIpsumMessage}}
            </p>
            <p class="text-justify">
              {{this.loremIpsumMessage}}
            </p>
            <v-row>
              <v-col
                  sm="6"
                  offset-sm="3"
              >

                <v-btn
                    align-center
                    block
                    color="primary"
                    :href="this.youtubeVideoLink"
                    target="_blank"
                >
                  {{this.videoLinkMessage}}
                  <v-icon right dark>fas fa-video</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="second-view">
        <v-row>
          <v-col
              xs="12"
          >
            <h1>¿Cómo puedes ayudar desde casa?</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              sm="6"
              xs="12"
          >
            <v-img src="https://via.placeholder.com/480x360"></v-img>
          </v-col>
          <v-col
              sm="6"
              xs="12"
          >
            <p class="text-justify">
              {{this.loremIpsumMessage}}
            </p>
            <p class="text-justify">
              {{this.loremIpsumMessage}}
            </p>
            <v-row>
              <v-col
                  sm="6"
                  offset-sm="3"
              >

                <v-btn
                    align-center
                    block
                    color="primary"
                >
                  {{this.helpFromHomeLinkMessage}}
                  <v-icon right dark>fas fa-tools</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </div>
      <div class="second-view">
        <v-row>
          <v-col
              xs="12"
          >
            <h1>¿Quiénes somos?</h1>
          </v-col>
        </v-row>
        <v-row>
          <p class="text-justify">
            {{this.loremIpsumMessage}}
          </p>
        </v-row>
        <v-row>
          <h2>Miembros del Equipo</h2>
        </v-row>
        <v-row>
          <v-col
              offset-sm="1"
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
          <v-col
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
          <v-col
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
          <v-col
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
          <v-col
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
        </v-row>
        <v-row>
          <v-col
              offset-sm="1"
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
          <v-col
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
          <v-col
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
          <v-col
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
          <v-col
              sm="2"
              xs="6"
          >
            <v-img src="https://via.placeholder.com/180"></v-img>
            Pepito Perez
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 style="padding-top: 36px;">Sanitarios colaboradores</h2>

            <p class="text-justify">
              Jose Antonio Carrillo: Doctor Residente en el Hospital Severo Ochoa de Leganés<br/>
              Paloma Sillero: Enfermera de urgencias en el Hospital Nuestra Señora de la Candelaria de Tenerife
            </p>
          </v-col>
        </v-row>
      </div>
      <div class="second-view">
        <v-row
            xs="12"
        >
          <v-col>
            <h1>Contacta con Nosotros</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              sm="6"
              xs="12"
          >
            <p class="text-justify">
              {{this.loremIpsumMessage}}
            </p>
            <p class="text-justify">
              {{this.loremIpsumMessage}}
            </p>
            <v-row>
              <v-col
                  sm="6"
                  offset-sm="3"
              >

                <v-btn
                    align-center
                    block
                    color="primary"
                    :href="this.emailHRef()"
                    target="_blank"
                >
                  {{this.contactWithUsLinkMessage}}
                  <v-icon right dark>fas fa-envelope</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-col>
          <v-col
              sm="6"
              xs="12"
          >
            <v-img src="https://via.placeholder.com/480x360"></v-img>
          </v-col>
        </v-row>
      </div>
    </div>
  </v-container>
</template>

<script>
    export default {
        name: "Landing",
        data() {
            return {
                descriptionMessage: "Plataforma colaborativa contra el coronavirus",
                analyticsLinkMessage: "Ver Analíticas",
                helpFromHomeLinkMessage: "Guía de Fabricación",
                contactWithUsLinkMessage: "Enviar Email",
                videoLinkMessage: "Ir al video",
                supplyMessage: "Ofrecer",
                requestMessage: "Solicitar",
                moreInfoMessage: "Más Información",
                loremIpsumMessage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                email: "helpacket@gmail.com",
                youtubeVideoLink: "https://www.youtube.com/watch?v=ifmzQbGpQZ0",
                yotutubeVideoEmbed: "https://www.youtube.com/embed/ifmzQbGpQZ0"
            }
        },
        methods: {
            addSupply: function () {
                this.$router.push('/supplies/new');
            },
            addRequest: function () {
                this.$router.push('/requests/new');
            },
            goMoreInfo() {
                const el = document.getElementById("information");
                if (el) {
                    let headerOffset = 48;
                    let elementPosition = el.getBoundingClientRect().top;
                    let offsetPosition = elementPosition - headerOffset;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            },
            emailHRef() {
                return "mailto:" + this.email;
            }
        }
    };
</script>

<style scoped>
  .first-view {
    min-height: 100vh;
  }

  .second-view {
    padding-bottom: 10vh;
  }
  .video-container {
    position: relative;
    width: 100%;
    padding-bottom: 56.25%;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;
  }

</style>
