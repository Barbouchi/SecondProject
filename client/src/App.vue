<template>
  <div id="app">
    <nav id="navbar">
      <div class="nav-wrapper">
        <router-link to="/">
          <img class='brand-logo' src="https://res.cloudinary.com/dm50agjsx/image/upload/v1681046631/ef4e66pbgf4ecwxn4yd7.png" alt="Your Logo"/> 
        </router-link>
        <ul class="nav-links">
          <li>
            <router-link to="/">
              <h3>Home</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/about">
              <h3>About</h3>
            </router-link>
          </li>
          <li>
            <router-link to="/contact">
              <h3>Contact</h3>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/Home.vue';
import About from './components/About.vue';
import Contact from './components/Contact.vue';
import OwnerInterface from './components/OwnerInterface.vue';
import ClientInterface from './components/ClientInterface.vue';
import SignInClient from './components/SignInClient.vue';
import SignInOwner from './components/SignInOwner.vue';

Vue.use(VueRouter);

const routes = {
  '/': Home,
  '/about': About,
  '/signInClient': SignInClient,
  '/signInOwner': SignInOwner,
  '/contact': Contact,
  '/ownerInterface':OwnerInterface,
  '/clientInterface':ClientInterface
}

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default {
  router,
  data() {
    return {
      client: false,
      owner: false,
    };
  },
};
</script>
