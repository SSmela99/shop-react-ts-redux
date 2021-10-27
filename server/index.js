import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const config = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const app = express();

app.use(
  express.urlencoded({
    limit: "100mb",
    extended: true,
  })
);

app.use(
  express.json({
    limit: "100mb",
    extended: true,
  })
);

app.use(cors());

mongoose
  .connect(process.env.CONNECTION_URL, config)
  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`server is running on port ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error.message));
