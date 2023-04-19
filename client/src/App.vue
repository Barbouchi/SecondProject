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
    <footer class="footer">
  Copyright &copy; Kerdini 2023 
  <div class="social-icons">
    <a href="https://www.facebook.com/jasser.melki.50/" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-facebook-f"></i>
    </a>
    <a href="https://www.instagram.com/barboochitn/" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-instagram"></i>
    </a>
    <a href="https://github.com/orgs/First-Senior-Project/dashboard" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-github"></i>
    </a>
    <a href="https://discord.com/invite/8vgTUTHNQX" target="_blank" rel="noopener noreferrer">
      <i class="fab fa-discord"></i>
    </a>
  </div>
</footer>


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
