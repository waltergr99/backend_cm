import mongoose from "mongoose";

const connectDB = async () => {
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI!);

    const url = `${connection.connection.host}:${connection.connection.port}`;
    console.log(`MongoDb conectado en: ${url}`);
  } catch (error: any) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
