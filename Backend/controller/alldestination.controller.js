import Destination from "../models/alldestination.model.js";

export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();
   res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ message: "Error fetching destinations", error:error.message });
  }
};
