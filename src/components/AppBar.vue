<template>
  <div>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h3 class="text-title white--text">OTTO KLAUS</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        color="primary"
        @click="logout"
      >
        <span class="mr-2">Cerrar Sesión</span>
        <v-icon>mdi-exit-to-app</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>
 
<script>
import Firebase from 'firebase'
  export default {
    methods: {
      logout() {
      Firebase.auth().signOut().then(()=>{
        this.$router.push('/login')
      })
    }
    }
  }
</script>

<style scoped>

</style>
