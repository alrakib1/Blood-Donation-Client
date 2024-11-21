import { Router } from "express";
import { getDivisions } from "../controllers/location.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from location route");
});

router.get("/divisions", getDivisions);

export default router;
