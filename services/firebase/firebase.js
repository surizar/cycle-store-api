const firebaseAdmin = require("firebase-admin");
var serviceAccount = require("../../credentials/firebase/credential.json");

let rdb;

const firebaseConnect = () => {
  firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: "https://bikestoreapp-default-rtdb.firebaseio.com/",
  });
  rdb = firebaseAdmin.database();
};

const getDb = () => {
  if (rdb) return rdb;
  throw "Firebase not found";
};

exports.firebaseConnect = firebaseConnect;
exports.getDb = getDb;
