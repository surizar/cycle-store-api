const firebaseAdmin = require("firebase-admin");
var serviceAccount = require("../../credentials/firebase/credential.json");

firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(serviceAccount),
  databaseURL: "https://bikestoreapp-default-rtdb.firebaseio.com/",
});

const firebaseDatabase = firebaseAdmin.database();

module.exports = {
  rdb: firebaseDatabase,
};
