import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT;

if (!PORT) {
  console.log("PORT is not defined in .env");
}

export const configs = {
  PORT,
};
