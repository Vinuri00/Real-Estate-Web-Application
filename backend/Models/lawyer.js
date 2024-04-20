import pkg from "mongoose";
const { Schema, model, models } = pkg;
import bcrypt from "bcrypt";
import mongooseUniqueValidator from "mongoose-unique-validator";

const LawyerSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please enter fullName"],
  },

  userName: {
    type: String,
    required: [true, "Please enter userName"],
  },

  email: {
    type: String,
    required: [true, "Please enter email"],
  },

  contactNumber: {
    type: String,
    required: [true, "Please enter contactNumber"],
  },

  password: {
    type: String,
    required: [true, "Please enter password"],
  },

  companyName: {
    type: String,
    required: [true, "Please enter companyName"],
  },

  licenseNumber: {
    type: String,
    required: [true, "Please enter licenseNumber"],
  },

  yearsOfExperience: {
    type: String,
    required: [true, "Please enter yearsOfExperience"],
  },

  status: {
    type: Number,
    default: 0,         // 0 - Pending, 1 - Approved, 2 - Rejected
  },
});

// Encrypt the password (register)
LawyerSchema.methods.encryptLawyerPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Validate the password (login) (to check the correction of the encrypted password)
LawyerSchema.methods.validatePassword = (password, dbPassword) => {
  return bcrypt.hashSync(password, dbPassword);
};

// Validate the username
LawyerSchema.plugin(mongooseUniqueValidator, {
  message: "Username already exists. Duplicate key",
});

// Create a model
const Lawyer = models.Lawyers || model("Lawyers", LawyerSchema);

export default Lawyer;
