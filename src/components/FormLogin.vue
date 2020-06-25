<template>
  <v-app>
    <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="6" class="cyan lighten-3 rounded-b-xl">
          <h1 class="text-center text-primary primary--text">
            Juguetería Otto Klaus
          </h1>
          <h1 class="text-subtitle-1 text-center white--text">
            Acceso de Usuarios
          </h1>
          <v-form>
            <h5 v-if="formError" class="text-center red darken-4 white--text">
                <i class="mdi mdi-alert"></i>
                Usuario y Contraseña son requeridos.
              </h5>
            <v-text-field
              label="Email"
              v-model="user"
              color="grey lighten-5"
              prepend-icon="mdi-account-circle"
            />
            <v-text-field
              label="Password"
              v-model="password"
              color="grey lighten-5"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="mdi-lock"
              :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
              @click:append="showPassword = !showPassword"
            />
            <div class="my-2 text-right">
              <v-btn small color="primary" @click="login">Acceder</v-btn>
            </div>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import Firebase from 'firebase'
export default {
  name: "App",
  data: () => ({
    user:'',
    password:'',
    showPassword: false,
    formError:false
  }),
    methods: {
    login(e) {
      e.preventDefault()
      this.formError = this.user === '' || this.password === ''
      if(!this.formError) {
        // try login
        Firebase.auth()
                .signInWithEmailAndPassword(
                  this.user,
                  this.password
                )
                .then(() => {
                  this.$router.push('/toys')
                  alert(`Bienvenido: ${this.user}`)
                })
                .catch(() => {
                  alert('Usuario no auntenticado')
                })
      }
    }
  },
};
</script>

<style scoped>

</style>