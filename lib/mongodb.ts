import mongoose from "mongoose"

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI tidak ditemukan di .env")
}

let cached: {
  conn: typeof mongoose | null
  promise: Promise<typeof mongoose> | null
} = {
  conn: null,
  promise: null,
}

export async function connectDB() {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI, {
      bufferCommands: false,
      connectTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    })
  }

  try {
    cached.conn = await cached.promise
    console.log("MongoDB connected successfully")
  } catch (error) {
    cached.promise = null
    console.error("MongoDB connection error:", error)
    throw new Error("Failed to connect to MongoDB")
  }

  return cached.conn
}
