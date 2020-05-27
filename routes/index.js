const router = require('express').Router()
router.use('/api', require('./employeeData.js'))
router.use('/api', require('./userInput.js'))

module.exports = router