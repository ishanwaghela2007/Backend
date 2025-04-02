import mongoose from 'mongoose'
import dotenv from 'dotenv'


dotenv.config({
    path:"./.env"
})
export const connectDB=async()=>{
    try {
        const connect=await mongoose.connect(process.env.MONGO_URL)
        console.log(`mongoDB connected ${connect.connection.host}`)
    } catch (error) {
        throw new Error("error connecting to database")
        process.exit(1)
    }
}