import Mongoose from "mongoose";

const SRSchema = Mongoose.Schema({
  FullName: String,
  Email: String,
  PhoneNo: String,
  State: String,
  Item: String,
  Price: String,
  Password: String,
});

const srmerchants = Mongoose.model("srmerchants", SRSchema);

export default srmerchants;
