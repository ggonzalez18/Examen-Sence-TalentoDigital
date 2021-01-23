<template>
  <div class="home">
    <nav-comp></nav-comp>
    <v-container>
    
    <v-container class="fill-height" fluid>
      <p>Home</p>
        <v-fade-transition mode="out-in">
      <v-row>
        <v-col cols="12">
          <v-card>
            <v-img
              height="250"
              class="grey darken-4"
              color="gray"
            ></v-img>
            <v-card-title class="title">height</v-card-title>
          </v-card>
        </v-col>
      </v-row>
      </v-fade-transition>
</v-container>
      
      <v-row>
      <!-- init venta mensual y mensual -->
      <sales></sales>


      <!-- Ranking vendedores -->
      <ranking></ranking>
      <v-col></v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
import NavComp from '@/components/NavComp'
import Sales from '@/components/Sales'
import Ranking from '@/components/Ranking'

export default {
  name: 'Home',
  components: {
    NavComp,
    Sales,
    Ranking
  }
}
</script>
