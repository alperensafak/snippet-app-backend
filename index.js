import express from "express"
import bodyParser from "body-parser" // for parsing body of requests
import mongoose from "mongoose" // for requests to mongoDb
import cors from "cors";  //for dont be blocked requests to mongoDb
import dotenv from "dotenv"
import snippetRoutes from "./routes/snippets.js"

const app = express()

dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true })); //accept data that come with json
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true })); //middleware for parsing bodies from URL
app.use(cors()); //activated cors



app.get("/", (req,res)=>{
    res.json({
        app:"Snippet App",
        message:"Hello"
    })
})

app.use("/snippets", snippetRoutes)




const PORT = process.env.PORT || 5000;



mongoose
    .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
.then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is running on port:${PORT}`)
    })
})
.catch(error=>{
    console.error(error.message)
})