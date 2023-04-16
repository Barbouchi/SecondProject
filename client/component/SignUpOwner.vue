<template>
    <form class="formaowner" @submit.prevent="handleSubmit">
      <h2>Sign Up For Owners</h2>
      <label>
        <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Name&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
        <input type="text" v-model="name" placeholder="userName..."/>
      </label>
      <label>
        <!-- &nbsp;&nbsp;&nbsp;Last Name&nbsp;&nbsp;&nbsp; -->
        <input type="text" v-model="lastName" placeholder="lastName ..."/>
      </label>
      <label>
        <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
        <input type="email" v-model="email" placeholder="email..."/>
      </label>
      <label>
        <!-- &nbsp;&nbsp;&nbsp;&nbsp;Password&nbsp;&nbsp;&nbsp;&nbsp; -->
        <input type="password" v-model="password" placeholder="password..."/>
      </label>
      <button type="submit">Submit</button>
    </form>
  </template>
  
  <script >
  // import { useNavigate } from 'vue-router';
  import { ref } from 'vue';
  
  export default {
    setup() {
      const name = ref('');
      const lastName = ref('');
      const email = ref('');
      const password = ref('');
      // const navigate = useNavigate();
  
      const handleSubmit = () => {
        if (password.value.length >= 8 && lastName.value.length > 2 && name.value.length > 2) {
          fetch('http://localhost:3001/api/insertOwner', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ first_name: name.value, last_name: lastName.value, email: email.value, password: password.value }),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((error) => console.log(error));
  
          // navigate('/signInOwner');
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
  
  <style>
  .formaowner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px auto;
  padding: 20px;
  width: 400px;
  border: 2px solid #ccc;
  border-radius: 5px;
  max-width: 500px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.formaowner h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

.formaowner label {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 100%;
}

.formaowner label input {
  margin-top: 5px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
}

.formaowner button[type="submit"] {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  margin-top: 20px;
  cursor: pointer;
}

.formaowner button[type="submit"]:hover {
  background-color: #0069d9;
}
</style>