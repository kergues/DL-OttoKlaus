<template>
  <v-main>
    <app-bar></app-bar>
    <v-container>
      <v-toolbar dense>
        <v-toolbar-title>Lista de Juguetes</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn color="primary" dark class="mb-2" 
        @click="displayToyForm">New Toy</v-btn>
      </v-toolbar>
      <toys-list></toys-list>
      <toy-form></toy-form>
    </v-container>
  </v-main>
</template>

<script>
// @ is an alias to /src
import AppBar from "@/components/AppBar.vue";
import ToysList from "@/components/ToysList.vue";
import ToyForm from "@/components/ToyForm.vue";
import { mapActions } from "vuex";
export default {
  name: "Toys",
  components: {
    AppBar,
    ToysList,
    ToyForm,
  },
  methods: {
    ...mapActions(["displayToyForm"]),
  },
};
</script>