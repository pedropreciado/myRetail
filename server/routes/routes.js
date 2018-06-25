const express = require('express');
const items = require('../../data/item-data.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/products/', (req, res) => {
  console.log('all products requested ...');
  res.send(items);
  console.log('all products sent!');
});

module.exports = router;