import Mongoose from "mongoose";
import customer from "../models/Customer.js";

export const getCustomer = async (req, res) => {
  try {
    const Data = await customer.find();
    res.status(200).json(Data);
  } catch (error) {
    res.status(404).json(console.log(error.message));
  }
};

export const CreateCustomer = async (req, res) => {
  const Data= req.body;
  const Newcustomer = new customer(Data);
  try {
    await Newcustomer.save();
    res.status(200).json(Newcustomer);
  } catch (error) {
    res.status(404).json(console.log(error.message));
  }
};

export const UpdateCustomer = async (req, res) => {
  const id = req.params.id;
  const Data = req.body;
  if (!Mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json(console.log("Customer Not found with that Id"));
  } else {
    const updatecustomer = await customer.findByIdAndUpdate(id, {
      ...Data,
      id,
    });
    res.status(200).json(updatecustomer);
  }
};

export const DeleteCustomer = async (req, res) => {
  const id = req.params.id;
  if (!Mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json(console.log("Customer Not found with that Id"));
  } else {
    const deletecustomer = await customer.findByIdAndRemove(id);
    res.status(200).json(deletecustomer);
  }
};
