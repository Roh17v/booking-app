import { Hotel, validateHotel } from "../models/hotel.model.js";

export const createHotel = async (req, res, next) => {
  const { error } = validateHotel(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const newHotel = new Hotel(req.body);
    const result = await newHotel.save();
    return res.status(201).send(result);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send(updatedHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
  try {
    const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
    if (!deletedHotel)
      return res.status(404).send({ message: "Hotel Not Found!" });
    return res.status(200).send(deletedHotel);
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) return res.status(404).send({ message: "Hotel Not Found!" });
    return res.status(200).send(hotel);
  } catch (error) {
    next(error);
  }
};

export const getHotels = async (req, res, next) => {
  try {
    const hotel = await Hotel.find();
    if (!hotel) return res.status(404).send({ message: "Hotel Not Found!" });
    return res.status(200).send(hotel);
  } catch (error) {
    next(error);
  }
};
