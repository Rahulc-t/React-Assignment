const express=require("express")
const {mongoose}=require("mongoose")
const cors=require("cors")
const routes=require("./routes/routes")
const app=express()
const port=5000
app.use(express.json())

app.use(cors({
    origin:"http://localhost:5173"
}))

app.use("/", routes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
  mongoose.connect("mongodb://localhost:27017/CertiAPP");
  
  const database = mongoose.connection;
  
  database.on("error", (error) => {
    console.log(error);
  });
  
  database.once("connected", () => {
    console.log("Database Connected");
  });