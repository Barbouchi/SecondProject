<template>
  <div>
    <template v-if="showSignUp">
      <SignUpOwner />
    </template>
    <template v-else>
      <form class="formowner" @submit.prevent="handleSubmit">
        <h2>Sign In For Owners</h2>
        <label>
          <!-- &nbsp;&nbsp;&nbsp; Email&nbsp;&nbsp;&nbsp; -->
          <input type="email" required v-model="email" placeholder="e-mail adress ..."/>
          <span v-if="emailErrorMessage">{{ emailErrorMessage }}</span>
        </label>
        <label>
          <!-- Password -->
          <input type="password" required v-model="password" placeholder="password ..."/>
          <span v-if="passwordErrorMessage">{{ passwordErrorMessage }}</span>
        </label>
        <button type="submit">Submit</button>
        <div>
          <label>
            <!-- Create Account &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; -->
            <button type="button" @click="handleSignUpClick">Create Account</button>
          </label>
        </div>
      </form>
    </template>
  </div>
</template>


<script>
import SignUpOwner from './SignUpOwner.vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

export default {
  components: {
    SignUpOwner,
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
      console.log("miaow");
      axios
        .post('http://localhost:3001/api/authenticateOwner', { email: email.value, password: password.value })
        .then(({ data }) => {
          
          if (data) {
            
            if (email._value === data.data.email && password._value === data.data.password) {
              router.push({ name: 'OwnerInterface'});
              localStorage.setItem('user', JSON.stringify(data));
    } else {
      alert('Invalid username or password');
    }  
          
          } else {
            console.error('Authentication failed');
          }

          

        })
        .catch((error) => {
          console.error(error);
          emailErrorMessage.value = 'Double Check Your Email';
          passwordErrorMessage.value = 'Double Check Your Password';
        });
    };

    const handleSignUpClick = () => {
      showSignUp.value = true;
    };

    return {
      email,
      password,
      showSignUp,
      emailErrorMessage,
      passwordErrorMessage,
      handleSubmit,
      handleSignUpClick,
    };
  },
};
</script>

