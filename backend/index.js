const express= require("express");

const app= express();

const mongoose= require("mongoose");

const useRoutes= require("./routes/subscription")

const cors= require("cors")

const cookieParser= require("cookie-parser")

require("dotenv").config();
 
const path= require("path")
mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on("error", (error) => {
  console.error("MongoDB connection error:", error);
});

db.once("open", () => {
  console.log("MongoDB connected ");
});


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 app.use(
  cors({
    origin: "*", // Set to * to allow any origin
    credentials: true,
  })
);


 

app.use("/", useRoutes);
 

 



app.listen(5000, (err) => {
  if (err) {
    console.log("fail server", err);
  }
  console.log("Successfully running 500" );
});

 
 
