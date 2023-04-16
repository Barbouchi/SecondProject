<template>
  <div>
    <form class="formclient" @submit.prevent="handleSubmit">
      <h2>Sign In For Clients</h2>
      <label>
        <!-- Email -->
        <input type="email" v-model="email" placeholder="e-mail adress ..."/>
        <span v-if="emailErrorMessage">{{ emailErrorMessage }}</span>
      </label>
      <label>
        <!-- Password -->
        <input type="password" v-model="password" placeholder="password ..."/>
        <span v-if="passwordErrorMessage">{{ passwordErrorMessage }}</span>
      </label>
      <button type="submit">Submit</button>
      <div>
        <button type="button" @click="showSignUp = true">Sign Up</button>
      </div>
    </form>
    <SignUpClient v-show="showSignUp" :key="showSignUp" />
  </div>
</template>

<script>
import axios from 'axios';
import { useNavigate } from 'vue-router';
import SignUpClient from './SignUpClient.vue';

export default {
  components: {
    SignUpClient,
  },
  data() {
    return {
      email: '',
      password: '',
      showSignUp: false,
    };
  },
  computed: {
    emailErrorMessage() {
      return this.email ? '' : 'Please enter an email';
    },
    passwordErrorMessage() {
      return this.password ? '' : 'Please enter a password';
    },
  },
  methods: {
    handleSubmit: () => {
      axios
        .post('http://localhost:3001/api/authenticateClient', {
          email: this.email,
          password: this.password,
        })
        .then(({ data }) => {
          if (data) {
            this.props.getClient(data);
            const navigate = useNavigate();
            navigate('/ClientInterface', { state: { id: data.data.idclients } });
          } else {
            console.error('Authentication failed');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style>
.formclient {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.formclient h2 {
  font-size: 24px;
  margin: 0 0 20px;
}

.formclient label {
  display: flex;
  flex-direction: column;
  margin: 10px 0;
}

.formclient input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
}

.formclient button[type="submit"] {
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.formclient button[type="submit"]:hover {
  background-color: #3e8e41;
}

.formclient button[type="button"] {
  padding: 10px;
  background-color: #2196f3;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.formclient button[type="button"]:hover {
  background-color: #0b7dda;
}

.formclient span {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>