const express = require("express");
const { app } = require("firebase-admin");
const path = require("path");
const bodyParser = rquire("body-parser");
//const firebaseConnect = require("./services");

const productRoutes = require("./routes/api/products");

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

app.use("/api/members", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
