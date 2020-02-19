import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Car = new Schema(
  {
    title: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

export default Car;
