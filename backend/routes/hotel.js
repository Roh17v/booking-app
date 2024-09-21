import express from "express";
import {
  countByCities,
  countByType,
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} from "../controllers/hotel.controller.js";
import { verifyAdmin } from "../middlewares/auth.js";

const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createHotel);

//UPDATE
router.put("/:id", verifyAdmin, updateHotel);

//DELETE
router.delete("/:id", verifyAdmin, deleteHotel);

//count by cities
router.get("/count-by-cities", countByCities);

//count by type
router.get("/count-by-type", countByType);

//GET
router.get("/:id", getHotel);

//GET ALL
router.get("/", getHotels);


export default router;
