import { Router } from "express";
import {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../controllers/prduct.controller"

const router = Router()

//Create
router.post("/", createProduct)
//Read
router.get("/", getAllProducts)
//Update
router.put("/:id", updateProduct)
//Delete
router.delete("/:id", deleteProduct)

export default router