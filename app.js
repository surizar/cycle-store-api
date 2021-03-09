const express = require("express");
const { urlencoded } = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const productRoutes = require("./routes/api/products");

const app = express();

/*
app.use(bodyParser, urlencoded({ extended: false }));
app.use(bodyParser.json());
*/
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTION, GET, POST, DELETE, PATCH, PUT"
  );
  res.setHeader("Access-Control-Allow-Header", "*");
  next();
});

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
