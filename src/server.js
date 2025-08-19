import "dotenv/config.js"
import connectDB from "./db.js"
import app from "./app.js"

const PORT = process.env.PORT || 3000

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${Number(PORT)}`)
  })
})