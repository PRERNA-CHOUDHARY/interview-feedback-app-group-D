const mongoose = require('mongoose');

const userRatingSchema = new mongoose.Schema({
   
    intervieweeID: {
        type: String,
        required: true
    },
    intervieweeName: {
        type: String,
        required: true
    },
    ratings: {
        problemSolving: {
            type: Number,
            required: true
        },
        LanguageKnowledge: {
            type: Number,
            required: true
        },
        communication: {
            type: Number,
            required: true
        },
        design: {
            type: Number,
            required: true
        },
        implementation: {
            type: Number,
            required: true
      }
    },
    
    LanguageUsed: {
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
    },
    overallRating: {
        type: mongoose.Schema.Types.Decimal128 
    }
},{collection:'UserRatings'});

userRatingSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const UserRatingModel = mongoose.model('UserRatingModel', userRatingSchema);

module.exports = UserRatingModel;
