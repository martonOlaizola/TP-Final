import productSchema from "../models/product.model"

export const getAllProducts = async (req, res) => {
  try {
    const products = await productSchema.find()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: "Error al obtener productos." })
  }
}

export const createProduct = async (req, res) => {
  try {
    const newProduct = new productSchema(req.body)
    const saved = await newProduct.save()
    res.status(201).json(saved)
  } catch (error) {
    res.status(400).json({ error: "Error al crear el producto." })
  }
}

export const updateProduct = async (req, res) => {
  try{
    const updated = await productSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updated) return res.status(404).json({ error: "Producto no encontrado" })
    res.json(updated)
  } catch (error) {
    res.status(400).json({ error: "Error al actualizar el producto" })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await productSchema.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: "Producto no encontrado." })
    res.json(deleted)
  } catch (error) {
    res.status(500).json({ error: "Error al borrar producto." })
  }
}