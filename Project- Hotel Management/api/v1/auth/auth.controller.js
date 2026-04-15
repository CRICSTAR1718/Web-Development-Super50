const bcrypt = require("bcryptjs");
const { User } = require("../../../models/userSchema");
const jwt = require("jsonwebtoken");


const signupController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // ====> same as
        // if (existingUser) {
        //     res.status(400).json({ message: "User already exists" });
        //     return;
        // }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await User.create({
            email,
            password: hashedPassword,
            runValidators: true,
        });
        res.status(201).json({ message: "User created successfully", userId: newUser._id });
    } catch (error) {
        console.error("Signup Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const isMatch = await bcrypt.compare(password, existingUser.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        const token = jwt.sign(
            { userId: existingUser._id, email: existingUser.email },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );
        
        res.cookie("authorization", token, {
            httpOnly: true,      
            maxAge: 24 * 60 * 60,
            secure: true,
        });

        res.status(200).json({
            message: "Login successful",
            userId: existingUser._id
        });
    } catch (error) {
        console.error("Login Error:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = { signupController, loginController };