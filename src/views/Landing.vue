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
                md="6"
                xs="12"
            >
              <v-btn
                  color="primary"
                  @click="goNewSupply"
                  block
              >
                {{this.supplyMessage}}
                <v-icon right dark>fas fa-arrow-alt-circle-up</v-icon>
              </v-btn>
            </v-col>
            <v-col
                md="6"
                xs="12"
            >
              <v-btn
                  color="secondary"
                  @click="goNewRequest"
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
                  v-if="withMoreInfo"
                  color="grey"
                  @click="goMoreInfo"
                  block
                  class="white--text"
              >
                {{this.moreInfoMessage}}
                <v-icon right dark>fas fa-info-circle</v-icon>
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
            <h1>{{this.whatIsHeader}}</h1>
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
                  :src="this.youtubeVideoEmbed"
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
            <p class="text-justify" v-for="row in this.whatIsMessage" :key="row">
              {{row}}
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
                  <v-icon right dark>fab fa-youtube</v-icon>
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
            <h1>{{this.analyticsHeader}}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              sm="6"
              xs="12"
          >
            <v-img :src="analyticsImageUrl"></v-img>
          </v-col>
          <v-col
              sm="6"
              xs="12"
          >
            <p class="text-justify" v-for="row in this.analyticsMessage" :key="row">
              {{row}}
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
                    @click="goAnalytics"
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
            <h1>{{this.algorithmHeader}}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              cols="12"
              sm="6"
              xs="12"
              order-sm="2"
          >
            <v-img :src="this.algorithmImageUrl"></v-img>
          </v-col>
          <v-col
              sm="6"
              order-sm="1"
          >
            <p class="text-justify" v-for="row in this.algorithmMessage" :key="row">
              {{row}}
            </p>
          </v-col>
        </v-row>
      </div>
      <div class="second-view">
        <v-row>
          <v-col
              xs="12"
          >
            <h1>{{this.helpFromHomeHeader}}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              sm="6"
              xs="12"
          >
            <v-img :src="helpFromHomeImageUrl"></v-img>
          </v-col>
          <v-col
              sm="6"
              xs="12"
          >
            <p class="text-justify" v-for="row in this.helpFromHomeMessage" :key="row">
              {{row}}
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
            <h1>{{this.aboutUsHeader}}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <p class="text-justify" v-for="row in this.aboutUsMessage" :key="row">
              {{row}}
            </p>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2>{{this.aboutUsTeamSubHeader}}</h2>
          </v-col>
        </v-row>
        <v-row justify="center">
          <v-col
              v-for="(item, index) in this.team" v-bind:key="index"
              md="3"
              sm="4"
              cols="6"
              class="d-flex flex-column"
          >
            <v-card class="flex flex-column">
              <v-img class="white--text align-end"
                     gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                     height="200px"
                     :src="item.imageUrl"
              ></v-img>

              <v-card-title>{{item.name}}</v-card-title>
              <v-card-subtitle>{{item.position}}</v-card-subtitle>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <h2 style="padding-top: 36px; padding-bottom: 12px;">{{this.aboutUsColabSubHeader}}</h2>
            <ul>
              <li v-for="row in this.aboutUsColabMessage" :key="row">
                {{row}}
              </li>
            </ul>
          </v-col>
        </v-row>
      </div>
      <div class="second-view">
        <v-row
            xs="12"
        >
          <v-col>
            <h1>{{this.contactHeader}}</h1>
          </v-col>
        </v-row>
        <v-row>
          <v-col
              sm="6"
              order-sm="2"
          >
            <v-img :src="contactImageUrl"></v-img>
          </v-col>
          <v-col
              cols="12"
              sm="6"
              xs="12"
              order-sm="1"
          >
            <p class="text-justify" v-for="row in this.contactMessage" :key="row">
              {{row}}
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
                  {{this.email}}
                  <v-icon right dark>fas fa-envelope</v-icon>
                </v-btn>
              </v-col>
            </v-row>
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
                videoLinkMessage: "Ir al video",
                supplyMessage: "Ofrecer material",
                requestMessage: "Solicitar material",
                moreInfoMessage: "Más Información",
                withMoreInfo: true,
                email: "helpacket@gmail.com",
                youtubeVideoLink: "https://www.youtube.com/watch?v=ifmzQbGpQZ0",
                youtubeVideoEmbed: "https://www.youtube.com/embed/ifmzQbGpQZ0",
                analyticsHeader: "Análisis de Demanda",
                analyticsImageUrl: require("@/assets/landing/analytics.png"),
                analyticsMessage: [
                    "Aquí puedes ver los productos más necesarios en cada momento, así podrás planificar tu producción en función a las necesidades actuales.",
                    "Estos datos los podemos analizar gracias a tener la demanda centralizada de Hospitales, residencias y grupos más desfavorecidos que piden el material a través de nuestra plataforma."
                ],
                algorithmHeader: "Priorizamos la Urgencia",
                algorithmMessage: [
                    "Optimizamos la gestión de los materiales para asegurarnos de que lleguen donde más se necesita. Con la colaboración conjunta de los organismos competentes, informáticos y expertos en logística, automatizamos la asignación de materiales según las necesidades de los solicitantes.",
                ],
                algorithmImageUrl: require("@/assets/landing/algorithm.png"),
                whatIsHeader: "¿Qué es Helpacket?",
                whatIsMessage: [
                    "Helpacket es una plataforma colaborativa que aglutina, por un lado, la oferta de material sanitario y EPIs de empresas y particulares y, por otro, las necesidades de estos materiales para las Instituciones Sanitarias, Residencias y colectivos más desfavorecidos. La plataforma, que es gestionada por la Administración competente, suministra las peticiones de las instituciones teniendo en cuenta diversos criterios evaluados.",
                ],
                helpFromHomeHeader: "¿Cómo puedo ayudar desde casa?",
                helpFromHomeImageUrl: require("@/assets/landing/help-from-home.png"),
                helpFromHomeMessage: [
                    "Aquí encontrarás una guía de tutoriales y videos donde te enseñarán a fabricar cualquier tipo de material necesario.",
                    "Cada granito cuenta."]
                ,
                aboutUsHeader: "¿Quiénes somos?",
                aboutUsMessage: [
                    "La comunidad de Madrid propuso un Hackatón para descubrir e impulsar iniciativas que ayudarán en la crisis del Coronavirus, en este momento nos juntamos un equipo multidisciplinar en el que, con profesionales de logística, comunicación e informática, nos presentamos al concurso de la comunidad de Madrid en el que salimos finalistas, ahora ¡Cada vez estamos más cerca de hacerlo realidad!",
                ],
                aboutUsTeamSubHeader: "Miembros del Equipo",
                aboutUsColabSubHeader: "Sanitarios colaboradores",
                aboutUsColabMessage: [
                    "Jose Antonio Carrillo: Doctor Residente en el Hospital Severo Ochoa de Leganés",
                    "Paloma Sillero: Enfermera de urgencias en el Hospital Nuestra Señora de la Candelaria de Tenerife",
                ],
                contactHeader: "Contacta con Nosotros",
                contactImageUrl: require("@/assets/landing/contact.png"),
                contactMessage: [
                    "Si quieres ayudar, si tienes alguna idea que podría ayudar a esta plataforma, si quieres colaborar o aunque solo quieras saludar, no dudes en contactarnos a traves de:",
                ],
                team: [
                    {
                        "name": "Alberto Amigo",
                        "position": "Software Engineer en Unlimiteck",
                        "imageUrl": require("@/assets/landing/team/alberto-amigo.jpeg"),
                    },
                    {
                        "name": "Carlos Carrillo",
                        "position": "Departamento de Aduanas de DB Schenker , Estudiante de Transporte y Logística en UCJC",
                        "imageUrl": require("@/assets/landing/team/carlos-carrillo.jpg"),
                    },
                    {
                        "name": "Hugo de Castro",
                        "position": "Proyectos Globales de DB Schenker , Estudiante de Transporte y Logística en UCJC",
                        "imageUrl": require("@/assets/landing/team/hugo-decastro.jpeg"),
                    },
                    {
                        "name": "Jose Ramón Fernández",
                        "position": "Técnico Logístico de Wottoline , Estudiante de Transporte y Logística en UCJC",
                        "imageUrl": require("@/assets/landing/team/joseramon-fernandez.jpg"),
                    },
                    {
                        "name": "Oscar Fernández",
                        "position": "Software Engineer en Unlimiteck",
                        "imageUrl": require("@/assets/landing/team/oscar-fernandez.jpeg"),
                    },
                    {
                        "name": "Sergio García",
                        "position": "Software Engineer & Data Scientist en Unlimiteck",
                        "imageUrl": require("@/assets/landing/team/sergio-garcia.jpg"),
                    },
                    {
                        "name": "David Moreno",
                        "position": "Decano de la Facultad de Tecnología y Ciencias en la UCJC",
                        "imageUrl": require("@/assets/landing/team/david-moreno.png"),
                    },
                    {
                        "name": "Juan Príncipe",
                        "position": "Copywriter creativo en la agencia publicitaria C&W",
                        "imageUrl": require("@/assets/landing/team/juan-principe.jpeg"),
                    },
                    {
                        "name": "Jose Manuel Villa",
                        "position": "Ex – Director de Canales Digitales en BBVA",
                        "imageUrl": require("@/assets/landing/team/josemanuel-villa.png"),
                    },
                    {
                        "name": "Rafael Villa",
                        "position": "Director de Logística del Metro de Madrid y profesor de la UCJC",
                        "imageUrl": require("@/assets/landing/team/rafael-villa.png"),
                    },
                ]
            }
        },
        methods: {
            goNewSupply: function () {
                this.$router.push('/supplies/new');
            },
            goNewRequest: function () {
                this.$router.push('/requests/new');
            },
            goMoreInfo() {
                const el = document.getElementById("information");
                if (el) {
                    let headerOffset = 48;
                    let elementPosition = el.getBoundingClientRect().top;
                    let offsetPosition = elementPosition - headerOffset + window.scrollY;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }
            },
            goAnalytics() {
                this.$router.push('/analytics');
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
