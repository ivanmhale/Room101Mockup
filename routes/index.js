const MongoClient = require("mongodb").MongoClient;
const url = require("../secrets").url;

module.exports = app => {

  app.get("/inventory", (req, res) => {
    MongoClient.connect(url, (err, database) => {
      if (err) throw err;

      const db = database.db("room101");

      // QUERIES

      db
        .collection("products")
        .find({})
        .toArray((err, result) => {
          res.send(result);
        });

      // /QUERIES

      database.close();
    });
  });

  app.get("/products/:category", (req, res) => {
    const category = req.params.category;

    MongoClient.connect(url, (err, database) => {
      if (err) throw err;

      const db = database.db("room101");

      // QUERIES

      db
        .collection("products")
        .find({ category })
        .toArray((err, result) => {
          res.send(result);
        });

      // /QUERIES

      database.close();
    });
  });
  app.get("/", (req, res) => {
    res.send();
  });
};
