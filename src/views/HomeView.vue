<template>
  <div class="test-container">
    <ContactForm />
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "ContactView",
  components: {
    ContactForm,
  },
};
</script>

<style scoped>
.test-container {
  display: flex;
}
</style>

<!-- ROADMAP:
1. send data to db.json
2. verify e-mail adress
3. implement captcha
-->
