import Contact from "../models/contact.js";

export const createcontact = async (req, res) => {
  const { name, email, number, message } = req.body;

  try {
    const newcontact = new Contact({
      name,
      email,
      number,
      message,
    });

    await newcontact.save();
    res.status(201).json({message:"Contact Created Successfully"})
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating contact", error: error.message });
  }
};
