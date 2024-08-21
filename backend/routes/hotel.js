import express from "express";
import { Hotel, validateHotel } from "../models/hotel.model.js";

const router = express.Router();

//CREATE
router.post("/", async (req, res) => {
  const { error } = validateHotel(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  try {
    const newHotel = new Hotel(req.body);
    const result = await newHotel.save();
    return res.status(201).send(result);
  } catch (error) {
    console.log("Failed to Create the Hotel: ", error);
    res.status(500).send(error);
  }
});

//UPDATE
router.put("/:id", async (req, res) => {
    try {
      const updatedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new: true});
      return res.status(200).send(updatedHotel);
    } catch (error) {
      console.log("Failed to Update the Hotel: ", error);
      res.status(500).send(error);
    }
  });   

//DELETE
router.delete("/:id", async (req, res) => {
    try {
      const deletedHotel = await Hotel.findByIdAndDelete(req.params.id);
      if(!deletedHotel) return res.status(404).send({message: "Hotel Not Found!"});
      return res.status(200).send(deletedHotel);
    } catch (error) {
      console.log("Failed to delete the Hotel: ", error);
      res.status(500).send(error);
    }
  }); 

//GET
router.get("/:id", async (req, res) => {
    try {
      const hotel = await Hotel.findById(req.params.id);
      if(!hotel) return res.status(404).send({message: "Hotel Not Found!"});
      return res.status(200).send(hotel);
    } catch (error) {
      console.log("Failed to Find the Hotel: ", error);
      res.status(500).send(error);
    }
  }); 

//GET ALL
router.get("/", async (req, res) => {
    try {
      const hotel = await Hotel.find();
      if(!hotel) return res.status(404).send({message: "Hotel Not Found!"});
      return res.status(200).send(hotel);
    } catch (error) {
      console.log("Failed to Find the Hotel: ", error);
      res.status(500).send(error);
    }
  }); 

export default router;
