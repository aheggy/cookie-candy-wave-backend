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

// GET ALL PRODUCTS
const getOneProduct = async (id) => {
  try {
    const oneProducts = await db.one(
      "SELECT * FROM cookie_candy WHERE id=$1",
      id
    );
    return oneProducts;
  } catch (error) {
    console.error("Error fetching all cities:", error);
    return error;
  }
};




module.exports = {
  getAllProducts,
  getOneProduct,
};
