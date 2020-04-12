<template>
  <v-footer
      dark
      padless
      width="100%"
  >
    <v-card
        flat
        tile
        width="100%"
        class="black lighten-1 white--text text-center"
    >
      <v-card-text>
        <v-btn
            v-for="item in icons"
            :key="item"
            :href="item.url"
            target="_blank"
            class="mx-4 white--text"
            icon
        >
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">

      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>Helpacket</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
    export default {
        name: 'HelpacketFooter',
        data: () => ({
            icons: [
                {
                    "icon": 'fab fa-github',
                    "url": "https://github.com/helpacket"
                },
                {
                    "icon": 'fab fa-linkedin',
                    "url": "https://www.linkedin.com/company/helpacket-plataforma-colaborativa"
                },
                {
                    "icon": 'fab fa-twitter',
                    "url": "https://twitter.com/HelPacket"
                },
                {
                    "icon": 'fas fa-envelope',
                    "url": "mailto:helpacket@gmail.com"
                },
            ],
        }),
    }
</script>
