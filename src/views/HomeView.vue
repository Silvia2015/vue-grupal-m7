
<script setup>
 import Navbar from '@/components/Nabvar.vue';
 import Product from '@/components/Product.vue';
</script>

<template>
  <Navbar/>
 
    <h1 class="text-center">Nuestros Productos</h1>
    <Product/>
   
  
  <input v-model="searchQuery" class="mt-5 form-control" placeholder="Buscar Productos" />
 

 
</template>