const express = require("express");
const router = express.Router();
const productController = require("../../controllers/Product");

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

/**
 *  Get all products
 */

router.get("/", productController.readProducts);

module.exports = router;
