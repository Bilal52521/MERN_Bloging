import express from "express";
import connectDB from "./congif.js";
import UserRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";

const port = 3000;
const app = express();
app.use(express.json());

// Database Connection
connectDB();

app.use("/api/user", UserRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const messageerr = err.messageerr || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    messageerr,
  });
});
