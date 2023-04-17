<template>
  <div>
    <!-- Show SignUpClient component instead of formclient when showSignUp is true -->
    <SignUpClient v-if="showSignUp" />
    <form class="formclient" @submit.prevent="handleSubmit" v-else>
      <h2>Sign In For Clients</h2>
      <label>
        <!-- Email -->
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="email" v-model="email"/>
        <span v-if="emailErrorMessage">{{ emailErrorMessage }}</span>
      </label>
      <label>
        <!-- Password -->
        &nbsp;&nbsp;&nbsp;&nbsp;Password&nbsp;&nbsp;&nbsp;&nbsp;
        <input type="password" v-model="password" />
        <span v-if="passwordErrorMessage">{{ passwordErrorMessage }}</span>
      </label>
      <button type="submit">Submit</button>
      <div>
          <label>
            <!-- Set showSignUp to true when the "Create Account" button is clicked -->
            <button type="button" @click="showSignUp = true">Create Account</button>
          </label>
        </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import SignUpClient from './SignUpClient.vue';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  components: {
    SignUpClient,
  },
  setup() {
    const email = ref('');
    const password = ref('');
    const showSignUp = ref(false);
    const emailErrorMessage = ref('');
    const passwordErrorMessage = ref('');
    const route = useRoute();
    const router = useRouter();
    const handleSubmit = () => {
      axios
        .post('http://localhost:3001/api/authenticateClient', {
          email: email.value,
          password: password.value,
        })
        .then(({ data }) => {
          if (data) {
            router.push({ name: 'ClientInterface', params: { idclients: data.data.idclients } });
            localStorage.setItem('user', JSON.stringify(data));
          } else {
            console.error('Authentication failed');
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    return {
      email,
      password,
      showSignUp,
      emailErrorMessage,
      passwordErrorMessage,
      handleSubmit,
    };
  },
};
</script>