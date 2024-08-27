const mongoClient = require("mongodb").MongoClient;
let _db;
const mongoConnect = (callback) => {
  mongoClient
    .connect(
      "mongodb+srv://node-user:db-pass@cluster-0.1b4j4.mongodb.net/shop?retryWrites=true&w=majority&appName=Cluster-0"
    )
    .then((client) => {
      _db = client.db();
      console.log("Connected");
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No database found!";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;