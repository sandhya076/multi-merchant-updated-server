import Mongoose from "mongoose";

const RSSchema = Mongoose.Schema({
  FullName: String,
  Email: String,
  PhoneNo: String,
  State: String,
  Password: String,
});

const srcustomer = Mongoose.model("srcustomer", RSSchema);
export default srcustomer;
