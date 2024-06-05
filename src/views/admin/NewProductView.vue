<script setup>
</script>

<template>
    <div class="container">
      <div class="row">
        <div class="offset-3 col-6">
          <h2>Nuevo Producto</h2>
  
          <form>
            <div class="mb-3">
              <label for="nombre" class="form-label">Nombre</label>
              <input type="text" class="form-control" id="nombre"  required>
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Imagen</label>
              <input type="file" class="form-control" id="imagen" required>
            </div>
  
           
  
  
            <div class="mb-3">
              <label for="precio" class="form-label">Precio</label>
              <input type="number" class="form-control" id="precio" required>
            </div>
            <div class="mb-3">
              <label for="stock" class="form-label">Stock</label>
              <input type="number" class="form-control" id="stock"  required>
            </div>
         
              <button type="submit" class="btn btn-dark" >Guardar <i class="fa-solid fa-floppy-disk"></i></button>
           
  
          </form>
        </div>
      </div>
  
    </div>
  </template>

<style>

</style>
<!--
v-model="nombre.value.value"
@change="uploadImage" 
 <div class="mb-3" v-if="image">
              <img :src="image" class="img-thumbnail rounded mx-auto d-block" alt="imagen producto" width="150">
            </div>
 v-model="precio.value.value"
 v-model="stock.value.value"
  <label for="caracteristicas" class="form-label">Características</label>
              <div v-for="(caracteristica, index) in caracteristicas" :key="index" class="d-flex mb-2">
                <input type="text" class="form-control me-2" v-model="caracteristica.key" placeholder="Característica"
                  required>
                <input type="text" class="form-control me-2" v-model="caracteristica.value" placeholder="Valor" required>
                <button type="button" class="btn btn-danger" @click="removeCaracteristica(index)"><i
                    class="fa-solid fa-trash"></i></button>
                     </div>
                        <div class="mb-3">
                            @click="submit"
             
             
  
            </div>
            <div class="d-grid gap-2">
              <button type="button" class="btn btn-dark" @click="addCaracteristica">Agregar Caracteristica <i
                  class="fa-solid fa-plus"></i></button>

-->