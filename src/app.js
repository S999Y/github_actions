import express from "express";
import { configs } from "./configs/config.js";

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({
    status: 200,
    message: "Server is running...",
  });
});

app.listen(configs.PORT, () => {
  console.log(`Server is running on port ${configs.PORT}`);
});
