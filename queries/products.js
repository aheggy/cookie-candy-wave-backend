const db = require("../db/dbConfig.js");

// GET ALL PRODUCTS
const getAllProducts = async () => {
  try {
    const allProducts = await db.any("SELECT * FROM cookie_candy");
    return allProducts;
  } catch (error) {
    console.error("Error fetching all cities:", error);
    return error;
  }
};

// GET ONE PRODUCTS
const getOneProduct = async (id) => {
  try {
    const oneProducts = await db.one(
      "SELECT * FROM cookie_candy WHERE id=$1",
      id
    );
    return oneProducts;
  } catch (error) {
    return error;
  }
};

//CREATE (POST)
const createProduct = async (product) => {
  try {
    const newProduct = await db.one(
      "INSERT INTO cookie_candy (product_name, product_type, calories, price, last_updated, url, is_favorite) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        product.product_name,
        product.product_type,
        product.calories,
        product.price,
        product.last_updated,
        product.url,
        product.is_favorite,
      ]
    );
    return newProduct
  } catch (error) {
    return error;
  }
};

// DELETE
const deleteProduct = async (id) => {
  try {
    const deletedProduct = await db.one(
      "DELETE FROM cookie_candy WHERE id = $1 RETURNING *",
      id
    );
    return deletedProduct
  } catch (error) {
    return error;
  }
};

// UPDATE (PUT)

const updateProduct = async (id, product) => {
    try {
      const updatedProduct = await db.one(
        "UPDATE cookie_candy SET product_name=$1, product_type=$2, calories=$3, price=$4, last_updated=$5, url=$6, is_favorite=$7 WHERE id=$8  RETURNING *",
        [
          product.product_name,
          product.product_type,
          product.calories,
          product.price,
          product.last_updated,
          product.url,
          product.is_favorite,
          id,
        ]
      );
      return updatedProduct;
    } catch (error) {
      return error;
    }
  };

module.exports = {
  getAllProducts,
  getOneProduct,
  createProduct,
  deleteProduct,
  updateProduct,
};
