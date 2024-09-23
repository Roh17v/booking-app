import Joi from "joi";
import mongoose from "mongoose";

const hotelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: String,
      required: true,
    },
    photos: {
      type: [String],
    },
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    rating: {
      type: Number,
      min: 0,
      max: 10,
    },
    rooms: {
      type: [String],
    },
    cheapestPrice: {
      type: Number,
      required: true,
    },
    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//middleware to make sure that city field is always lowercase
hotelSchema.pre("save", function (next) {
  this.city = this.city.toLowerCase();
  this.type = this.type.toLowerCase();
  next();
});

export function validateHotel(hotel) {
  const schema = Joi.object({
    name: Joi.string().required().label("Name"),

    type: Joi.string().required().label("Type"),

    city: Joi.string().required().label("City"),

    address: Joi.string().required().label("Address"),

    distance: Joi.string().required().label("Distance"),

    photos: Joi.array()
      .items(Joi.string().uri().label("Photo URL"))
      .label("Photos"),

    title: Joi.string().required().label("Title"),

    desc: Joi.string().required().label("Description"),

    rating: Joi.number().min(0).max(10).label("Rating"),

    rooms: Joi.array().items(Joi.string().label("Room")).label("Rooms"),

    cheapestPrice: Joi.number().required().label("Cheapest Price"),

    featured: Joi.boolean().default(false).label("Featured"),
  });

  return schema.validate(hotel);
}

export const Hotel = mongoose.model("Hotel", hotelSchema);
