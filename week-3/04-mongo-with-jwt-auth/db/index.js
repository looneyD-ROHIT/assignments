const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/week3ass3');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username: String,
    password: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Course' }]
});

const CourseSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number,
    imageLink: String,
    published: { type: Boolean, default: false },
    admin: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Admin' }],
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}