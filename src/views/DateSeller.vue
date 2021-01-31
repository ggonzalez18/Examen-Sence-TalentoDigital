<template>
  <div>
    <nav-comp></nav-comp>
    <v-container>
        <h3>Ficha vendedor</h3>
            <div>
    <v-toolbar color="blue-grey lighten-1" dark flat>
      <v-toolbar-title class="justify-start d-flex"><h3 class="cyan--text mr-1">+</h3><h3>Ficha vendedor</h3></v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="cyan"></v-tabs-slider>
          <v-tab to="/datesellers/:id">General</v-tab>
          <v-tab to="">Cartera Clientes</v-tab>
          <v-tab to="">Cumplimiento</v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    </div>
    </v-container>
  </div>
</template>

<script>
import NavComp from '@/components/NavComp'

export default {
  name: 'Home',
  components: {
    NavComp
  },
  created() {
        this.getSellers(this.$route.params.id)
    }
}
</script>
