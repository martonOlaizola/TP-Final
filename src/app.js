import express from "express"
import router from "./routes/product.routes"

const app = express()

app.use(express.json)

app.use('/api/products', router)

export default app