import pkg from "mongoose";
const { Schema, model, models } = pkg;
import bcrypt from "bcrypt";
import mongooseUniqueValidator from "mongoose-unique-validator";

const BrokerSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please enter Full Name"],
  },

  email: {
    type: String,
    required: [true, "Please enter Email"],
    unique: true,
  },

  contactNumber: {
    type: String,
    required: [true, "Please enter Contact Number"],
    unique: true,
  },

  address: {
    type: String,
    required: [true, "Please enter Address"],
  },

  city: {
    type: String,
    required: [true, "Please enter City"],
  },
});

// Validate the email and contact number
BrokerSchema.plugin(mongooseUniqueValidator, {
  message: "Email or Contact Number already exists. Duplicate key",
});

const Broker = models.Brokers || model("Brokers", BrokerSchema);

export default Broker;
