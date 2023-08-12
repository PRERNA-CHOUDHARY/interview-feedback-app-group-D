const express = require('express');
const courseDetailController = require('../controller/courseDetailsController');
const router = express.Router();

router.post('/createCourse',courseDetailController.insertCourseDetailApi);
router.get('/getCourse',courseDetailController.getAllCourseDetailsApi);

module.exports = router;
