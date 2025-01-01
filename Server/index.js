import express from "express";
import connectDB from "./congif.js";
import UserRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import errMiddleware from "./middlewares/errmiddleware.js";

const port = 3000;
const app = express();
app.use(express.json());

// Database Connection
connectDB();

app.use("/api/user", UserRouter);
app.use("/api/auth", authRouter);
app.use(errMiddleware)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
