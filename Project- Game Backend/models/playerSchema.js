const {Schema, model} = require("mongoose");

const playerrSchema = new Schema({
    name: {
        type: String,
        required: true, 
        trim: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    avatarURL: String, 
    skills: [
        {
        type: String,
        enum:["Survival", "Killing", "Defence", "Stealth"],
        }
    ],
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: String,
});

const Player = model("Player", playerrSchema);

module.exports = Player;