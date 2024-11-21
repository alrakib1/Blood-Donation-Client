import { Router } from "express";
import {
  createDistrict,
  createDivision,
  getDistricts,
  getDivisions,
} from "../controllers/location.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from location route");
});

router.route("/divisions").get(getDivisions).post(createDivision);
router.route("/districts").get(getDistricts).post(createDistrict);

export default router;
