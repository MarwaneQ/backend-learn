const mongoClient = require("mongodb").MongoClient;
const mongoConnect = (callback) => {
  mongoClient
    .connect(
      "mongodb+srv://node-user:db-pass@cluster-0.1b4j4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster-0"
    )
    .then((client) => {
      console.log("Connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = mongoConnect;
