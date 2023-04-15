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
// import { useNavigate } from 'vue-router';
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
    // const navigate = useNavigate();

    const handleSubmit = () => {
      axios
        .post('http://localhost:3001/api/authenticateOwner', { email: email.value, password: password.value })
        .then(({ data }) => {
          if (data) {
            // props.getOwner(data);
            // navigate('/OwnerInterface', { state: { id: data.data.id_owner } });
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

<style>
.formowner {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #b1b0b0;
  border-radius: 5px;
  max-width: 400px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.3);
}

.formowner h2 {
  margin-top: 0;
}

.formowner label {
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-align: left;
  width: 100%;
}

.formowner input[type="email"],
.formowner input[type="password"],
.formowner input[type="text"] {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
  box-sizing: border-box;
}

.formowner button[type="submit"],
.formowner button[type="button"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
}

.formowner button[type="submit"]:hover,
.formowner button[type="button"]:hover {
  background-color: #0069d9;
}

.formowner span {
  color: red;
  font-size: 14px;
  margin-top: 5px;
}
</style>