const MongoClient = require("mongodb").MongoClient;

const url = require('./secrets').url;

MongoClient.connect(url, (err, database) => {
  if (err) throw err;

  const db = database.db("room101");

  // QUERIES

  db.collection("products").updateOne(
    { category: "necklaces/pendants" },
    {
      $set: {
        category: "pendants"
      }
    }
  );

  // /QUERIES

  database.close();
});
