const express=require("express");
const http=require("http");
const app=express();
const route=require("./routes/routes");
const mongoose=require("mongoose");
const cors=require("cors");
const bodyparser=require("body-parser");
require("dotenv").config();

app.use(cors());

mongoose.connect(process.env.MONGODB_URL,{useUnifiedTopology:true,useNewUrlParser:true})
.then(()=>console.log("DB connected"))
.catch((err)=>console.log("Error in connecting DB"));

app.use(express.static(__dirname+'/public'));

app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json())
app.set(express.urlencoded({extended:true}));
app.use("/",route);

const server=http.createServer(app);
server.listen(process.env.PORT,()=>console.log("running"));