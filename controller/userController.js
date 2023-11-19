const pool = require("../config/database");
const bcrypt = require("bcrypt");
const userQuery = require("../queries/userQueries/userQuery");
const jwt = require("jsonwebtoken");

const Register = async (req, res) => {
  const { fname, lname, mobile_no, email, password } = req.body;
  let EnterPassword = password.toString();
  const hashedPassword = await bcrypt.hash(EnterPassword, 10);
  pool.query(
    userQuery.AddUser,
    [fname, lname, mobile_no, email, hashedPassword],
    (error, results) => {
      if (error) throw error;
      res.status(200).send("User Registered Successfully");
    }
  );
};

const LoginUser = (req, res) => {
  const { email, password } = req.body;

  pool.query(userQuery.Login, [email], async (error, results) => {
    // if (error) throw error;
    // if (results.rows.length) {
    //   res.send("user found");
    // }
    try {
      let user = results.rows[0];
      let Enterpassword = password.toString();
      if (!user || !(await bcrypt.compare(Enterpassword, user.password))) {
        res.status(401).json({ message: "Invalid Credentials" });
      } else {
        const token = jwt.sign({ userId: user.id }, "your-secret-key", {
          expiresIn: "1h",
        });
        res.json({ token });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error logging in" });
    }
  });
};

const AllUser = (req, res) => {
  pool.query(userQuery.GetUser, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};
module.exports = { Register, LoginUser, AllUser };
