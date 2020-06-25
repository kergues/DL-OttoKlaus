<template>
      <v-simple-table>
      <thead>
        <tr>
          <th class="font-weight-bold text-left">Código</th>
          <th class="text-left">Nombre</th>
          <th class="text-left">Stock</th>
          <th class="text-left">Precio</th>
          <th class="text-left">Acción</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="toy in toys" :key="toy.id">
          <td>{{ toy.data.code }}</td>
          <td>{{ toy.data.name }}</td>
          <td>{{ toy.data.stock }}</td>
          <td>{{ toy.data.price }}</td>
          <td> <v-icon small class="mr-2" @click="editToy(toy.id)" title="Editar">mdi-pencil</v-icon>
               <v-icon small @click="removeToy(toy.id)" title="Eliminar"> mdi-delete</v-icon>
          </td>
        </tr>
      </tbody>
  </v-simple-table>
</template>

<script>
import { mapState, mapActions } from 'vuex'
    export default {
      methods:{
          ...mapActions(['setToys','deleteToy', 'setCurrentToy', 'displayToyForm']),
          removeToy(id){
            let confirmation = confirm(`Estas seguro de eliminar este producto?`)
            if(confirmation){
              this.deleteToy(id)
              alert('Tu producto se ha eliminado exitosamente')
            }
          },
          editToy(id){
            this.setCurrentToy(id)
            this.displayToyForm()
          }
        },
      computed:{
            ...mapState(['toys'])
        },
        created(){
          this.setToys()
        }
      
        
    }
</script>

<style lang="scss" scoped>

</style>