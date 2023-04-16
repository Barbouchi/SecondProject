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

