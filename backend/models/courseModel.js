const mongoose = require('mongoose');

// Define the course schema
const courseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  }
});

// Create the Course model
const Course = mongoose.model('Course', courseSchema);

module.exports = Course;
