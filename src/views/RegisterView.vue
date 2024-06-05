<script setup>

import { useForm, useField } from 'vee-validate'; 
import { registerSchema  } from '@/validation/registerSchema'; 
import { useRouter } from 'vue-router'; 
import { useStore } from 'vuex'; 
import { computed } from 'vue'; 


const store = useStore();


const { handleSubmit }= useForm({registerSchema});
const email = useField('email');
const password = useField('password');
const confirmPassword = useField('confirmPassword');


const router = useRouter();


const submit = handleSubmit( values => {
  store.dispatch('register',{...values, router})
})


const hasError = computed(() => store.state.errorMsg)
</script>

<template>
  
  <div class="container mt-5">
    <div class="row">
      <div class="col-12 offset-sm-3 col-sm-6">
        <h1 class="text-center">Registro</h1>

        <form class="p-4 shadow">
          <div v-if="hasError" class="alert alert-danger" role="alert">
             {{ store.state.errorMsg }}
          </div>

          
          <div class="mb-3">
            <label for="email" class="form-label">Correo Eletronico: </label>
            <input 
              type="email" 
              class="form-control" 
              id="email" 
              v-model="email.value.value"
              :class="{'is-invalid': email.errorMessage.value ? true: false }"
              required>
            <div v-if="email.errorMessage" id="emailHelp" class="text-danger form-text">{{ email.errorMessage.value }}</div>
          </div>

          
          <div class="mb-3">
            <label for="password" class="form-label">Contraseña: </label>
            <input 
              type="password" 
              class="form-control" 
              id="password" 
              v-model="password.value.value"
              :class="{'is-invalid': password.errorMessage.value ? true: false }"
              required>
            <div v-if="password.errorMessage" id="passwordHelp" class="text-danger form-text">{{ password.errorMessage.value }}</div>
          </div>

          
          <div class="mb-3">
            <label for="confirmPassword" class="form-label">Confirmar Contraseña: </label>
            <input 
              type="password" 
              class="form-control" 
              id="confirmPassword" 
              v-model="confirmPassword.value.value"
              :class="{'is-invalid': confirmPassword.errorMessage.value ? true: false }"
              required>
            <div v-if="confirmPassword.errorMessage" id="confirmPasswordHelp" class="text-danger form-text">{{ confirmPassword.errorMessage.value }}</div>
          </div>

       
          <button type="submit" class="btn btn-dark w-100" @click="submit">Registrarse</button>
        </form>

      </div>
    </div>
  </div>
</template>