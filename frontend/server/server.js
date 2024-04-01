import mongoose from "mongoose";
import express from "express";
import cors from "cors";

const app = express();
const port = 3002;
app.use(cors());
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
mongoose
  .connect(
    "mongodb+srv://albertosierra101:As022499@sierratonindb.zdapufq.mongodb.net/?retryWrites=true&w=majority&appName=SierratoninDB"
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch((err) => {
    console.log("Connection Error", err);
  });
