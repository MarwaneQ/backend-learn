// const { log } = require("console");

// //blocking, synchronous way
// // fs module is a built-in module in Node.js that allows you to work with the file system on your computer.
// const textIn = fs.readFileSync("./text/input.txt", "utf-8");
// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// // fs writeFileSync method is used to write data to a file synchronously.
// fs.writeFileSync("./text/output.txt", textOut);
// //console.log("File written!");
// //non-blocking, asynchronous way
// fs.readFile('./text/input.txt','utf-8',(err,data)=>{
//   console.log(data);
// })
// console.log("File written!");
// creating a server and sending a response.
// const http = require("http");

// const routes = require("./routes");
// const server = http.createServer(routes.handler);
// server.listen(3000);
// const express = require("express");
// const routes = require("./routes");
// const app = express();

// app.use('/m',(req,res,next)=>{
// console.log("In another middleware!");
// res.send("<h1>Hello from Express!</h1>");
// })
// app.listen(3000);
const express = require("express"); //importing express
const path = require("path");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const bodyparser = require("body-parser");
const app = express();
app.set("view engine", "pug"); //setting view engine
app.use(bodyparser.urlencoded({ extended: false })); //parsing the body
app.use(express.static(path.join(__dirname, "public"))); //filtering path
app.use("/admin", adminRoutes.routes); //filtering path
app.use(shopRoutes);
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});
app.listen(3000);
