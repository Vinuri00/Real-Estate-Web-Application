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

    image: {
        type: String,
        required: [true, "Please add images of the land"],
    },

    price: {
        type: Number,
        required: [true, "Please enter the price"],
    },

    Location: {
        type: String,
        required: [true, "Please enter the location"],
    },

    status: {
        type: Number,
        default: 0,         // 0 - Pending, 1 - Approved, 2 - Rejected
    }
});  

const Advertisement = models.Advertisement || model("Advertisement", AdvertisementSchema);

export default Advertisement;