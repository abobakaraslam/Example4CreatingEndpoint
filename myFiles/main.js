//File: main.js in root/myFiles/ directory

const express = require('express')
const myRouter = express.Router()

myRouter.get('/', (req, res) => {
    res.json({
        srNo: 5,
        course: "Web Development",
        creditHours: 3
    })
})
//exporting so that it can access from other files
module.exports = myRouter