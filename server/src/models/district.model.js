import mongoose, { Schema } from "mongoose";

const districtSchema = new Schema(
  {
    division_id: {
      type: Schema.Types.ObjectId,
      ref: "Division",
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
    lat: {
      type: String,
      required: true,
    },
    lon: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const District = mongoose.model("District", districtSchema);
