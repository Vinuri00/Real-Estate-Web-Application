import pkg from "mongoose";
const { Schema, model, models, Types } = pkg;

const BookLawyerSchema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: "User",
    required: [true, "Please enter user"],
  },

  lawyerId: {
    type: Types.ObjectId,
    ref: "Lawyers",
    required: [true, "Please enter lawyer"],
  },

  userNICNumber: {
    type: String,
    required: [true, "Please enter userNICNumber"],
  },

  propertyType: {
    type: String,
    required: [true, "Please enter propertyType"],
  },

  date: {
    type: Date,
    required: true,
  },
});

const BookLawyer = models.BookLawyer || model("BookLawyer", BookLawyerSchema);

export default BookLawyer;
