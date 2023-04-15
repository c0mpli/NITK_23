const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors({ exposedHeaders: "token" }));

app.use(require("./middlewares/auth"));

// mongoose.connect("mongodb://localhost:27017/locdb",{useNewUrlParser:true},()=>{
//     console.log("Connected to Database");
// });
// mongoose.connect("mongodb+srv://admin:admin@cluster0.mw0wlrm.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser:true},()=>{
//     console.log("Connected to Database");
// });

//mongoose.connect('mongodb+srv://admin:admin@cluster0.mw0wlrm.mongodb.net/?retryWrites=true&w=majority')
mongoose.connect(
  "mongodb+srv://root:root@cluster0.uv6ej70.mongodb.net/?retryWrites=true&w=majority"
);

var db = mongoose.connection;
db.on("error", () => console.log("Error connecting to db"));
db.once("open", () => console.log("Connected to db"));

app.use("/user", require("./routes/user"));

// app.get("/test",async(req,res)=>{
//     const data=await User.findById("640c52ca56202d250b991e79");
//     res.json(data);
// })
let port = process.env.PORT;

if (port == null || port == "") {
  port = 9000;
}
app.listen(port, () => {
  console.log("Server started");
});
