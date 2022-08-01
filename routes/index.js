const express = require('express');
const router = express.Router();

// GET HOME PAGE 
// router.get('/', (req, res) => {
//   res.render('catalog', { title: 'Express CRUD' });
// });

// GET HOME PAGE 
router.get('/', (req, res) => {
  res.redirect('/catalog');
});

module.exports = router;
