const CourseDetailModel = require('../model/courseDetails'); // Import the CourseDetailModel

// Function to insert a new course detail
async function insertCourseDetails(data) {
    try {
        const newCourseDetail = new CourseDetailModel({
            courseID:data.courseID,
            courseName:data.courseName,
            courseRating:data.courseRating,
            courseLink: data.courseLink,
            courseThumbnail:data.courseThumbnail,
             courseDuration:data.courseDuration,
            instructorName: data.instructorName,
            tag: data.tag,
            createdAt: new Date(),
            updatedAt: new Date()
        });


        const savedCourseDetail = await newCourseDetail.save();
        return savedCourseDetail;
    } catch (error) {
        throw error;
    }
}

// Function to retrieve all course details
async function getAllCourseDetailsApi() {
    try {
        const courseDetails = await CourseDetailModel.find();
        console.log(courseDetails);
    } catch (error) {
        throw error;
    }
}

async function insertCourseDetailApi(req, res) {
    try {
        const courseData = req.body; // Data sent in the request body
        const newCourseDetail = await insertCourseDetails(courseData);
        res.status(201).json(newCourseDetail);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    insertCourseDetailApi,
    getAllCourseDetailsApi
};
