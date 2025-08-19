import { Router } from "express";
import {
  getAllProducts,
  createProducts,
  updateProduct,
  deleteProduct
} from "../controllers/product.controller.js"

const router = Router()

//Create
router.post("/", createProducts)
//Read
router.get("/", getAllProducts)
//Update
router.put("/:id", updateProduct)
//Delete
router.delete("/:id", deleteProduct)

export default router