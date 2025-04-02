import app from "./app.js";
import dotenv from "dotenv"
import { connectDB } from "./db/index.js";
dotenv.config({
    path:"./.env"
})
const port=process.env.PORT || 3001
try {
    connectDB()
    app.listen(port,()=>{
        console.log(`server is running on port ${port}`)
    })
} catch (error) {
   throw new Error("error connecting to database")
}