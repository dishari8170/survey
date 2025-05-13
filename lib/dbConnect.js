import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://dishari:8170@d.mj27p.mongodb.net/Survey?retryWrites=true&w=majority";
// const mo = "";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable inside .env.local");
}


let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      // bufferCommands: false,
     useNewUrlParser: true
    };

    cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {

      console.log("db connected")
      return mongoose;


    });
  }
  cached.conn = await cached.promise;

  return cached.conn;
}

export default dbConnect;
