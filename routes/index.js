const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {
  const den = { name: "Denis", age: 28, happy: true};
  // res.send('Hey! It works!');
  // res.send(req.query.name);
    res.render('hello', {dog: req.query.dog});
});

router.get('/reverse/:name', (req, res) => {
  const reverse = [...req.params.name].reverse().join('');
  res.send(reverse);
});

module.exports = router;