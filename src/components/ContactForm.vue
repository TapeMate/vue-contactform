<template>
  <div class="form-container">
    <form @submit="onSubmit">
      <div class="input-control">
        <label for="contact-topic">Topic</label>
        <input
          type="text"
          v-model="topic"
          name="topic"
          id="contact-topic"
          placeholder="Type in your topic here"
        />
      </div>
      <div class="input-control">
        <label for="contact-description">Description</label>
        <textarea
          type="text"
          v-model="description"
          name="description"
          id="contact-description"
          placeholder="Type in your topic here"
        />
      </div>

      <!-- <div class="input-container">
          <div class="input-control">
            <label for="firstName">First Name</label>
            <input
              type="text"
              v-model="firstName"
              name="firstName"
              id="firstName"
              placeholder="Enter first name"
            />
          </div>
          <div class="input-control">
            <label for="lastName">Last Name</label>
            <input
              type="text"
              v-model="lastName"
              name="lastName"
              id="lastName"
              placeholder="Enter last name"
            />
          </div>
        </div>

        <div class="input-container">
          <div class="input-control">
            <label for="streetNumber">Street & Number</label>
            <input
              type="text"
              v-model="streetNumber"
              name="streetNumber"
              id="streetNumber"
              placeholder="Enter your street and housenumber"
            />
          </div>
          <div class="input-control">
            <label for="zipCity">Zipcode & City</label>
            <input
              type="text"
              v-model="zipCity"
              name="zipCity"
              id="zipCity"
              placeholder="Enter your zip code and city"
            />
          </div>
        </div> -->

      <div class="input-container">
        <div class="input-control">
          <label for="phone">Phone</label>
          <input
            type="text"
            v-model="phone"
            name="phone"
            id="phone"
            placeholder="Enter your phonenumber"
          />
        </div>
      </div>
      <div class="input-container">
        <div class="input-control">
          <label for="email">E-mail Adress</label>
          <input
            type="text"
            v-model="email"
            name="email"
            id="email"
            placeholder="Enter your email adress"
          />
        </div>
        <div class="input-control">
          <label for="verifyEmail">E-mail Verification</label>
          <input
            type="text"
            v-model="verifyEmail"
            name="verifyEmail"
            id="verifyEmail"
            placeholder="Repeat your email adress"
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      topic: "",
      description: "",
      // firstName: "",
      // lastName: "",
      // streetNumber: "",
      // zipCity: "",
      phone: "",
      email: "",
      verifyEmail: "",
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      const newContact = {
        topic: this.topic,
        description: this.description,
        // firstName: this.firstName,
        // lastName: this.lastName,
        // streetNumber: this.streetNumber,
        // zipCity: this.zipCity,
        phone: this.phone,
        email: this.email,
        verifyEmail: this.verifyEmail,
      };

      // emits data to the parent component. can be called in template.
      this.$emit("add-contact", newContact);

      // resets input values.
      this.topic = "";
      this.description = "";
      // this.firstName = "";
      // this.lastName = "";
      // this.streetNumber = "";
      // this.zipCity = "";
      this.phone = "";
      this.email = "";
      this.verifyEmail = "";
    },
  },
};
</script>

<style scoped>
#phone {
  width: 20%;
}
.blackbody {
  background: rgba(0, 0, 0, 0.4);
  padding: 1rem;
}
.input-container .input-control:nth-child(1) {
  margin-right: 15px;
}
.form-entry-info {
  background: rgba(255, 255, 255, 0.6);
  padding: 1rem 0;
  margin-bottom: 30px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
}
.form-entry-info p,
.form-entry-info h3 {
  padding: 1rem;
}
.form-container {
  /* width: 100%; */
  padding: 4% 10% 2%;
  background-image: url("../assets/slider/slider02.jpg");
  background-size: cover;
}
.input-container {
  display: flex;
}

input,
label {
  width: 80%;
  display: inline-block;
  padding: 0.5rem;
  margin: 3px;
}

textarea {
  width: 80%;
  height: 200px;
  display: inline-block;
  padding: 1rem;
  margin: 1rem;
}
.input-container label {
  text-align: right;
  height: auto;
  max-width: max-content;
  min-width: 120px;
}

.input-container .input-control {
  display: flex;
  width: 100%;
}
.input-control {
  margin-bottom: 15px;
}

input,
textarea,
label {
  border: none;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.5);
  outline: none;
}

input:focus,
textarea:focus {
  /* outline: 3px solid #bb8b73; */
  background: rgba(240, 255, 240, 0.95);
}

label {
  background: rgba(255, 255, 255, 0.8);
  font-weight: bold;
  font-size: 12px;
}

form {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  /* justify-content: space-around;
  align-items: center; */
}

button {
  width: 150px;
  height: auto;
  padding: 1rem;
  margin: 1rem;
  align-self: center;
  border: none;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.8);
  font-weight: 600;
  font-size: 20px;
  transition: 0.5s;
  border-radius: 5px;
}

button:hover {
  background: rgba(100, 255, 100, 0.8);
  border-radius: 15px;
}
</style>
