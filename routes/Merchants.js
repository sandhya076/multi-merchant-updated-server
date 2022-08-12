import express from "express";
import {
  getMerchant,
  CreateMerchant,
  UpdateMerchant,
  DeleteMerchant,
} from "../controllers/Merchant.js";
const routes = express.Router();

routes.get("/", getMerchant);
routes.post("/", CreateMerchant);
routes.patch("/:id", UpdateMerchant);
routes.delete("/:id", DeleteMerchant);

export default routes;
