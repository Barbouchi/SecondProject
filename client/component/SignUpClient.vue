<template>
    <form class="formaclient" @submit.prevent="handleSubmit">
      <h2>Sign Up For Clients</h2>
      <label>
        <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
        <input type="text" v-model="name" placeholder="useName ..."/>
      </label>
      <label>
        <!-- &nbsp;&nbsp;&nbsp;Last Name&nbsp;&nbsp;&nbsp; -->
        <input type="text" v-model="lastname" placeholder="LastName ..."/>
      </label>
      <label>
        <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
        <input type="email" v-model="email" placeholder="e-mail adress ..."/>
      </label>
      <label>
        <!-- &nbsp;&nbsp;&nbsp;&nbsp;Password&nbsp;&nbsp;&nbsp;&nbsp; -->
        <input type="password" v-model="password" placeholder="password ..."/>
      </label>
      <label>
        <input type="text" v-model="idowner" placeholder="Your Owner ID ..."/>
      </label>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  // import { useNavigate } from 'vue-router';
  
  export default {
    setup() {
      const name = ref('');
      const lastname = ref('');
      const email = ref('');
      const password = ref('');
      const idowner = ref('');
      // const navigate = useNavigate();
  
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
            .then((data) => console.log(data))
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
  
  <style>
.formaclient {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 20px;
  width: 400px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 0 auto;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.formaclient h2 {
  margin-top: 0;
  font-size: 2rem;
}

.formaclient label {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  width: 100%;
  max-width: 300px;
  text-align: left;
}

.formaclient label input {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
}

.formaclient button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #0077cc;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
}

.formaclient button:hover {
  background-color: #005ea3;
}

</style>