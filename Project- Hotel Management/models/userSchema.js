const { Schema, model, SchemaTypes } = require("mongoose");


const userSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: SchemaTypes.Int32,
    },
    phone_no: {
        type: SchemaTypes.Int32,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercas: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {timestamps: true});

const User = model("user", userSchema);

module.exports = { User };
