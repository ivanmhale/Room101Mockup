const express = require('express');

const app = express();
require('./routes')(app);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const port = process.env.PORT || 5000;

app.listen(port);
