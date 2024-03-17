import mongoose from "mongoose";
// import { v4 as uuidv4 } from "uuid";

// Define a schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  notebookurl: {
    type: String,
    required: true,
  },
  // author: {
  //   type: String,
  //   // required: true,
  // },
  // duration: {
  //   type: Number,
  //   // required: true,
  // },
  // level: {
  //   type: String,
  //   enum: ["beginner", "intermediate", "advanced"],
  //   // required: true,
  // },
  // rating: {
  //   type: Number,
  //   default: 0,
  // },
  // tags: {
  //   type: [String],
  //   // required: true,
  // },
  // price: {
  //   type: Number,
  //   // required: true,
  // },
  // enrollmentCount: {
  //   type: Number,
  //   default: 0,
  // },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create a model
const Course = mongoose.model("Course", courseSchema);

// Export the model
export default Course;
