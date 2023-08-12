const UserRating = require('../model/userRating.js');

async function insertUserRating(data) {
    try {
        let rating = (data.LanguageKnowledge + data.communication + data.implementation + data.design + data.problemSolving) / 5;
        const newUserRating = new UserRating({
            intervieweeID: data.intervieweeID,
            intervieweeName: data.intervieweeName,
            ratings: {
                problemSolving: data.problemSolving,
                LanguageKnowledge: data.LanguageKnowledge,
                communication: data.communication,
                design: data.design,
                implementation: data.implementation,
                
            },
            LanguageUsed: data.LanguageUsed,
            createdAt: new Date(),
            updatedAt: new Date(),
            overallRating:rating
        });
        const res = await newUserRating.save();
        return res;
        
    } catch (error) {
        throw error;
    }
}

async function createUserRatingApi(req, res) {
    try {
        const userRatingData = req.body;
        const newUserRating = await insertUserRating(userRatingData);
        res.status(201).json(newUserRating);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    createUserRatingApi
};
