<template>
  <div class="container-main">
    <div class="contact-header-wrapper">
      <div class="contact-header">
        <h5>ID</h5>
      </div>
      <div class="contact-header">
        <h5>TOPIC</h5>
      </div>
      <div class="contact-header">
        <h5>PHONE</h5>
      </div>
      <div class="contact-header">
        <h5>E-MAIL</h5>
      </div>
      <div class="contact-header">
        <h5>DESCRIPTION</h5>
      </div>
      <div class="contact-header">
        <h5>DEL</h5>
      </div>
    </div>

    <div v-for="item in data" :key="item.id" class="contact-data-column">
      <div class="contact-id">
        <span>{{ item.id }}</span>
      </div>
      <div class="contact-topic">
        <span>{{ item.topic }}</span>
      </div>
      <div class="contact-phone">
        <span>{{ item.phone }}</span>
      </div>
      <div class="contact-email">
        <span>{{ item.email }}</span>
      </div>
      <div class="contact-description">
        <span>{{ item.description }}</span>
      </div>
      <div class="contact-delete">
        <i class="fas fa-times"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ShowContacts",
  data() {
    return {
      data: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => {
        this.data = data;
      });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container-main {
  width: 100%;
}
.contact-header-wrapper {
  width: 100%;
  display: grid;
  grid-template-columns: 4% 20% 10% 10% 52% 4%;
}
.contact-data-column {
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 4% 20% 10% 10% 52% 4%;
  color: white;
}
.contact-id,
.contact-topic,
.contact-phone,
.contact-email,
.contact-description,
.contact-delete {
  padding: 5px;
  border: 1px solid white;
  width: 100%;
  font-size: 12px;
}

.contact-delete i {
  color: red;
  font-size: 22px;
}

span {
  padding: 0.5rem;
}
.contact-header {
  color: tomato;
  font-size: 20px;
  border: 1px solid white;
  margin-top: 0.5rem;
  padding: 0.5rem;
}
</style>
