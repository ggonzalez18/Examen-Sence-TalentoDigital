<template>
  <!-- <section>
    <v-row>

      <v-col cols="12" sm="12" md="12" lg="6" xl="6">
        <v-container>
          <v-card class="mx-auto my-12" min-width="500">
            <v-card-text>
              <h3 class="text--primary text-center mb-5">Venta Mensual</h3>
              <div class="d-flex justify-space-around">
                <div>
                  <p>{{monthlySalesPercent}} %</p>
                  <v-btn text sm class="info--text text-center">ver detalles</v-btn>
                </div>

                <div>
                  <p>{{kpis.venta_mensual.valor}}</p>
                  <p class="text--primary">Ventas del mes</p></div>

                <div>
                  <p>{{kpis.venta_mensual.meta}}</p>
                  <p class="text--primary">Meta de ventas <br> del mes</p></div>
              </div>
            </v-card-text>
           </v-card>
        </v-container>
      </v-col>

      <v-col cols="12" sm="12" md="12" lg="6" xl="6">
        <v-container>
          <v-card class="mx-auto my-12" min-width="500">
            <v-card-text>
              <h3 class="text--primary text-center mb-5">Venta Anual</h3>
              <div class="d-flex justify-space-around">
                <div>
                  <p>{{annualSalesPercent}} %</p>
                  <v-btn text sm class="info--text text-center">ver detalles</v-btn>
                </div>

                <div>
                  <p>{{kpis.venta_anual.valor}}</p>
                  <p class="text--primary">Ventas del Año</p></div>

                <div>
                  <p>{{kpis.venta_anual.meta}}</p>
                  <p class="text--primary">Meta de ventas <br> del Año</p></div>
              </div>
            </v-card-text>
           </v-card>
        </v-container>
      </v-col>
    </v-row>
  </section> -->

  <section>
    <v-row >
        <!-- venta mensual -->
        <v-col sm="12" md="12" lg="6" xl="6">
          <v-container>
            <v-card class="mx-auto ma-auto pa-2" min-width="550">
              <v-card-text>
                <h3 class="text--primary text-center mb-5">Venta Mensual</h3>
                <div class="d-flex justify-space-around">
                  <div class="text-center">
                    <p class="font-weight-black display-1">{{monthlySalesPercent}} %</p>
                    <v-btn text small class="info--text text-center">ver detalles</v-btn>
                  </div>

                  <div class="ml-5 mr-5 text-center">
                    <p class="font-weight-black display-1">{{kpis.venta_mensual.valor}}</p>
                    <p class="text--primary">Ventas del mes</p></div>

                  <div class="text-center">
                    <p class="font-weight-black display-1">{{kpis.venta_mensual.meta}}</p>
                    <p class="text--primary text-center">Meta ventas <br> del mes</p></div>
                </div>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col>
 
        <!-- venta anual -->
        <v-col sm="12" md="12" lg="6" xl="6">
          <v-container>
            <v-card class="mx-auto ma-auto pa-2" min-width="550">
              <v-card-text>
                <h3 class="text--primary text-center mb-5">Venta Anual</h3>
                <div class="d-flex justify-space-around">
                  <div class="ml-5 mr-5 text-center">
                    <p class="font-weight-black display-1">{{annualSalesPercent}} %</p>
                    <v-btn text small class="info--text text-center">ver detalles</v-btn>
                  </div>

                  <div class="ml-5 mr-5 text-center">
                    <p class="font-weight-black display-1">{{kpis.venta_anual.valor}}</p>
                    <p class="text--primary">Ventas del Año</p></div>

                  <div class="ml-5 mr-5 text-center">
                    <p class="font-weight-black display-1">{{kpis.venta_anual.meta}}</p>
                    <p class="text--primary text-center">Meta ventas <br> del Año</p></div>
                </div>
              </v-card-text>
            </v-card>
          </v-container>
        </v-col>

    </v-row>
  </section>
</template>




<script>
import {mapActions, mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['kpis']),
    annualSalesPercent(){
      return Math.round((this.kpis.venta_anual.valor / this.kpis.venta_anual.meta)* 100)
    },
    monthlySalesPercent(){
      return Math.round((this.kpis.venta_mensual.valor / this.kpis.venta_mensual.meta)* 100)
    }
  },
  methods: {
    ...mapActions(['getDasboard'])
  },
  created() {
    this.getDasboard()
  }
}
</script>

<style>

</style>