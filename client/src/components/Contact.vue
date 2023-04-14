<template>
    <div class="contact-us">
      <h2 class='contact-title'>Contact Us</h2>
      <form @submit.prevent="handleSubmit">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required />
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required />
        <label for="message">Message</label>
        <textarea id="message" v-model="message" rows="6" required></textarea>
        <button type="submit">Send Message</button>
      </form>
      <p v-if="successMessage">{{ successMessage }}</p>
      <p>Or email us at <a href="mailto:kerdili@rbk.com">kerdini@contact.com</a></p>
    </div>
  </template>
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        message: '',
        successMessage: ''
      }
    },
    methods: {
      handleSubmit() {
        const newInquiry = {
          name: this.name,
          email: this.email,
          inquiry: this.message
        };
        fetch('http://localhost:3001/api/insertInquiry', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newInquiry)
        })
        .then(response => {
          if (response.ok) {
            console.log('Inquiry posted successfully!');
            this.successMessage = 'Hooray! Your inquiry has been submitted successfully. We will be sure to follow up with you shortly.';
            this.name = '';
            this.email = '';
            this.message = '';
          } else {
            console.log('Failed to post inquiry!');
          }
        })
        .catch(error => console.error(error));
      }
    }
  }
  </script>