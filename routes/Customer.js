import express from "express";
import {
  getCustomer,
  CreateCustomer,
  UpdateCustomer,
  DeleteCustomer,
} from "../controllers/Customer.js";
const routes = express.Router();

routes.get("/", getCustomer);
routes.post("/", CreateCustomer);
routes.patch("/:id", UpdateCustomer);
routes.delete("/:id", DeleteCustomer);

export default routes;
