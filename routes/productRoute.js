const { Router } = require("express");
const controller = require("../controller/productController");

const route = Router();

route.get("/allProduct", controller.getAllProduct);
route.get("/allProduct/:id", controller.getAllProductById);
route.post("/allProduct", controller.Postclothing_products);
route.delete("/allProduct/:id", controller.Deleteclothing_Product);

module.exports = route;
