import { Hotel } from "../models/hotel.model.js";
import { Room } from "../models/room.model.js";

export const createRoom = async (req, res, next) => {
  const hotelId = req.params.hotelid;
  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: newRoom._id } });
    return res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
};

export const updateRoom = async (req, res, next) => {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).send(updatedRoom);
  } catch (error) {
    next(error);
  }
};

export const deleteRoom = async (req, res, next) => {
  try {
    await Hotel.findByIdAndUpdate(req.params.hotelid, {
      $pull: { rooms: req.params.id },
    });
    const deletedRoom = await Room.findByIdAndDelete(req.params.id);
    if (!deletedRoom)
      return res.status(404).send({ message: "Room Not Found!" });
    return res.status(200).send({
      message: "Room deleted successfully",
      deletedRoom: deletedRoom,
    });
  } catch (error) {
    next(error);
  }
};

export const getRoom = async (req, res, next) => {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) return res.status(404).send({ message: "Room Not Found!" });
    return res.status(200).send(room);
  } catch (error) {
    next(error);
  }
};

export const getRooms = async (req, res, next) => {
  try {
    const rooms = await Room.find();
    if (!rooms) return res.status(404).send({ message: "Room Not Found!" });
    return res.status(200).send(rooms);
  } catch (error) {
    next(error);
  }
};