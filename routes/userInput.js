const router = require('express').Router()
const orm = require('../orm')  
// Not sure if I need orm


router.get('/users/:selector', (req, res) => {
  let query = {}

  if (parseInt(req.params.selector)) {
    query = { id: parseInt(req.params.selector) }
  } else {
    query = { username: req.params.selector }
  }

  orm.getAllWhere('users', query, data => {
    let user = data[0]
    orm.getAllWhere('salaries', { userid: user.id }, salaries => {
      res.json({ user, salaries })
    })
  })
})




router.post('/users', (req, res) => {
  orm.createOne('users', req.body, info => {
    res.json(info)
  })
})


module.exports = router