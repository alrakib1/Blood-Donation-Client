import express from "express";
import locationRouter from "./routes/location.route.js";

const app = express();


app.use(express.json());


app.use('/api/v1', locationRouter);

export default app;
