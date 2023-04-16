<template>
  <div id="app">
    <nav id="navbar">
      <div class="nav-wrapper">
        <router-link to="/home" >
          <img class='brand-logo' src="https://res.cloudinary.com/dm50agjsx/image/upload/v1681046631/ef4e66pbgf4ecwxn4yd7.png" alt="Your Logo"/> 
        </router-link>
        <ul class="nav-links">
          <li>
            <router-link to="/home"> 
              <h3>Home</h3>
            </router-link>
          </li>
          <li>
            <router-link to ="/about">
              <h3>About</h3>
            </router-link>
          </li>
          <li>
            <router-link to ="/contact">
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


export default {

  data() {
    return {
      client: false,
      owner: false,
    };
  },
}
</script>
