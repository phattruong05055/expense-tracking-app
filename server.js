const express = require("express");
const cors = require("cors");
const app = express();
const routes = require("./Routes/index");
const PORT = process.env.SERVER_PORT || 3001;

app.use(cors("*"));

app.use("/api/v1", routes);

app.get("/", (req, res) => {
  res.send("Welcome to expense app");
});

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
