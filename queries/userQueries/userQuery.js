const AddUser =
  "INSERT INTO users(fname, lname, mobile_no, email, password )VALUES($1,$2,$3,$4,$5)";
const Login = "SELECT * FROM users WHERE email=$1";
const GetUser = "SELECT * FROM users ORDER BY fname";
const GetUserById = "SELECT * FROM users WHERE id=$1";
module.exports = {
  AddUser,
  Login,
  GetUser,
  GetUserById,
};
