var express = require('express')
var router = express.Router()

const jobController = require("./JobController")

// Routers
router.get('/', jobController.get)
router.post('/', jobController.post)

module.exports = router