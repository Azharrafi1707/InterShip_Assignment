import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/authRoute.js";
import productRoute from "./routes/productRoute.js";
import cors from "cors"
import path from "path"
//dotenv
dotenv.config();


const app=express();

// // deployment

// const __dirname1 = path.resolve();

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(path.join(__dirname1, "/frontend/build")));

//   app.get("*", (req, res) =>
//     res.sendFile(path.resolve(__dirname1, "frontend", "build", "index.html"))
//   );
// } else {
//   app.get("/", (req, res) => {
//     res.send("API is running..");
//   });
// }

// // deployment
//middleware
app.use(cors());
app.use(express.json());
//routes
app.use("/api/v1/auth",authRoute);
app.use("/api/v1/product",productRoute);

//Database connection
mongoose.connect(process.env.DB_URL).then((data)=>{
    console.log(`Mongodb connected with server ${data.connection.host}`);
}).catch((err)=>console.log(err));

//Server Creation 
const PORT=process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});


