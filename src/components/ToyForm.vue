<template>
  <div class="text-center">
    <v-dialog :value="showForm" width="500" persistent>
      <v-card>
        <v-card-title class="headline grey lighten-2" primary-title>
          Toy Otto Klaus
        </v-card-title>
          <v-card-text>
          <v-text-field label="Código" type="text" :value="currentToy.data.code" @input="updateCode"/>
          <v-text-field label="Nombre" type="text" :value="currentToy.data.name" @input="updateName"/>
          <v-text-field label="Stock"  suffix="unidades" :value="currentToy.data.stock" @input="updateStock"/>
          <v-text-field label="Precio" prefix="$" :value="currentToy.data.price" @input="updatePrice"/>
        </v-card-text>
        
        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="cancelForm">Cancelar</v-btn>
          <v-btn color="success" @click="submitForm">{{!!currentToy.id ? 'Actualizar': 'Crear'}}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(['displayToyForm', 'hideToyForm', 'updateCode', 'updateName', 'updateStock', 'updatePrice', 'postToy', 'updateToy', 'cancelForm']),
    submitForm() {
      if(this.currentToy.id){
        this.updateToy(this.currentToy.id)
        alert('Tu producto se ha modificado exitosamente')
        } else {
          this.postToy()
          alert('Tu producto se ha agregado exitosamente')
        }
        this.hideToyForm()
      }
    },
  computed: {
    ...mapState(['showForm', 'currentToy'])
  },
};
</script>

<style lang="scss" scoped></style>