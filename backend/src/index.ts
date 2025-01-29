import dotenv from 'dotenv';
dotenv.config();

console.log('MONGODB_URL in index.ts:', process.env.MONGODB_URL);
import app from "./app.js";
import { connectToDatabase } from "./db/connection.js";

//connections
const PORT = process.env.PORT || 3000;
connectToDatabase()
  .then(() => {
    app.listen(PORT, () => 
    console.log("Server is running on 3000 and connected to database")
  );
  })
  .catch((error) => console.log(error));