import jsonData from "../../db.json";

const express = required("express");
const app = express();

// JSON data
const data = jsonData.contacts;
console.log(jsonData, data);

// Route to serve JSON
app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server listening on port 3030");
});
