const Course = require('../models/admin forms/managecourses');
//const uploadToCloudinary = require('../utils/cloudinaryUpload');
//const fs = require('fs/promises');

// CREATE new course
exports.createCourse = async (req, res) => {
  try {
    const { courseId,name,duration,popularity,type,stream} = req.body;


    const course = new Course({
   courseId,
   name,
   duration,
   popularity,
   type,
   stream
    });

    await course.save();
    res.status(201).json({ message: 'Course created successfully', course });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// GET all courses
exports.getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find().sort({ createdAt: -1 });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET course by ID
exports.getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ error: 'Course not found' });
    res.json(course);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
