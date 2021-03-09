const products = require("../models/Products");
const uuid = require("uuid");

/**
 *  Read All Products
 */

exports.readProducts = (req, res) => {
  res.json(products);
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
  const newProduct = {
    id: uuid.v4(),
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };

  if (!newProduct.name || !newProduct.email) {
    return res.status(400).json({ msg: "Please include a name and email" });
  }

  products.push(newProduct);
  res.json(products);
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
