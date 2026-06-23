require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const taskRoutes = require("./routes/tasks")

const app = express()

app.use(cors({ origin: process.env.FRONTEND_URL }))
app.use(express.json())
app.use("/api/tasks", taskRoutes)

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