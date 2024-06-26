import express from "express";
import cors from "cors";
import userRoutes from "./routes/users.js";

const server = express();

server.use(express.json());
server.use(cors());

server.use("/", userRoutes);

server.listen(8800);