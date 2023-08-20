const express = require("express");
const products = express.Router();

const { getAllProducts, getOneProduct } = require("../queries/products.js");

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
products.get("/:id", async(req, res) => {
    const { id } = req.params;
    const oneProduct = await getOneProduct(id);
    if(oneProduct) {
        res.status(200).json(oneProduct)
    } else {
        res.status(404).json({error: "This ID is not exist"})
    }
})

module.exports = products;
