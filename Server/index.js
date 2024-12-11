import express from "express";
import connectDB from "./congif.js";
import UserRouter from "./routes/user.router.js";

const port = 3000;
const app = express();

// Database Connection
connectDB();

app.use("/api", UserRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
