const MongoClient = require("mongodb").MongoClient;
const ObjectId = require("mongodb").ObjectId;

const getUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.URL;
  } else {
    return require("../secrets").url;
  }
};
const url = getUrl();

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

  app.get("/item/:id", (req, res) => {
    const id = req.params.id;
    console.log(id);

    MongoClient.connect(url, (err, database) => {
      if (err) throw err;

      const db = database.db("room101");

      // QUERIES

      db
        .collection("products")
        .findOne({ _id: ObjectId(id) }, (err, result) => {
          if (err) throw err;
          res.send(result);
        });

      // /QUERIES

      database.close();
    });
  });
};
