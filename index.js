import bodyParser from "body-parser";
import Mongoose from "mongoose";
import cors from "cors";
import express from "express";
import customer from "./routes/Customer.js";
import merchant from "./routes/Merchants.js";
const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/customer", customer);
app.use("/merchant", merchant);
const CONNECTION_URL =
  // "mongodb+srv://sandhya:sandhya@cluster0.trov7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  "mongodb+srv://sandhya:sandy@cluster0.trov7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

Mongoose.connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`server running on : ${PORT}`))
  )
  .catch((error) => console.log({ message: error.message + "this is me" }));
