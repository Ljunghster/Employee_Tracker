const router = require('express').Router()

const orm = require('../orm')
// Still unsure about orm, and env

// post salary
router.post('/salaries', (req ,res) => {
  orm.createOne('salaries', req.body, info => {
    res.sendStatus(200)
  })
})

module.exports = router