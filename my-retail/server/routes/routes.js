const express = require('express');
const items = require('../../data/item-data.json');

const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('products', (req, res) => {
  res.send(items);
});

module.exports = router;