import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config(); //process.env.key 에 .env 파일들이 저장됨.
mongoose.connect(
  process.env.MONGO_URL,
    {
    userNewUrlParser: true,
    userFindAndMotify: false
    }
  );

  const db = mongoose.connection;
  
  const handleOpen = () =>console.log("✅ Connected to DB")
  const handleError = (error) => console.log(`❌ Error on DB Connection:${error}`)
  db.once("open",handleOpen);
  db.on("error",handleError);