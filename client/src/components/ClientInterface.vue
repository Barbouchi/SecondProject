<template>
  <div>
    <button class="logoutclient" @click="handleLogOut">LogOut</button>
    <div>
      <div v-if="isLoading">Loading... </div>
      <div v-else class="cardd">
        <div class="popa">
          <div v-if="message" class="popup">
            <h1>{{ message }}</h1>
            <button class="pop" @click="handlePopClick">
              OK
              <span class="pop-dot"></span>
            </button>
          </div>
        </div>
        <div class="client-interface">
          <h1 class="client-name">{{ user.first_name }} {{ user.last_name }}</h1>
          <p class="client-email">Email: {{ user.email }}</p>
          <p class="client-debt">Debt: {{ user.balance }}</p>
       
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    idclients: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      user: {},
      isLoading: true,
      message: null,
    };
  },
  created() {
    this.fetchData();
  },
  watch: {
    user() {
      if (this.user && this.user.balance >= 500000) {
        this.message = "Overdue debt, Payment required for exceeded limit.";
      }
    },
  },
  methods: {
    async fetchData() {
      try {
        const response = await axios.get(`http://localhost:3001/api/getOne/${this.idclients}`);
        this.user = response.data[0];
        this.isLoading = false;
      } catch (error) {
        console.error(error);
        this.isLoading = false;
      }
    },
    handleLogOut() {
      this.$router.push("/Home");
    },
    handlePopClick() {
      const audio = new Audio("./alo.mp3");
      audio.play();
      this.message = null;
    },
  },
};
</script>
