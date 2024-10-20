const path = require('path')
const express = require("express")
require('dotenv').config()
const app = express()
const cors = require("cors")
const port = process.env.PORT || 8888

// Page Home
app.get("/", (req, res) => {
    res.send('SERVER ON')
})

const ZingMp3Router = require("./src/routes/ZingRouter")
app.use("/api", cors({ origin: process.env.URL_CLIENT }), ZingMp3Router)


// Page Error
app.get("*", (req, res) => {
    res.send("Nhập Sai Đường Dẫn! Vui Lòng Nhập Lại >.<")
});

app.listen(port, () => {
    console.log(`Start server listen at http://localhost:${port}`)
});
