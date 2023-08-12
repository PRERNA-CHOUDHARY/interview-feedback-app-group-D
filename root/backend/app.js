
// import express from 'express';  //--> import express  type:module in package.json
const express = require('express');  // ---> type:commonjs in pacage.json;
const interviewRecordRoutes = require('./routes/interviewRecordRoutes');
const userRatingRoutes = require('./routes/userRatingRoutes');
const courseRoutes = require('./routes/courseDetailsRoute');
const app = express(); // ---->constructor of express store in app
const db = require('./database/connect.js');
app.use(express.json()) // ---->it should use json format for communication
app.use('/api', interviewRecordRoutes);
app.use('/api', userRatingRoutes);
app.use('/api', courseRoutes);
const PORT = 3001;
app.listen(PORT, async () => {
    console.log("Listening Port 3001");
    
})