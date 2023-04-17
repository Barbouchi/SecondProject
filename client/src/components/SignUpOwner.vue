<template>
  <form class="formaowner" @submit.prevent="handleSubmit">
    <h2>Sign Up For Owners</h2>
    <label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" v-model="name"  />
    </label>
    <label>
      &nbsp;&nbsp;&nbsp;Last Name&nbsp;&nbsp;&nbsp;
      <input type="text" v-model="lastName"  />
    </label>
    <label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="email" v-model="email"  />
    </label>
    <label>
      &nbsp;&nbsp;&nbsp;&nbsp;Password&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="password" v-model="password" />
    </label>
    <button type="submit">Submit</button>
  </form>
</template>
<script>
import { ref, getCurrentInstance } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default {
  setup() {
    const name = ref('');
    const lastName = ref('');
    const email = ref('');
    const password = ref('');
    const route = useRoute();
    const router = useRouter();
    const instance = getCurrentInstance();
    const handleSubmit = () => {
      if (password.value.length >= 8 && lastName.value.length > 2 && name.value.length > 2) {
        fetch('http://localhost:3001/api/insertOwner', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ first_name: name.value, last_name: lastName.value, email: email.value, password: password.value }),
        })
          .then((response) => response.json())
          .then((data) => {
           router.push({ name: 'SignInOwner' })
          })
          .catch((error) => console.log(error));
      } else {
        alert('Something is wrong with the fields you typed.');
      }
    };
    return {
      name,
      lastName,
      email,
      password,
      handleSubmit,
    };
  },
};
</script>