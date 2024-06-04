const mongoose = require("mongoose");

mongoose
    .connect("mongodb+srv://gab:13461346@cluster0.sgrah9t.mongodb.net/", {useNewURlParser: true})
    .catch(e => {
        console.error("Connection error", e.message)
    })

const db = mongoose.connection

module.exports = db
