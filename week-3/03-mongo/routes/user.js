const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const mongoose = require("mongoose");

// User Routes
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(400).send("Please provide username and password");
        return;
    }
    const user = new User({ username, password });
    const result = await user.save();
    console.log(result);
    return res.status(201).json({ message: 'User created successfully' });
});

router.get('/courses', async (req, res) => {
    const response = await Course.find().select('-admin -users').exec();
    return res.status(200).json({ courses: response });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    // check existence of course
    const course = await Course.findOne({ _id: courseId });
    if (!course) {
        return res.status(404).json({ message: "Course not found" });
    }
    // console.log(course)
    // check if course is already purchased
    const checkPurchase = await User.findOne({ _id: req.user._id, courses: { "$in": [courseId] } });
    // console.log(checkPurchase)
    if (checkPurchase) {
        return res.status(400).json({ message: "Course already purchased" });
    }
    const session = await mongoose.startSession();
    try {
        session.startTransaction();

        // update user courses
        const userResult = await User.updateOne({ _id: req.user._id }, { $push: { courses: courseId } });

        // update course users
        const courseResult = await Course.updateOne({ _id: courseId }, { $push: { users: req.user._id } });

        await session.commitTransaction();
        console.log(userResult);
        console.log(courseResult);

        return res.status(201).json({ message: "Course purchased successfully" });
    } catch (error) {
        session.endSession();
        return res.status(500).json({ message: 'Internal server error' });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement purchased courses logic
    const courseDetails = await Course.find({ users: { "$in": [req.user._id] } }).select('-admin -users').exec();
    return res.status(200).json({ purchasedCourses: courseDetails });
});

module.exports = router