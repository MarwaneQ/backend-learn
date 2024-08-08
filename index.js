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
const http = require("http");
const express = require("express");
const routes = require("./routes");
const app = express();
app.use((req,res,next)=>{
  console.log("In the middleware!");
  next(); // alows the request to continue to the next middleware in line
});
app.use((req,res,next)=>{
console.log("In another middleware!");
res.send("<h1>Hello from Express!</h1>");
})
const server = http.createServer(app);
server.listen(3000);
