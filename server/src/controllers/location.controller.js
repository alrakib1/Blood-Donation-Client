import { District } from "../models/district.model.js";
import { Division } from "../models/division.model.js";
import ApiError from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const createDivision = asyncHandler(async (req, res) => {
  const division = await Division.insertMany(req.body);

  res
    .status(201)
    .json(new ApiResponse(201, division, "Division created successfully"));
});

const getDivisions = asyncHandler(async (req, res) => {
  const divisions = await Division.find();

  console.log(divisions, "divisions");

  res.status(200).json(new ApiResponse(200, divisions, "success"));
});

const createDistrict = asyncHandler(async (req, res) => {
  const district = await District.create(req.body);

  res
    .status(201)
    .json(new ApiResponse(201, district, "District created successfully"));
});

const getDistricts = asyncHandler(async (req, res) => {
  const district = await District.find();

  if (!district) {
    return res.status(404).json(new ApiError(404, "No district found"));
  }

  res.status(200).json(new ApiResponse(200, district, "success"));
});

export { getDistricts, getDivisions, createDivision, createDistrict };
