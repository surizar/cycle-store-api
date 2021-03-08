//const members = require("../Members");
const products = require("../models/product");
const uuid = require("uuid");
//const firebase = require("../firebase");

//const getFirebaseDb = require("../firebase").getDb;

exports.readProduct = (req, res) => {
  //res.send(req.params.id);
  const found = products.some(
    (product) => product.id === parseInt(req.params.id)
  );

  if (found)
    res.json(
      products.filter((product) => product.id === parseInt(req.params.id))
    );
  else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id}` });
  }
};

exports.createProduct = (req, res) => {
  //res.send(req.body);
  const newProduct = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newProduct.name || !newProduct.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  /*
  firebase.firestore().collection("times").add({
    title: "Rubiks cube",
    time_seconds: 45,
  });*/
  /*  const rdb = getFirebaseDb();
  rdb.ref("products").push({
    title: "ex",
    price: 250,
    imageUrl: "image.jpg",
  });
*/
  products.push(newProduct);
  res.json(products);
};

exports.updateProduct = (req, res) => {
  //res.send(req.params.id);
  const found = products.some(
    (product) => product.id === parseInt(req.params.id)
  );

  if (found) {
    const updProduct = req.body;
    products.forEach((product) => {
      if (product.id === parseInt(req.params.id)) {
        product.name = updProduct.name ? updProduct.name : product.name;
        product.email = updProduct.email ? updProduct.email : product.email;
        res.json({ msg: "Product updated", product });
      }
    });
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id}` });
  }
};

exports.deleteProduct = (req, res) => {
  //res.send(req.params.id);
  const found = products.some(
    (product) => product.id === parseInt(req.params.id)
  );

  if (found) {
    res.json({
      msg: " Product deleted",
      products: products.filter(
        (product) => product.id !== parseInt(req.params.id)
      ),
    });
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id}` });
  }
};
