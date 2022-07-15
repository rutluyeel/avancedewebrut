<template>
  <div>
    <AppBar/>
    <!--Carrusel  imagenes-->
    <v-carousel hide-delimiters>
      <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
      ></v-carousel-item>
    </v-carousel>
    <!--Fin de Carrusel imagenes-->

    <!--Cuerpo de imagenes cards-->
    <v-container fluid style="background:#e9c2f8">
      <v-container>
        <h1 class="text-center">No sabía lo que necesitaba</h1>
        <v-row>
          <v-col cols="3">
            <v-img
                title="Bolsas y Mochilas"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/e1009d7d-f9cf-4232-a8fe-dd31755b2c5d___b9fdc839e1d60ea36cf9be7d06107193.webp"/>
          </v-col>

          <v-col cols="3">
            <v-img
                title="Cosméticos"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/24954bed-8ed6-4339-a2e2-24c2bdb32071___3b5b0c1725fc47d5ae7e5d4a97617077.webp"/>
          </v-col>

          <v-col cols="3">
            <v-img
                title="Papelería"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/d8e55596-03e9-4edf-95d3-e4abea313e75___0bafe8a6448e955589767bcc048b4ae9.webp"/>
          </v-col>
          <v-col cols="3">
            <v-img
                title="Viajes"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/d7ef559d-a563-4d0c-8521-443c63c12695___30e8f0ba26e110767319aa57ea5053ba.webp"/>
          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <!--Cuerpo de imagenes cards-->

    <!--Slide groups para mostrar productos pagina principal-->
    <AppSlider :productos="productos"/>
    <!--Slide groups para mostrar productos pagina principal-->

    <!--Categorias Hogar Slide groups para mostrar productos por categoria-->
    <v-container fluid style="background:#ffffff">
      <v-img
          title="¿Cómo comprar en Miniso Online?"
          src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/fe9feabb-5908-4ece-8563-be66cbaed09b___8052c97bb019b80eeae085dfc3771780.webp"
          alt="¿Cómo comprar en Miniso Online?"
      />
      <h1 class="text-center">No sabía lo que necesitaba</h1>
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-img
                title="Hogar"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/c5ad1085-f9f8-4d55-a443-83d30fc98aca___f2c3a65571546c3ea08249fc35bb9d8e.jpg"
            />
          </v-col>
          <v-col cols="8">
            <h1 class="text-center">Hogar ✨</h1>
            <v-slide-group
                v-model="modal"
                center-active
                show-arrows
            >
              <div
                  style="display:flex !important; gap: 15px !important;">
                <v-slide-item
                    v-for="(producto,i)  in productos"
                    :key="i"
                >
                  <v-card
                      class="mx-auto my-12 mx-5"
                      width="285"
                  >
                    <div class="d-flex justify-space-between px-2 py-2">

                      <v-btn
                          icon
                          color="grey"
                          right
                      >
                        <v-icon>mdi-heart-outline</v-icon>
                      </v-btn>
                    </div>
                    <v-img
                        height="200"
                        :src="producto.src"
                    ></v-img>

                    <v-card-text>
                      <v-spacer></v-spacer>
                      <div>{{producto.titulo}}</div>
                    </v-card-text>
                    <v-card-text>
                      <v-chip-group
                          active-class="deep-purple accent-4 white--text"
                          column
                      >
                        <v-btn
                            text
                            color="error"
                        >
                          {{producto.precio}}
                        </v-btn>

                      </v-chip-group>
                      <v-card-actions class="d-flex justify-space-around">
                        <v-btn
                            outlined
                            color="red"
                            dark
                        >
                          COMPRAR <br>AHORA
                        </v-btn>
                        <v-btn
                            color="red"
                            dark
                        >
                          AGREGAR <br>A LA BOLSA
                        </v-btn>
                      </v-card-actions>
                    </v-card-text>
                  </v-card>
                </v-slide-item>
              </div>
            </v-slide-group>

          </v-col>
        </v-row>

</v-container>
    </v-container>
    <!--Fin Categorias Hogar Slide groups para mostrar productos por categoria-->
    <!--Categorias Salud y belleza Slide groups para mostrar productos por categoria-->

    <v-container fluid style="background:#ffffff">
      <v-container>
        <v-row>
          <v-col cols="4">
            <v-img
                title="Salud y belleza"
                src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/aeacbcdc-fec9-4830-a677-e4abd6f3094c___236b8e90f53d9b874b0be625316f72b8.jpg"
            />
          </v-col>
          <v-col cols="8">
            <h1 class="text-center">Salud y Belleza ✨</h1>
            <v-slide-group
                v-model="modal"
                center-active
                show-arrows
            >
              <div
                  style="display:flex !important; gap: 15px !important;">
                <v-slide-item
                    v-for="(producto,i)  in productos"
                    :key="i"
                >
                  <v-card
                      class="mx-auto my-12 mx-5"
                      width="285"
                  >
                    <div class="d-flex justify-space-between px-2 py-2">

                      <v-btn
                          icon
                          color="grey"
                          right
                      >
                        <v-icon>mdi-heart-outline</v-icon>
                      </v-btn>
                    </div>
                    <v-img
                        height="200"
                        :src="producto.src"
                    ></v-img>

                    <v-card-text>
                      <v-spacer></v-spacer>
                      <div>{{producto.titulo}}</div>
                    </v-card-text>
                    <v-card-text>
                      <v-chip-group
                          active-class="deep-purple accent-4 white--text"
                          column
                      >
                        <v-btn
                            text
                            color="error"
                        >
                          {{producto.precio}}
                        </v-btn>

                      </v-chip-group>
                      <v-card-actions class="d-flex justify-space-around">
                        <v-btn
                            outlined
                            color="red"
                            dark
                        >
                          COMPRAR <br>AHORA
                        </v-btn>
                        <v-btn
                            color="red"
                            dark
                        >
                          AGREGAR <br>A LA BOLSA
                        </v-btn>
                      </v-card-actions>
                    </v-card-text>
                  </v-card>
                </v-slide-item>
              </div>
            </v-slide-group>

          </v-col>
        </v-row>
      </v-container>
    </v-container>
    <!--Fin Categorias Salud y belleza Slide groups para mostrar productos por categoria-->

    <!--Catergoria Tecnologia Slide groups para mostrar productos -->

    <v-container fluid style="background:rgba(245,241,241,0.93)">
      <h1 class="text-center">Tecnología 💻</h1>
      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">
          <v-slide-item
              v-for="(producto,i)  in productos"
              :key="i"
          >
            <v-card
                class="mx-auto my-12 mx-5"
                width="285"
            >
              <div class="d-flex justify-space-between px-2 py-2">
                <v-btn
                    icon
                    color="grey"
                    left
                    small
                >
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
              </div>
              <v-img
                  height="200"
                  :src="producto.src"
              ></v-img>

              <v-card-text>
                <v-spacer></v-spacer>
                <div>{{producto.titulo}}</div>
              </v-card-text>
              <v-card-text>
                <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                  <v-btn
                      text
                      color="error"
                  >
                    {{producto.precio}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    COMPRAR <br>AHORA
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR <br>A LA BOLSA
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </div>
      </v-slide-group>

    </v-container>
    <!--Catergoria Tecnologia Slide groups para mostrar productos -->

    <!--Catergoria Juguetes Slide groups para mostrar productos -->

    <v-container fluid style="background:rgba(245,241,241,0.93)">
      <h1 class="text-center">Juguetes ✨</h1>
      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">
          <v-slide-item
              v-for="(producto,i)  in productos"
              :key="i"
          >
            <v-card
                class="mx-auto my-12 mx-5"
                width="285"
            >
              <div class="d-flex justify-space-between px-2 py-2">
                <v-btn
                    icon
                    color="grey"
                    left
                    small
                >
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
              </div>
              <v-img
                  height="200"
                  :src="producto.src"
              ></v-img>

              <v-card-text>
                <v-spacer></v-spacer>
                <div>{{producto.titulo}}</div>
              </v-card-text>
              <v-card-text>
                <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                  <v-btn
                      text
                      color="error"
                  >
                    {{producto.precio}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    COMPRAR <br>AHORA
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR <br>A LA BOLSA
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </div>
      </v-slide-group>

    </v-container>
    <!--Catergoria Juguetes Slide groups para mostrar productos -->

    <!--Catergoria Moda Slide groups para mostrar productos -->

    <v-container fluid style="background:rgba(245,241,241,0.93)">
      <h1 class="text-center">Los mejores accesorios de Moda ✨</h1>
      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">
          <v-slide-item
              v-for="(producto,i)  in productos"
              :key="i"
          >
            <v-card
                class="mx-auto my-12 mx-5"
                width="285"
            >
              <div class="d-flex justify-space-between px-2 py-2">
                <v-btn
                    icon
                    color="grey"
                    left
                    small
                >
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
              </div>
              <v-img
                  height="200"
                  :src="producto.src"
              ></v-img>

              <v-card-text>
                <v-spacer></v-spacer>
                <div>{{producto.titulo}}</div>
              </v-card-text>
              <v-card-text>
                <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                  <v-btn
                      text
                      color="error"
                  >
                    {{producto.precio}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    COMPRAR <br>AHORA
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR <br>A LA BOLSA
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </div>
      </v-slide-group>

    </v-container>
    <!--Catergoria Moda Slide groups para mostrar productos -->

    <!--Catergoria Deporte Slide groups para mostrar productos -->

    <v-container fluid style="background:rgba(245,241,241,0.93)">
      <h1 class="text-center">Deportes</h1>
      <v-slide-group
          v-model="modal"
          center-active
          show-arrows
      >
        <div
            style="display:flex !important; gap: 15px !important;">
          <v-slide-item
              v-for="(producto,i)  in productos"
              :key="i"
          >
            <v-card
                class="mx-auto my-12 mx-5"
                width="285"
            >
              <div class="d-flex justify-space-between px-2 py-2">
                <v-btn
                    icon
                    color="grey"
                    left
                    small
                >
                  <v-icon>mdi-heart-outline</v-icon>
                </v-btn>
              </div>
              <v-img
                  height="200"
                  :src="producto.src"
              ></v-img>

              <v-card-text>
                <v-spacer></v-spacer>
                <div>{{producto.titulo}}</div>
              </v-card-text>
              <v-card-text>
                <v-chip-group
                    active-class="deep-purple accent-4 white--text"
                    column
                >
                  <v-btn
                      text
                      color="error"
                  >
                    {{producto.precio}}
                  </v-btn>

                </v-chip-group>
                <v-card-actions class="d-flex justify-space-around">
                  <v-btn
                      outlined
                      color="red"
                      dark
                  >
                    COMPRAR <br>AHORA
                  </v-btn>
                  <v-btn
                      color="red"
                      dark
                  >
                    AGREGAR <br>A LA BOLSA
                  </v-btn>
                </v-card-actions>
              </v-card-text>
            </v-card>
          </v-slide-item>
        </div>
      </v-slide-group>

    </v-container>
    <!--Catergoria Deportes Slide groups para mostrar productos -->

    <!--Rutas para clientes -->

    <v-container fluid style="background:#ffffff">
      <v-container>
        <v-row>
          <v-col
              cols="4"
          >
            <div

            >
            <v-img title="Ventas corporativas" sizes="" srcset=""
                   src="https://minisope.vtexassets.com/assets/vtex/assets-builder/minisope.store-theme/0.19.11/deals/img-deal-01___e5c7c57af02d93a6c6cfe62a4df896af.png"/>
            </div>
            <v-row

                align="center"
                justify="space-around"
            >
              <v-btn text>
                VENTAS CORPORATIVAS
              </v-btn>
              <v-btn
                  text
                  color="primary"
              >
              </v-btn>

              <v-divider
                  inset
                  color="black"
                  vertical
              ></v-divider>

            </v-row>
          </v-col>

          <v-col cols="4">
            <v-img title="Preguntas frecuentes" sizes="" srcset=""
                   src="https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/13b44f59-1a53-4847-b1b2-d7e9b459b020___7fdaf968b091a5aefc925d676ecb668d.jpg"/>
            <v-row
                align="center"
                justify="space-around"
            >
              <v-btn text>
                PREGUNTAS FRECUENTES
              </v-btn>
              <v-btn
                  text
                  color="primary"
              >

              </v-btn>
              <v-divider
                  color="black"
                  vertical
              ></v-divider>
            </v-row>

          </v-col>

          <v-col cols="4">
            <v-img title="Libro de reclamaciones" sizes="" srcset=""
                   src="https://minisope.vtexassets.com/assets/vtex/assets-builder/minisope.store-theme/0.18.0/deals/img-deal-03___b2e5420f0b992e9d373413cfcf2c638d.png"/>
            <v-row
                align="center"
                justify="space-around"
            >
              <v-btn text>
                LIBRO DE RECLAMACIONES
              </v-btn>
              <v-btn
                  text
                  color="primary"
              >

              </v-btn>
            </v-row>

          </v-col>

        </v-row>
      </v-container>

    </v-container>
    <!--Rutas para clientes -->

    <!--Deja tu correo -->

<v-container fluid style="background:#fadddd">
  <v-container>
    <v-row>
      <v-col
          cols="7"
      >
        <v-row
            align="center"
            justify="space-around"
        >
          <h1 class="text">¡Que no se te pase ni una!</h1>
          <div>Deja tu correo y entérate de todo lo que pasa en Miniso antes que nadie. Tips, noticias, tendencias, promociones y más.</div>

          <div>Al momento de enviar mi correo acepto los Términos y condiciones y el Aviso de privacidad</div>

        </v-row>
      </v-col>

      <v-col cols="5">

        <v-row
            align="center"
            justify="space-around"
        >
          <v-text-field
              solo
              label="hola@correo.com"
          ></v-text-field>

          <v-btn
              color="#FFC9D3"
          >
            ENVIAR
          </v-btn>

        </v-row>
      </v-col>

      <v-col cols="4">
        <v-row
            align="center"
            justify="space-around"
        >

        </v-row>
      </v-col>

    </v-row>
  </v-container>

</v-container>

    <!--Deja tu correo -->

    <!--Footer Miniso -->

    <v-container fluid style="background:#1c1b1b">
      <v-footer
          dark
          padless
      >
        <v-card
            flat
            tile
            class="py-2 white--text text-center"
        >
          <v-card-text>
            <v-btn
                v-for="icon in icons"
                :key="icon"
                class="mx-4 white--text"
                icon
            >
              <v-icon size="24px">
                {{ icon }}
              </v-icon>
            </v-btn>
          </v-card-text>

          <v-card-text class="py-2 white--text text-center">

            Miniso Perú. Todos los derechos reservados © 2021 | Términos y Condiciones | Aviso de Privacidad

          </v-card-text>

          <v-card-text class="py-2 white--text text-center">
            Miniso.pe utiliza cookies para que tengas la mejor experiencia de navegación. Si sigues navegando entendemos que aceptas nuestra política de cookie.

          </v-card-text>

        </v-card>
      </v-footer>
    </v-container>

  </div>

</template>

<!--Script -->

<script>
import AppBar from "@/components/AppBar";
import AppSlider from "@/components/AppSlider";
import {defineComponent} from "@vue/composition-api";

export default defineComponent({
  name: 'home',
  components:{
    AppBar,
    AppSlider
  },
  data: () =>({
  icons: [
    'mdi-vuetify',
    'mdi-security',
    'mdi-credit-card',
    'mdi-instagram',
  ],

  }),

  setup() {
    const modal = null

    const items = [
      {
        src: 'https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/e0ea94fc-0ec3-4c74-874a-f85a9b790709___5f37a0cb7dc6a1e6b616ac32cd26cc60.jpg',
      },
      {
        src: 'https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/9cea5910-7705-4685-9016-e59ff038555a___6168ebe98a5d2dcb2ca2fe0fc9d3e2ff.jpg',
      },
      {
        src: 'https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/dda50d02-4e07-44ef-b6a4-bea209f6c74e___5009986d494a9ce5d6006ce306e9058c.jpg',
      },
      {
        src: 'https://minisope.vtexassets.com/assets/vtex.file-manager-graphql/images/a7fc541f-6239-4675-b00e-e71cbf92854b___0e5a37e4a2052a26186b8888ba254ae9.jpg',
      },
    ]
    const productos = [
        {
          src : 'https://minisope.vtexassets.com/arquivos/ids/195904-384-384?v=637914622171200000&width=384&height=384&aspect=true',
          titulo : 'Banda de puntos negros para nariz - We Bare Bears',
          precio: 'S/ 8.95'
        },
        {
          src : 'https://minisope.vtexassets.com/arquivos/ids/184078-384-384?v=637807701861500000&width=384&height=384&aspect=true',
          titulo : 'Mascarilla para los ojos de gel bambú charcoal 6 pares -  Miniso',
          precio : 'S/ 8.95'
        },

      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158472-384-384?v=637389919064870000&width=384&height=384&aspect=true',
        titulo : 'Mascarilla para los ojos de gel orange  6 pares -  Miniso',
        precio : 'S/ 8.95'
      },

      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158472-384-384?v=637389919064870000&width=384&height=384&aspect=true',
        titulo : 'Mascarilla para los ojos de gel orange  6 pares -  Miniso',
        precio : 'S/ 8.95'
      },
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158472-384-384?v=637389919064870000&width=384&height=384&aspect=true',
        titulo : 'Mascarilla para los ojos de gel orange  6 pares -  Miniso',
        precio : 'S/ 8.95'
      },
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158472-384-384?v=637389919064870000&width=384&height=384&aspect=true',
        titulo : 'Mascarilla para los ojos de gel orange  6 pares -  Miniso',
        precio : 'S/ 8.95'
      },
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158472-384-384?v=637389919064870000&width=384&height=384&aspect=true',
        titulo : 'Mascarilla para los ojos de gel orange  6 pares -  Miniso',
        precio : 'S/ 8.95'
      },
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158472-384-384?v=637389919064870000&width=384&height=384&aspect=true',
        titulo : 'Mascarilla para los ojos de gel orange  6 pares -  Miniso',
        precio : 'S/ 8.95'
      },
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158472-384-384?v=637389919064870000&width=384&height=384&aspect=true',
        titulo : 'Mascarilla para los ojos de gel orange  6 pares -  Miniso',
        precio : 'S/ 8.95'
      },
      {
        src : 'https://minisope.vtexassets.com/arquivos/ids/158472-384-384?v=637389919064870000&width=384&height=384&aspect=true',
        titulo : 'Mascarilla para los ojos de gel orange  6 pares -  Miniso',
        precio : 'S/ 8.95'
      }
    ]

    return {
      items,
      productos,
      modal
      }

    //...

  }
})
</script>
<style scoped>
.button_offer{
  padding:0 !important;
  margin:0 !important;
}
.v-slide-group__content{
  display:flex !important;
  gap: 15px !important;
}
</style>