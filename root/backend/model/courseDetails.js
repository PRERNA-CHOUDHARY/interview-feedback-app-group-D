const mongoose = require('mongoose');

const courseDetailSchema = new mongoose.Schema({
    courseID: {
        type: String,
        required: true
    },
    courseName: {
        type: String,
        required: true
    },
    courseRating: {
        type: Number,
        required: true
    },
    courseLink: {
        type: String,
        required: true
    },
    courseThumbnail: {
        type: String,
        required: true
    },
    courseDuration: {
        type: String,
        required: true
    },
    instructorName: {
        type: String,
        required: true
    },
    tag: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
},
    {
    collection: 'courseDetails'
});

courseDetailSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const CourseDetailModel = mongoose.model('CourseDetail', courseDetailSchema);

module.exports = CourseDetailModel;
