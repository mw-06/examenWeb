<template>
    <div>
        <h1>Agregar Auto</h1>
        <b-form @submit.prevent="guardarAuto()">
            <Input 
                v-model="Auto.modelo"
                id="modelo"
                titulo="Modelo"
                :maxlength=50
                placeholder="Ingrese el modelo"
                mensajeError="Es necesario ingresar el modelo"
                :error="errorValidacion && !validacionAuto"
                class="mt-2"
            />
            <Input 
                v-model="Auto.marca"
                id="marca"
                titulo="Marca"
                :maxlength=60
                placeholder="Ingrese la marca"
                mensajeError=""
                :error="errorValidacion"
                class="mt-2"
            />
            <Input 
                v-model="Auto.anio"
                id="anio"
                titulo="Año"
                :maxlength=4
                placeholder="Ingrese el año"
                :error="errorValidacion && !validacionAuto"
                class="mt-2"
            />
            <Input 
                v-model="Auto.color"
                id="color"
                titulo="Color"
                :maxlength=10
                placeholder="Ingrese el color"
                class="mt-2"
            />

            <b-button type="submit" variant="primary" class="mt-3">Guardar</b-button>
        </b-form>
        <notifications position="bottom right"/> 
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import Input from '../components/Input1.vue'
export default {
name: "agregarAuto",
    components: {
        Input
    },
    data(){
        return{
            Auto: {
                modelo: "",
                marca: "",
                anio: "",
                color: ""
            },
            errorValidacion: false
        }
    },
    computed: {
        validacionAuto(){
            return(
                this.Auto.modelo !== undefined && this.Auto.modelo.trim() !== '' &&
                this.Auto.anio !== undefined && this.Auto.anio.trim() !== '' 
            )
        }
    },
    methods: {
        ...mapActions(['crearAuto']),
        guardarAuto(){
            if(this.validacionAuto){
                this.errorValidacion = false
                
                this.crearAuto({
                    params: this.Auto,
                    onComplete: (response) => {
                        console.log(response.data.mensaje)
                        this.$notify({
                            type: 'success', 
                            title: response.data.mensaje,
                        });
                    },
                    onError: (error) => {
                        console.log(error.response.data.mensaje)
                        this.$notify({
                            type: 'error', 
                            title: error.response.data.mensaje,
                        });
                    }
                })
            }else{
                this.errorValidacion = true
            }
        },
    }
}
</script>
<style>
</style>