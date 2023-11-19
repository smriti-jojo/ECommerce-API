const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "Ecommerce",
  password: "jojo09@!",
  port: 5432,
});
// pool.connect((err) => {
//   if (err) console.log("error in connection");
//   else {
//     console.log("connection successfull");
//   }
// });
// pool
//   .connect()
//   .then(() => {
//     console.log("connection successfull");
//   })
//   .catch((err) => {
//     console.log("connection failed", err);
//   });
module.exports = pool;
