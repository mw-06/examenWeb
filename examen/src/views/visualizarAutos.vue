<template>
  <div class="Autos">
      <h1>Autos</h1>
      <Tabla :items="autos"/>
  </div>
</template>

<script>
import Tabla from "../components/Tabla";
import {mapState,mapActions} from 'vuex'

export default {
    name: "Autos",
    components: {
    Tabla
  },
  data(){
      return{
          campos: [
          {key: "autoID", label:"ID"},
          {key: "modelo", label:"Modelo"},
          {key: "marca", label:"Marca"},
          {key: "anio", label:"Año"},
          {key: "color", label:"Color"},
          ]
      }
  },
  computed: {
    ...mapState(['autos'])
  },
  methods: {
    ...mapActions(['setAutos'])
  },
  created(){
    this.setAutos();
  }
}
</script>
<style>
</style>