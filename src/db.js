import mongoose from "mongoose"

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI)
  } catch (error) {
    console.error(`Error al conectar a MongoDB: ${error.message}`)
    process.exit(1)
  }
}

export default connectDB