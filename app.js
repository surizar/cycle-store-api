const express = require("express");
const { app } = require("firebase-admin");
const path = require("path");
const bodyParser = rquire("body-parser");
const firebaseConnect = require("./services.");

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

/*******
 * pending routes, going to sleep
 */
