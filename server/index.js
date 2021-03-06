const express = require("express");
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRouter = require("./routes/user")
const authRouter = require("./routes/auth")
const productRouter = require("./routes/product")


dotenv.config()

mongoose.connect(process.env.MONGO_URL).then(()=> console.log("DB connection successful!")).catch((err)=>{console.log(err)})





// app.get("/api/test" , ()=>{
//   console.log("Test successful")
// })


app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/products", productRouter);

app.listen(5001, ()=>{ //так же можно исспользовать process.env.PORT || 5001 но у меня не работает 
  console.log("Backend is running...")
})