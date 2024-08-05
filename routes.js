const fs = require("fs");
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>enter message</title></head>");
    res.write(
      "<body><form action = '/message' method='POST'><input name='message'><button type='submit'>send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/message" && method === "POST") {
    //Initialize an Array to Collect Data:
    const body = [];
    //Collect Incoming Data:
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
      //The req.on("data", ...) event listener listens for incoming data chunks. Each time a chunk of data is received, it's pushed into the body array. The console.log(chunk); statement logs each chunk to the console.
    });
    //Handle End of Data Reception:
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFileSync("message.txt", message);
      //       The req.on("end", ...) event listener executes when all data has been received. Here's what happens inside this event handler:
      // Buffer.concat(body).toString(): Concatenates all data chunks into a single buffer and converts it to a string.
      // parsedBody.split("=")[1]: Splits the parsed body string at the equal sign (=) and retrieves the second part (the message content).
      // fs.writeFileSync("message.txt", message): Writes the message to a file named message.txt using the fs module's writeFileSync method.
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My Webpage</title></head>");
  res.write("<body><h1>Hello, World!</h1></body>");
  res.write("</html>");
  res.end();
};
// module.exports = requestHandler;
// module.exports = {
//   handler: requestHandler,
//   someText: "Some hard coded text
// };
// module.exports.handler = requestHandler;
// module.exports.someText = "Some hard coded text";
exports.handler = requestHandler;
exports.someText = "Some hard coded text";
