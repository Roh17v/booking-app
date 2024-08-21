import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  photos: {
    type: [String],
  },
  ratings: {
    type: Number,
    min: 0,
    max: 5,
  },
  address: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  distance: {
    type: String,
    required: true,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export const Hotel = mongoose.model("Hotel", hotelSchema);
