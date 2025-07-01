import mongoose from "mongoose";

let isConnected = false;

export async function connect() {
  if (isConnected) {
    console.log("reusing connection")
    return;
  }

  if (mongoose.connection.readyState >= 1) {
    console.log("reusing connection");
    isConnected = true;
    return;
  }

  try {
    await mongoose.connect(process.env.DATABASE_URL!, {
      dbName: process.env.DB_NAME,
      autoCreate: true,
    });
    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("MongoDB Connected");
      isConnected = true;
    });

    connection.on("error", (error) => {
      console.log("error on connecting to mongoDB");
      console.log(error);
      process.exit();
    });
  } catch (error) {
    console.log("something went wrong in connection to db");
    console.log(error);
  }
}
