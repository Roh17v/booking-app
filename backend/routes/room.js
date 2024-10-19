import express from "express";
import {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
  updateRoomAvailability,
  deleteUnavailableDates,
} from "../controllers/room.controller.js";
import { verifyAdmin } from "../middlewares/auth.js";

const router = express.Router();

//CREATE
router.post("/:hotelid", verifyAdmin, createRoom);

//UPDATE
router.put("/:id", verifyAdmin, updateRoom);
router.put("/availability/:id", updateRoomAvailability);

//DELETE
router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);
router.delete("/:id", verifyAdmin, deleteUnavailableDates);

//GET ROOM
router.get("/:id", getRoom);

//GET ROOMS
router.get("/", getRooms);

export default router;
