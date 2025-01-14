import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/user.js";
import trainRoutes from "./routes/train.js";
import ticketRoutes from "./routes/ticket.js";
import db from "./connectMongoDB.js";

dotenv.config();
db();

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/train", trainRoutes);
app.use("/ticket", ticketRoutes )

const PORT = process.env.PORT || 80;

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
