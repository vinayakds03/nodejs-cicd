const express = require("express");

const app = express();
app.use(express.json());

app.get("/api/health", (req, res) => {
  return res.send("Health OK!");
});

app.get("/api/user", (req, res) => {
  return res.json({ id: 1, name: "Nikhil", email: "n@test.com" });
});

app.get("/api/home", (req, res) => {
  return res.send("Welcome to API Home!, try running api routes");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("App open at port: ", PORT);
});
