<template>
<section>
  <v-row>
    <v-col sm="12" md="12" lg="6" xl="6">
      <v-container>
        <h3 class="text-center pa-3">Ranking de vendedores</h3>
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ID Vendedor</th>
                <th class="text-left">Vendedor</th>
                <th class="text-left">Monto</th>
                <th class="text-left">unidades</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="seller in rankingSellers" :key="seller.id_vendedor">
                <td class="pa-2">{{ seller.id_vendedor }}</td>
                <td class="pa-2">{{ seller.nombre }}</td>
                <td class="pa-2">{{ seller.monto }}</td>
                <td class="pa-2 text-center">{{ seller.unidades }}</td>
                <td class="pa-2">
                  <v-btn text small color="info">detalles</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-container>
    </v-col>
    
    <v-col sm="12" md="12" lg="6" xl="6">
    <v-container>
        <h3 class="text-center pa-3">Ranking de Productos</h3>
        <v-simple-table dense>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ID <br> Producto</th>
                <th class="text-left">Producto</th>
                <th class="text-left">Unidades</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="product in rankingProducts" :key="product.cod_producto">
                <td class="pa-2">{{ product.cod_producto}}</td>
                <td class="pa-2">{{ product.producto }}</td>
                <td class="pa-2 text-center">{{ product.unidades }}</td>
                <td class="pa-2">
                  <v-btn text small color="info">detalles</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
    </v-container>
    </v-col>
  </v-row>
  </section>
</template>

<script>
import {mapActions, mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['rankingSellers', 'rankingProducts'])
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