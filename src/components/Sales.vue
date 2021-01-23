<template>
  <section>
    <v-row>
      <!-- venta mensual -->
      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
        <div>
          <v-card class="mx-auto my-12" min-width="550">
            <v-card-text>
              <h3 class="text--primary text-center mb-5">Venta Mensual</h3>
              <div class="d-flex justify-space-around">
                <div>
                  <p>10%</p>
                  <v-btn text sm class="info--text text-center">ver detalles</v-btn>
                </div>

                <div>
                  <p>10%</p>
                  <p class="text--primary">Ventas del mes</p></div>

                <div>
                  <p>10%</p>
                  <p class="text--primary">Meta de ventas <br> del mes</p></div>
              </div>
            </v-card-text>
           </v-card>
        </div>
      </v-col>

      <!-- venta anual -->
      <v-col cols="12" sm="12" md="6" lg="6" xl="6">
<div>
          <v-card class="mx-auto my-12" min-width="550">
            <v-card-text>
              <h3 class="text--primary text-center mb-5">Venta Anual</h3>
              <div class="d-flex justify-space-around">
                <div>
                  <p>10%</p>
                  <v-btn text sm class="info--text text-center">ver detalles</v-btn>
                </div>

                <div>
                  <p>10%</p>
                  <p class="text--primary">Ventas del Año</p></div>

                <div>
                  <p>10%</p>
                  <p class="text--primary">Meta de ventas <br> del Año</p></div>
              </div>
            </v-card-text>
           </v-card>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script>
export default {

}
</script>

<style>

</style>