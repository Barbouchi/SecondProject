<template>
  <form class="formaclient" @submit.prevent="handleSubmit">
    <h2>Sign Up For Clients</h2>
    <label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="text" v-model="name" />
    </label>
    <label>
      &nbsp;&nbsp;&nbsp;Last Name&nbsp;&nbsp;&nbsp;
      <input type="text" v-model="lastname" />
    </label>
    <label>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="email" v-model="email" />
    </label>
    <label>
      &nbsp;&nbsp;&nbsp;&nbsp;Password&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="password" v-model="password" />
    </label>
    <label>
      &nbsp;&nbsp;&nbsp;&nbsp; Owner ID&nbsp;&nbsp;&nbsp;&nbsp; 
      <input type="text" v-model="idowner" />
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
    const lastname = ref('');
    const email = ref('');
    const password = ref('');
    const idowner = ref('');
    const router = useRouter();
    const handleSubmit = () => {
      console.log('Submitted!');
      if (password.value.length >= 8 && lastname.value.length > 2 && name.value.length > 2) {
        fetch('http://localhost:3001/api/insertClient', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            first_name: name.value,
            last_name: lastname.value,
            email: email.value,
            password: password.value,
            store_owner_id_owner: idowner.value,
          }),
        })
          .then((response) => response.json())
          .then((data) => {
         router.push({ name: 'SignInClient' })
        })
          .catch((error) => console.log(error));
        // navigate('/signInClient');
      } else {
        alert('something wrong in the field you typed');
      }
    };
    return {
      name,
      lastname,
      email,
      password,
      idowner,
      handleSubmit,
    };
  },
};
</script>