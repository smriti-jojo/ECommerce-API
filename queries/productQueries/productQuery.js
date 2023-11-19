const getAllclothing_products = "SELECT * FROM clothing_products";
const getAllclothing_productsById =
  "SELECT * FROM clothing_products WHERE product_id=$1";
const Postclothing_products =
  "INSERT INTO clothing_products(product_id,image_url, description, available_sizes, discounted_price, regular_price)VALUES($1,$2,$3,$4,$5,$6)";

const checkDescription =
  "SELECT description From clothing_products WHERE product_id=$1";

const DeleteProduct = "DELETE from clothing_products WHERE product_id=$1";

// const AddUser = "INSERT INTO users(username,password)VALUES($1,$2)";

module.exports = {
  getAllclothing_products,
  getAllclothing_productsById,
  Postclothing_products,
  checkDescription,
  DeleteProduct,
};
