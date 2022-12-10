import mongoose from "mongoose";
import { MONGOATLAS } from "./config.js";

try {
  const db = await mongoose.connect(MONGOATLAS);
  console.log("Connectado a ", db.connection.name);
} catch (error) {
  console.error(error);
}

mongoose.connection.on("connected", () => {
  console.log("Mongoose está conectado");
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose está desconectado");
});
