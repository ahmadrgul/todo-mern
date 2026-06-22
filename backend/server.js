require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")

const app = express()

const dbURI = process.env.MONGO_URI
mongoose.connect(dbURI)
    .then(() => {
        console.log("MongoDB connection established successfully.")
    })
    .catch((err) => {
        console.log("MongoDB connection error:", err)
    })

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})