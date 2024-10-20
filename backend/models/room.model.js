import Joi from "joi";
import mongoose from "mongoose";

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Number] } }],
  },
  { timestamps: true }
);

export function validateRoom(room) {
  const roomSchema = Joi.object({
    title: Joi.string().required().messages({
      "string.base": `"title" should be a type of 'text'`,
      "string.empty": `"title" cannot be an empty field`,
      "any.required": `"title" is a required field`,
    }),

    description: Joi.string().required().messages({
      "string.base": `"description" should be a type of 'text'`,
      "string.empty": `"description" cannot be an empty field`,
      "any.required": `"description" is a required field`,
    }),

    price: Joi.number().required().messages({
      "number.base": `"price" should be a type of 'number'`,
      "number.empty": `"price" cannot be an empty field`,
      "any.required": `"price" is a required field`,
    }),

    maxPeople: Joi.number().required().messages({
      "number.base": `"maxPeople" should be a type of 'number'`,
      "number.empty": `"maxPeople" cannot be an empty field`,
      "any.required": `"maxPeople" is a required field`,
    }),

    roomNo: Joi.number().required().messages({
      "number.base": `"roomNo" should be a type of 'number'`,
      "number.empty": `"roomNo" cannot be an empty field`,
      "any.required": `"roomNo" is a required field`,
    }),
  });

  return roomSchema.validate(room);
}

export const Room = mongoose.model("Room", roomSchema);
