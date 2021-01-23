<template>
  <v-row>
    <v-col cols="6">
    <h3 class="text-center">Ranking de vendedores</h3>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ID Vendedor</th>
              <th class="text-left">vendedor</th>
              <th class="text-left">Monto</th>
              <th class="text-left">unidades</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>
                <v-btn text>ver detalles</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>

    <v-col>
    <h3 class="text-center">Ranking de Productos</h3>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-left">ID Producto</th>
              <th class="text-left">Monto</th>
              <th class="text-left">unidades</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="item in desserts"
              :key="item.name"
            >
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>{{ item.name }}</td>
              <td>{{ item.calories }}</td>
              <td>
                <v-btn text>ver detalles</v-btn>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
export default {

}
</script>

<style>

</style>