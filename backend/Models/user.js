import pkg from "mongoose";
const { Schema, model, models } = pkg;
import bcrypt from "bcrypt";
import mongooseUniqueValidator from "mongoose-unique-validator";

const UserSchema = new Schema({
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
});

// Encrypt the password (register)
UserSchema.methods.encryptUserPassword = (password) => {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// Validate the password (login) (to check the correction of the encrypted password)
UserSchema.methods.validatePassword = (password, dbPassword) => {
    return bcrypt.hashSync(password, dbPassword);
};

// Validate the username
UserSchema.plugin(mongooseUniqueValidator, {
    message: "Username already exists",
});

// Create a model
const User = models.User || model("User", UserSchema);

export default User;