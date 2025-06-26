const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  courseId: {
    type: String,
    required: true,
     },
  name: {
    type: String,
    required: true
  },
  duration: {
    type: String,
    required: true
  },
  popularity: {
    type: String,
    

  },
  type:{
    type:String,
  },
  stream:{
    type:String,
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Course", courseSchema);
