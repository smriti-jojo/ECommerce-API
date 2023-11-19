const express = require("express");
const app = express();
const route = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");

app.use(express.json());

app.use("/", route);
app.use("/", userRoute);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`app is listening on port ${port}`));
