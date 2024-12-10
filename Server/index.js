import express from "express";
import connectDB from "./congif.js";

const port = 3000;
connectDB();


const app = express();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
