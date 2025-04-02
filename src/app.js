import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv' 
dotenv.config({
    path:"./.env"
})

const app=express()
app.use(cors())
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//comman middleware
app.use(cors(
    {
        origin:process.env.CORS_ORIGIN,
        credentials:true
    }
))
app.use(express.json({
    limit:"16kb"
}))
app.use(express.urlencoded({
    extended:true,
    limit:"16kb"
}))
app.use(express.static("public"))
//routes
import checkRoute from './routes/helthcheck.routes.js'
import MailRoute from './routes/mail.routes.js'
app.use("/api/test/v1",checkRoute)
app.use("/api/test/v1",MailRoute)
export default app