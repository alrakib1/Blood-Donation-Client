import { Router } from "express";
import {
  createDistrict,
  createDivision,
  createUpazila,
  getDistricts,
  getDivisions,
  getUpazila,
} from "../controllers/location.controller.js";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello from location route");
});

router.route("/divisions").get(getDivisions).post(createDivision);
router.route("/districts").get(getDistricts).post(createDistrict);
router.route('/upazilas').get(getUpazila).post(createUpazila);

export default router;
