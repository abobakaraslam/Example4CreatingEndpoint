//File: index.js in root directory
const express = require('express')
const app = express()
const port = 5000

app.get('/', require("./myFiles/main"))

app.listen(port)