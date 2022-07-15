<template>
  <div>
    <v-app-bar
        color="red darken-2 mb-4"
        height="34"
        dense
    >
      <img alt="BannerGif"
           style="max-height: 40px; min-width: 100%;max-width: 100vw;"
           src="https://minisope.vtexassets.com/arquivos/CINTILLODESKTOPMinisoPeru.gif"
      />
    </v-app-bar>
    <div class="d-flex">
      <v-img
          max-width="120"
          height="40"
          alt="Logo"
          class="mr-3 ml-2"
          src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/10f39e67-475c-4ca1-b70d-514d1ff6f2ae___ef69a328b8f540713705bb41b96cb81a.png"
      />
      <v-text-field
          solo
          append-icon="mdi-card-search-outline"
          label="¿Qué estás buscando hoy?"
      />
      <v-spacer></v-spacer>
      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-penguin</v-icon>
      </v-btn>
      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-heart-outline</v-icon>
      </v-btn>
      <v-btn
          icon
          color="black"
      >
        <v-icon>mdi-shopping-outline</v-icon>
      </v-btn>
    </div>

    <!--v-card cabecera-->
    <v-card
    >
      <v-tabs
          background-color="white"
          align-with-title
      >
        <v-tabs-slider color="red"></v-tabs-slider>
        <v-tab
          v-for="(categoria,i) in categorias"
          :key="i"
          :style="'text-transform:capitalize !important; color:' + categoria.color"
          :color="categoria.color"
        >
          {{categoria.cat}}
        </v-tab>
        <v-spacer></v-spacer>
      </v-tabs>
    </v-card>
  </div>
</template>

<script>
import { defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: "AppBar.vue",
  setup(){

    const categorias  = [
      {
        'color' : 'black',
        'cat' : 'Categorías'
      },
      {
        'color' : 'red',
        'cat' : 'New Arrivals ✨'
      },
      {
        'color' : 'black',
        'cat' : 'Miniso Wow ✨'
      },
      {
        'color' : '#ff0000',
        'cat' : 'Outlet 🔥'
      },
      {
        'color' : '#52e8f6',
        'cat' : 'Colecciones'
      },
      {
        'color' : 'black',
        'cat' : 'Tiendas'
      },
      {
        'color' : 'black',
        'cat' : 'Contáctenos'
      }
    ]

    return {
      categorias
    }


  }
})
</script>

<style scoped>

</style>