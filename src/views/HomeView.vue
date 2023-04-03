<template>
  <div class="test-container">
    <ContactForm @add-contact="addContact" />
    <!-- <ShowContacts /> -->
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm.vue";
// import ShowContacts from "../components/ShowContacts.vue";

export default {
  name: "HomeView",
  components: {
    ContactForm,
    // ShowContacts,
  },
  methods: {
    addContact(newContact) {
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
  flex-direction: column;
  width: 100%;
}
</style>
