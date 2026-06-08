const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        default:"customer",
    }
},
    {
        timestamps: true
    }
);

const User = model("user", userSchema);

module.exports = { User };