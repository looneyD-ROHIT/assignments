const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const mongoose = require("mongoose");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send("Please provide username and password");
        return;
    }
    const admin = new Admin({ username, password });
    const result = await admin.save();
    console.log(result);
    return res.status(201).json({ message: 'Admin created successfully' });
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    try {
        const { title, description, price, imageLink } = req.body;
        session.startTransaction();
        const course = new Course({ title, description, price, imageLink, admin: req.admin._id });
        const courseResult = await course.save();
        const adminResult = await Admin.updateOne({ _id: req.admin._id }, { $push: { courses: courseResult._id } })
        await session.commitTransaction();
        console.log(courseResult);
        console.log(adminResult);
        return res.status(201).json({ message: 'Course created successfully', courseId: courseResult._id });
    } catch (error) {
        session.endSession();
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    const response = await Course.find().select('-admin -users').exec();
    return res.status(200).json({ courses: response });
});

module.exports = router;