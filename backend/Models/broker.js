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
    },

    contactNumber: {
        type: String,
        required: [true, "Please enter Contact Number"],
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

const Broker = models.Brokers || model("Brokers", BrokerSchema);

export default Broker;