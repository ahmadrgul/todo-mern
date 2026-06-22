const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is required."],
        maxLength: 100,
    },
    description: {
        type: String,
    },
    status: {
        type: String,
        enum: ["pending", "done"],
        default: "pending",
    },
    priority: {
        type: String,
        enum: ["low", "medium", "high"],
        default: "low",
    },
    dueDate: {
        type: Date,
        required: [true, "Due date is required."],
        min: [Date.now, "Due data can't be in past."],

    },
}, { timestamps: true })

module.exports = mongoose.model("Todo", todoSchema)