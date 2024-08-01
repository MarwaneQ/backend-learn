// const { log } = require("console");
// const fs = require("fs");
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
const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url
  if (url ==='/'){
    res.write("<html>");
  res.write("<head><title>enter message</title></head>");
  res.write("<body><form action = '/message' method='POST'><input name='message'><button type='submit'>send</button></form></body>");
  res.write("</html>");
  res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Webpage</title></head>");
  res.write("<body><h1>Hello, World!</h1></body>");
  res.write("</html>");
  res.end();
});
server.listen(3000);
