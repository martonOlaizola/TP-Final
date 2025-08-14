import Product from '../models/product.model'

export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find()
    res.json(products)
  } catch(err) {
    res.status(500).json({ error: "Error al obtener productos!" })
  }
}

export const createProducts = async (req, res) => {
  try {
    const newProduct = new Product(req.body)
    const saved = await newProduct.save()
    res.status(201).json(saved)
  } catch(err) {
    res.status(400).json({ error: "Error al crear el producto!" })
  }
}

export const updateProduct = async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!updated) return res.status(404).json({ error: "Producto no encontrado!" })
    res.json(updated)
  } catch(err) {
    res.status(400).json({ error: "Error al actualizar producto!" })
  }
}

export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ error: "Producto no encontrado!" })
      res.json({ message: "Producto eliminado!" })
  } catch(err) {
    res.status(500).json({ error: "Error al borrar el producto!" })
  }
}