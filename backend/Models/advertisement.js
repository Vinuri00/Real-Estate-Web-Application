import pkg from "mongoose";
const { Schema, model, models } = pkg;
// import mongooseUniqueValidator from "mongoose-unique-validator";

const AdvertisementSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please enter the title"],
  },

  description: {
    type: String,
    required: [true, "Please enter the description"],
  },

  ownerName: {
    type: String,
    required: [true, "Please enter the owner's name"],
  },

  contactNumber: {
    type: String,
    required: [true, "Please enter contact number"],
  },

  price: {
    type: Number,
    required: [true, "Please enter the price"],
  },

  location: {
    type: String,
    required: [true, "Please enter the location"],
  },

  images: {
    type: [String],
    maxlength: [5, "Maximum 5 images are allowed"],
    minlength: [1, "At least 1 image is required"],
  },

  status: {
    type: Number,
    default: 0, // 0 - Pending, 1 - Approved, 2 - Rejected
  },
});

const Advertisement =
  models.Advertisement || model("Advertisement", AdvertisementSchema);

export default Advertisement;
