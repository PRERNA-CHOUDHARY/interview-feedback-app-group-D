const express = require('express');
const userRatingController = require('../controller/userRatingController.js');
const router = express.Router();

router.post('/userRating',userRatingController.createUserRatingApi);

module.exports = router;
