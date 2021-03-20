//const products = require("../models/Products");
const uuid = require("uuid");
const { rdb } = require("../services/firebase/firebase");

/**
 *  Read All Products
 */

exports.readProducts = (req, res) => {
  //res.json(products);
  rdb.ref("Products").once("value", (snapshot) => {
    let products = snapshot.val();
    products = Object.keys(products).map((key) => ({
      id: key,
      ...products[key],
    }));
    res.status(200).json({
      products,
    });
  });
};

/**
 *  Read Product by Id
 */

exports.readProduct = (req, res) => {
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

/**
 *  Create Product
 */

exports.createProduct = (req, res) => {
  const id = Math.floor(Math.random() * 100);
  const newProduct = {
    //id: uuid.v4(),
    //id: id,
    Headline: req.body.headline,
    Price: req.body.price,
  };

  rdb
    .ref("Products")
    .push(newProduct)
    .then((ref) => {
      res.status(201).json({
        message: "Product succesfully added",
        product: { id: ref.key, ...newProduct },
      });
    });

  /*
  if (!newProduct.name || !newProduct.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  products.push(newProduct);
  res.json(products);
  */
};

/**
 *  Update Product
 */

exports.updateProduct = (req, res) => {
  const found = products.some(
    (product) => product.id === parseInt(req.params.id)
  );

  if (found) {
    const updProduct = req.body;
    products.forEach((product) => {
      if (product.id === parseInt(req.params.id)) {
        product.headline = updProduct.headline
          ? updProduct.headline
          : product.headline;
        product.description = updProduct.description
          ? updProduct.description
          : product.description;
        res.json({ msg: "Product updated", product });
      }
    });
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id}` });
  }
};

/**
 *  Delete Product
 */

exports.deleteProduct = (req, res) => {
  const found = products.some(
    (product) => product.id === parseInt(req.params.id)
  );

  if (found) {
    del_products = products.filter(
      (product) => product.id !== parseInt(req.params.id)
    );
    res.json({
      msg: " Product deleted",
      products: del_products,
    });
  } else {
    res.status(400).json({ msg: `No product with the id of ${req.params.id}` });
  }
};
