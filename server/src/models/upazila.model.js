import mongoose, { Schema } from "mongoose";

const upazilaSchema = new Schema({
  district_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bn_name: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

export const Upazila = mongoose.model("Upazila", upazilaSchema);
