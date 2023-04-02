<template>
  <div>
    <h1>Data Output:</h1>
    <ul>
      <li v-for="item in data" :key="item.id">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Data",
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
div {
  padding: 1rem;
}
h1,
li {
  margin-bottom: 20px;
}
h1,
ul,
li {
  color: beige;
}
</style>
