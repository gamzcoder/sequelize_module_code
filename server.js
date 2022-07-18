const express = require("express");
const cors = require("cors");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};
//middleware
app
  .use(cors(corsOptions))
  .use(express.json())
  .use(express.urlencoded({ extended: true }));
//testing api
app.get("/", (tushar, aditya) => {
  console.log("/route id here");
  aditya.json({ message: "hello " });
});
const db = require("./models");
db.sequelize.sync();
// routes
const routes = require("./routes/route");

// function fun() {
//   console.log("-------------");
// }
app.use("/route", routes);
//port
const PORT = process.env.PORT || 8080;
//server
app.listen(PORT, () => {
  console.log(`server is running on port${PORT}`);
});
