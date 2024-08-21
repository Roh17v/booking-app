import Joi from "joi";
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
    required: true,
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

export function validateHotel(hotel) {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),

    city: Joi.string().required().label("City"),

    photos: Joi.array()
      .items(Joi.string().uri().label("Photo URL"))
      .label("Photos"),

    ratings: Joi.number().min(0).max(5).label("Ratings"),

    address: Joi.string().required().label("Address"),

    title: Joi.string().required().label("Title"),

    description: Joi.string().required().label("Description"),

    distance: Joi.string().required().label("Distance"),

    rooms: Joi.array().items(Joi.string().label("Room")).label("Rooms"),

    cheapestPrice: Joi.number().label("Cheapest Price"),

    featured: Joi.boolean().default(false).label("Featured"),
  });

  return schema.validate(hotel);
}

export const Hotel = mongoose.model("Hotel", hotelSchema);
