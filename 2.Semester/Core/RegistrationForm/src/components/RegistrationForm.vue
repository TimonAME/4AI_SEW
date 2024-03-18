<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">Registration Form</h1>
    <form @submit.prevent="submitForm">
<div class="mb-4">
        <label for="firstname" class="block text-gray-700 text-sm font-bold mb-2">First Name*</label>
        <input v-model.trim="$v.firstname.$model" type="text" name="firstname" id="firstname" :class="{ 'border-red-500': $v.firstname.$error }" class="appearance
-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <span v-if="!$v.firstname.required && $v.firstname.$dirty" class="text-red-500 text-xs italic">First Name is required</span>
      </div>
      <div class="mb-4">
        <label for="lastname" class="block text-gray-700 text-sm font-bold mb-2">Last Name*</label>
        <input v-model.trim="$v.lastname.$model" type="text" name="lastname" id="lastname" :class="{ 'border-red-500': $v.lastname.$error }" class="appearance
-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <span v-if="!$v.lastname.required && $v.lastname.$dirty" class="text-red-500 text-xs italic">Last Name is required</span>
      </div>
      <div class="mb-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2">Email*</label>
        <input v-model.trim="$v.email.$model" type="email" name="email" id="email" :class="{ 'border-red-500': $v.email.$error }" class="appearance-none border
rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <span v-if="!$v.email.required && $v.email.$dirty" class="text-red-500 text-xs italic">Email is required</span>
        <span v-if="!$v.email.email && $v.email.$dirty" class="text-red-500 text-xs italic">Invalid email</span>
      </div>
      <div class="mb-4">
        <label for="password" class="block text-gray-700 text-sm font-bold mb-2">Password*</label>
        <input v-model.trim="$v.password.$model" type="password" name="password" id="password" :class="{ 'border-red-500': $v.password.$error }" class="appearanc
e-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <span v-if="!$v.password.required && $v.password.$dirty" class="text-red-500 text-xs italic">Password is required</span>
        <span v-if="!$v.password.minLength && $v.password.$dirty" class="text-red-500 text-xs italic">Password must have at least 6 characters</span>
      </div>
      <div class="mb-4">
        <label for="passwordConfirmation" class="block text-gray-700 text-sm font-bold mb-2">Password Confirmation*</label>
        <input v-model.trim="$v.passwordConfirmation.$model" type="password" name="passwordConfirmation" id="passwordConfirmation" :class="{ 'border-red-500': $v
.passwordConfirmation.$error }" class="appearance
-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
        <span v-if="!$v.passwordConfirmation.required && $v.passwordConfirmation.$dirty" class="text-red-500 text-xs italic">Password Confirmation is required</span>
        <span v-if="!$v.passwordConfirmation.sameAsPassword && $v.passwordConfirmation.$dirty" class="text-red-500 text-xs italic">Password Confirmation must match
  Password</span>
      </div>
      <button :disabled="$v.$invalid" type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :class="{ 'opacity-50 cursor-not-allowed': $v.$invalid }">Register</button>

    </form>
  </div>
</template>

<script setup>
import { required, email, minLength, sameAs } from 'vuelidate/lib/validators';
import { ref } from 'vue';

const firstname = ref('');
const lastname = ref('');
const email = ref('');
const password = ref('');
const passwordConfirmation = ref('');

const validations = {
  firstname: { required },
  lastname: { required },
  email: { required, email },
  password: { required, minLength: minLength(6) },
  passwordConfirmation: { required, sameAsPassword: sameAs('password') }
};

const submitForm = () => {
  console.log('Form submitted!');
}

import { useVuelidate } from '@vuelidate/core';
const v$ = useVuelidate(validations, { firstname, lastname, email, password, passwordConfirmation });



</script>