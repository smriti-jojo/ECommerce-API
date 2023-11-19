const pool = require("../config/database");
// const bcrypt = require("bcrypt");
const ProductQuery = require("../queries/productQueries/productQuery");

const getAllProduct = (req, res) => {
  pool.query(ProductQuery.getAllclothing_products, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const getAllProductById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(
    ProductQuery.getAllclothing_productsById,
    [id],
    (error, results) => {
      if (!results.rows.length) {
        res.send("Product_id not Present in database");
      } else {
        res.status(200).json(results.rows);
      }
      if (error) throw error;
    }
  );
};

const Postclothing_products = (req, res) => {
  const {
    product_id,
    image_url,
    description,
    available_sizes,
    discounted_price,
    regular_price,
  } = req.body;
  pool.query(ProductQuery.checkDescription, [product_id], (error, results) => {
    if (results.rows.length) {
      res.send("Product already Exists");
    } else {
      pool.query(
        ProductQuery.Postclothing_products,
        [
          product_id,
          image_url,
          description,
          available_sizes,
          discounted_price,
          regular_price,
        ],
        (error, results) => {
          res.status(201).send("Product created Successfully");
        }
      );
    }
  });
};

const Deleteclothing_Product = (req, res) => {
  const id = req.params.id;
  //   console.log("delete", typeof id);
  pool.query(
    ProductQuery.getAllclothing_productsById,
    [id],
    (error, results) => {
      if (!results.rows.length) {
        res.send("Product_id not Present in database");
      } else {
        pool.query(ProductQuery.DeleteProduct, [id], (error, results) => {
          if (error) throw error;
          res.send("deleted successfully");
        });
      }
    }
  );
};

// const Add_User = async(req, res) => {
//   const { username, password } = req.body;
//   const hashedPassword=await bcrypt.hash(password,10);
//   pool.query()
// };

module.exports = {
  getAllProduct,
  getAllProductById,
  Postclothing_products,
  Deleteclothing_Product,
};
