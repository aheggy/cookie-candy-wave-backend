const express = require("express");
const products = express.Router();

const {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../queries/products.js");

//INDEX
products.get("/", async (req, res) => {
  const allProducts = await getAllProducts();
  if (allProducts[0]) {
    res.status(200).json(allProducts);
  } else {
    res.status(404).json({ error: "server error" });
  }
});

//SHOW
products.get("/:id", async (req, res) => {
  const { id } = req.params;
  const oneProduct = await getOneProduct(id);
  if (oneProduct) {
    res.status(200).json(oneProduct);
  } else {
    res.status(404).json({ error: "This ID is not exist" });
  }
});

// CREATE (POST)
products.post("/", async (req, res) => {
  try {
    const newProduct = await createProduct(req.body);
    res.json(newProduct);
  } catch (error) {
    res.status(404).json({ error: "server error" });
  }
});

// DELETE
products.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await deleteProduct(id);
  if (deletedProduct) {
    res.status(200).json(deletedProduct);
  } else {
    res.status(404).json({ error: "server error" });
  }
});

// UPDATED (PUT)

products.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedProduct = await updateProduct(id, req.body);
//   if (updatedProduct) {
    res.status(200).json(updatedProduct);
//   } else {
//     res.status(404).json({ error: "server error" });
//   }
});

module.exports = products;
