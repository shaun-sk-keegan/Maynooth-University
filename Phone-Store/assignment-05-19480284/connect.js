const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://user1:user1@mongodb.com:27017/phonestore";

const client = new MongoClient(uri, { useNewUrlParser: true });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});