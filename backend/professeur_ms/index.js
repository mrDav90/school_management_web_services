const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const port = 8083;
const routes = require("./routes/routes");
const client = require("./config/eureka.config");
dotenv.config();
mongoose
  .connect(process.env.DATABASE_ACCESS)
  .then(() => console.log("Database is connected successfully"))
  .catch((error) => console.log(error));
//app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routes);
app.get("/status", (req, res) => {
    res.status(200).send("Service is up and running");
});
app.listen(port, console.log(`Server is running well on ${port}`));
client.start((error) => {
  if (error) {
    console.error("Erreur lors de l’enregistrement sur Eureka:", error);
  } else {
    console.log("Service enregistré sur Eureka avec succès!");
  }
});
