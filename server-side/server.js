const express = require("express");
const app = express();
const port = 5000;
const connectDb = require("./utils/db");
const auth_router = require("./router/auth_router");

app.use(express.json());
  
app.use("/",auth_router);


connectDb();
app.listen(port, () => {
  console.log(`server is listing on port ${port}`);
});
