import mongoose, { Schema } from "mongoose";

const divisionSchema = new Schema({
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

export const Division = mongoose.model("Division", divisionSchema);
