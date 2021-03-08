const express = require("express");
const router = express.Router();
//const memberController = require("../../controllers/Member");
const productController = require("../../controllers/Product");

/**
 *  Get products
 */

router.get("/", (req, res) => res.json(product));

/**
 * Get single product
 */

router.get("/:id", productController.readProduct);

/**
 * Create product
 */
router.post("/", productController.createProduct);

/**
 * Update product
 */
router.put("/:id", productController.updateProduct);

/**
 * Delete product
 */
router.delete("/:id", productController.deleteProduct);

module.exports = router;
