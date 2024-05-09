import pkg from "mongoose";
const { Schema, model, models } = pkg;
import bcrypt from "bcrypt";
import mongooseUniqueValidator from "mongoose-unique-validator";

const BookLawyerSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please enter Full Name"],
  },

  contactNumber: {
    type: String,
    required: [true, "Please enter Contact Number"],
    unique: true,
  },

  nicNumber: {
    type: String,
    required: [true, "Please enter Address"],
  },

  email: {
    type: String,
    required: [true, "Please enter Address"],
  },

  propertyType: {
    type: String,
    required: [true, "Please enter City"],
  },

  date: {
    type: Date,
    required: true,
  },
  
});

// Validate the email and contact number
BookLawyerSchema.plugin(mongooseUniqueValidator, {
  message: "Email or Contact Number already exists. Duplicate key",
});

const BookLawyer = models.BookLawyer || model("BookLawyer", BookLawyerSchema);

export default BookLawyer;
