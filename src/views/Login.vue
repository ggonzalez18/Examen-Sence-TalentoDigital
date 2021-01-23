<template>
    <div>
    <!-- imagen de fondo -->
    <!-- <v-img light class="background-opacity" src="https://fondosmil.com/fondo/20817.jpg"> -->
      <v-card width="400" class="mx-auto mt-12">
        <v-card-title class="justify-center"><v-icon color="cyan">mdi-account</v-icon><h3>Login de Usuarios</h3></v-card-title>
        <v-card-text dark>
          <v-form>
            <v-text-field v-model="email" label="Usuario" prepend-icon="mdi-account-circle" color="cyan darken-1"/>
            <v-text-field v-model="password"
            @click:append="showPassword = !showPassword"
            label="password"
            :type="showPassword ? 'text' : 'password'"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            color="cyan darken-1"/>
          </v-form>
        </v-card-text>
          <v-card-actions class="pb-5 mx-auto">
            <v-btn color="cyan" class="mx-auto" large>ingresar</v-btn>
          </v-card-actions>
      </v-card>
    <!-- </v-img> -->
  </div>
</template>

<script>
export default {
data()  {
    return {
      email: '',
      password: '',
      showPassword: false
    }
  },
}
</script>

<style>

</style>