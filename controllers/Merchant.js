import Mongoose  from "mongoose";
import Merchant from "../models/Merchant.js";

export const getMerchant = async (req, res) => {
  try {
    const Data = await Merchant.find();
    res.status(200).json(Data);
  } catch (error) {
    res.status(404).json(console.log(error.message));
  }
};

export const CreateMerchant = async (req, res) => {
  const Data = req.body;
  const NewMerchant = new Merchant(Data);
  try {
    await NewMerchant.save();
    res.status(200).json(NewMerchant);
  } catch (error) {
    res.status(404).json(console.log(error.message));
  }
};
export const UpdateMerchant = async (req, res) => {
  const id = req.params.id;
  const Data = req.body;

  if (!Mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json(console.log({ message: error.message }));
  } else {
    const Updatemerchant = await Merchant.findByIdAndUpdate(id, {
      ...Data,
      id,
    });
  }
};
export const DeleteMerchant = async (req, res) => {
  const id = req.params.id;
  if (!Mongoose.Types.ObjectId.isValid(id)) {
    res.status(404).json(console.log("There is No Merchant with That Id"));
  } else {
    await Merchant.findByIdAndRemove(id);
    res.status(200).json(console.log("Merchant Deleted Successfully"));
  }
};
