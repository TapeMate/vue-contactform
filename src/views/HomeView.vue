<template>
  <div class="test-container">
    <!-- with @the button submit event is triggert as well -->
    <ContactForm @add-contact="onAddContact" />
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";

export default {
  name: "ContactView",
  components: {
    ContactForm,
  },
  methods: {
    onAddContact(newContact) {
      console.log(newContact);
      fetch("http://localhost:3000/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>

<style scoped>
.test-container {
  display: flex;
}
</style>
