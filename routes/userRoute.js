const Router = require("express");
const Controller = require("../controller/userController");

const route = Router();

route.post("/register", Controller.Register);
route.post("/login", Controller.LoginUser);
route.get("/users", Controller.AllUser);

module.exports = route;
