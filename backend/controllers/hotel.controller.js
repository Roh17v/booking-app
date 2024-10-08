import { Hotel, validateHotel } from "../models/hotel.model.js";
import { createError } from "../utils/error.js";

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
  const { min, max, stars, type, ...others } = req.query;
  delete others.limit;

  try {
    const filter = {
      ...others,
      cheapestPrice: { $gte: min || 1, $lte: max || 10000 },
      stars: { $gte: stars || 1 },
    };

    if (type) {
      filter.type = Array.isArray(type) ? { $in: type } : { $in: type.split(",") };
    }

    const hotels = await Hotel.find(filter).limit(req.query.limit);

    return res.status(200).send(hotels);
  } catch (error) {
    next(error);
  }
};

export const countByCities = async (req, res, next) => {
  const { cities } = req.query;

  if (!cities) return next(createError(400, "Cities query is required!"));

  const citiesArray = req.query.cities.split(",");
  try {
    const count = await Promise.all(
      citiesArray.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    return res.status(200).send(count);
  } catch (error) {
    next(error);
  }
};

export const countByType = async (req, res, next) => {
  try {
    const hotelsCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentsCount = await Hotel.countDocuments({ type: "apartment" });
    const resortsCount = await Hotel.countDocuments({ type: "resort" });
    const villasCount = await Hotel.countDocuments({ type: "villa" });
    const cabinsCount = await Hotel.countDocuments({ type: "cabin" });

    return res.status(200).json([
      { type: "hotels", count: hotelsCount },
      { type: "apartments", count: apartmentsCount },
      { type: "resorts", count: resortsCount },
      { type: "villas", count: villasCount },
      { type: "cabins", count: cabinsCount },
    ]);
  } catch (error) {
    next(error);
  }
};
