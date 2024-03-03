import pkg from "mongoose";
const { Schema, model, models } = pkg;
import bcrypt from "bcrypt";
import mongooseUniqueValidator from "mongoose-unique-validator";

const AdminSchema = new Schema({
  fullName: {
    type: String,
    required: [true, "Please enter Full Name"],
  },

  username: {
    type: String,
    required: [true, "Please enter Username"],
    unique: true,
  },

  email: {
    type: String,
    required: [true, "Please enter Email"],
  },

  password: {
    type: String,
    required: [true, "Please enter Password"],
  },
});

// Encrypt the password (register)
AdminSchema.methods.encryptAdminPassword = (password) => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Validate the password (login) (to check the correction of the encrypted password)
AdminSchema.methods.validatePassword = (password, dbPassword) => {
  return bcrypt.hashSync(password, dbPassword);
};

// Validate the username
AdminSchema.plugin(mongooseUniqueValidator, {
  message: "Username already exists. Duplicate key",
});

// OR
const Admin = models.Admins || model("Admins", AdminSchema);

export default Admin;
