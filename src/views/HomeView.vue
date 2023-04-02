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
