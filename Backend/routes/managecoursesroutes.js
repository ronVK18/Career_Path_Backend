const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload'); 
const controller = require('../controllers/managecoursescontroller');



router.post('/', controller.createCourse);
router.get('/', controller.getAllCourses);
router.get('/:id', controller.getCourseById);

module.exports = router;
