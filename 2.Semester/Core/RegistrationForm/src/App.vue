<template>
  <form class="max-w-md mx-auto mt-8">
    <h2 class="text-xl font-bold mb-4">Create an Account</h2>

    <input
        type="text"
        placeholder="First Name"
        class="input"
        v-model="firstName"
    />
    <span v-if="v$.firstName.$error">
        {{ v$.firstName.$errors[0].$message }}
    </span>

    <input
        type="text"
        placeholder="Last Name"
        class="input mt-4"
        v-model="lastName"
    />
    <span v-if="v$.lastName.$error">
        {{ v$.lastName.$errors[0].$message }}
    </span>

    <input
        type="email"
        placeholder="Email"
        class="input mt-4"
        v-model="userEmail"
        autocomplete="username"
    />
    <span v-if="v$.userEmail.$error">
        {{ v$.userEmail.$errors[0].$message }}
    </span>

    <input
        type="date"
        placeholder="Birthday"
        class="input mt-4"
        v-model="birthday"
    />
    <span v-if="v$.birthday.$error">
        {{ v$.birthday.$errors[0].$message }}
    </span>

    <input
        type="tel"
        placeholder="Phone Number (optional)"
        class="input mt-4"
        v-model="phoneNumber"
    />
    <span v-if="v$.phoneNumber.$error">
        {{ v$.phoneNumber.$errors[0].$message }}
    </span>

    <input
        type="password"
        placeholder="Password"
        class="input mt-4"
        v-model="password"
        autocomplete="new-password"
    />
    <span v-if="v$.password.$error">
        {{ v$.password.$errors[0].$message }}
    </span>

    <input
        type="password"
        placeholder="Confirm Password"
        class="input mt-4"
        v-model="confirmPassword"
        autocomplete="new-password"
    />
    <span v-if="v$.confirmPassword.$error">
        {{ v$.confirmPassword.$errors[0].$message }}
        <br>
    </span>

    <button
        @click.prevent="submitForm"
        class="bg-blue-500 text-white font-bold py-2 px-4 rounded mt-4"
    >
      Submit
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, sameAs, numeric } from '@vuelidate/validators'

let firstName = ref('')
let lastName = ref('')
let userEmail = ref('')
let birthday = ref('')
let phoneNumber = ref('')
let password = ref('')
let confirmPassword = ref('')

const rules = {
  firstName: { required, $autoDirty: true },
  lastName: { required, $autoDirty: true },
  userEmail: { required, email, $autoDirty: true },
  birthday: { required, $autoDirty: true },
  phoneNumber: { $autoDirty: true}, /* numeric, */
  password: { required, minLength: minLength(3), $autoDirty: true },
  confirmPassword: { required, sameAsPassword: sameAs(password), $autoDirty: true },
}

const v$ = useVuelidate(rules, { firstName, lastName, userEmail, birthday, phoneNumber, password, confirmPassword })

const submitForm = () => {
  v$.value.$validate()
  if (!v$.value.$error) {
    console.log('Form successfully submitted.')
    // Reset input fields
    /*
    firstName.value = ''
    lastName.value = ''
    userEmail.value = ''
    birthday.value = ''
    phoneNumber.value = ''
    password.value = ''
    confirmPassword.value = ''
     */
  } else {
    console.log('Form failed validation')
    console.log(v$.value.$errors)
  }
}
</script>

<style scoped>
.input {
  @apply block w-full border border-gray-300 rounded py-2 px-4;
}
</style>
