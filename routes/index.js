// require stack and modular controller
const router = require('express').Router()
const Controller = require('../controllers')

// routing and endpoint
router.get('/', Controller.getOddNumbers)

module.exports = router