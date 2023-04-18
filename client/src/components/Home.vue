<template>
    <div class="container1">
      <h1 class="tittle">Welcome to Kerdini</h1>
      <h2 id="welcome-heading">
        &nbsp;&nbsp;&nbsp;&nbsp; <br />
        Kerdini is the first free debt management platform <br />
        in the world, for business owners and their clients. <br />
        <span id="click-word">CLICK </span>
        on the photo that best represents you to get started today!
      </h2>
      <div id="option-buttons">
        <img
          class="cl"
          src="./1.png"
          alt="For client"
          @click="handleClientClick"
        />
        <img
          class="ow"
          src="./2.png"
          alt="For owner"
          @click="handleOwnerClick"
        />
      </div>
      <template v-if="selectedOption === 'client'">
        <SignInClient :get-client="getClient" :handle-sign-up-click-k="handleSignUpClickK" />
        <SignUpClient v-if="showSignUpClient" />
      </template>
      <template v-if="selectedOption === 'owner'">
        <SignInOwner :get-owner="getOwner" :handle-sign-up-click="handleSignUpClick" />
        <SignUpOwner v-if="showSignUpOwner" />
      </template>
    </div>
  </template>
  <script>
  import SignInClient from "./SignInClient.vue";
  import SignUpClient from "./SignUpClient.vue";
  import SignInOwner from "./SignInOwner.vue";
  import SignUpOwner from "./SignUpOwner.vue";
  export default {
    components: {
      SignInClient,
      SignUpClient,
      SignInOwner,
      SignUpOwner,
    },
    data() {
      return {
        selectedOption: "",
        showSignUpClient: false,
        showSignUpOwner: false,
      };
    },
    methods: {
      handleClientClick() {
        this.selectedOption = "client";
        this.showSignInClient = false;
        this.showSignUpClient = false;
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      },
      handleOwnerClick() {
        this.selectedOption = "owner";
        this.showSignInOwner = false;
        this.showSignUpOwner = false;
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });
      },
      handleSignUpClickK() {
        this.showSignUpClient = true;
      },
      handleSignUpClick() {
        this.showSignUpOwner = true;

      },
    },
  };
  </script>