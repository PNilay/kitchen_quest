import mongoose from "mongoose";
import chalk from "chalk";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Please define the DATABASE_URL environment variable inside .env.local");
}

let cachedConnection: typeof mongoose | null = null;

const dbConnect = async () => {
  // Checks if a connection has already been established
  if (cachedConnection) {
    return cachedConnection;
  }

  // Connect to MongoDB using Mongoose and store that connection to be used for future calls
  try {
    const options = { bufferCommands: false };
    cachedConnection = await mongoose.connect(DATABASE_URL, options);

    if (cachedConnection) {
      console.log(chalk.green.bold("\nDatabase connected successfully\n"));
    }

    return cachedConnection;
  } catch (error) {
    console.error(chalk.redBright("\nDatabase connection failed: ", error));
    throw error;
  }
}

export default dbConnect;
