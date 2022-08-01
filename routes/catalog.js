const express = require('express');
const router = express.Router();

/////////// REQUIRE CONTROLLER MODULES ///////////
const book_controller = require('../controllers/bookController');
const author_controller = require('../controllers/authorController');
const genre_controller = require('../controllers/genreController');
const book_instance_controller = require('../controllers/bookInstanceController');

/////////// BOOK ROUTES ///////////

// GET CATALOG HOME PAGE.
router.get('/', book_controller.index);

// GET REQUEST FOR CREATING A BOOK. MUST COME BEFORE DISPLAYING BOOK
router.get('/book/create', book_controller.book_create_get);

// POST REQUEST FOR CREATING BOOK.
router.post('/book/create', book_controller.book_create_post);

// GET REQUEST TO DELETE BOOK.
router.get('/book/:id/delete', book_controller.book_delete_get);

// POST REQUEST TO DELETE BOOK.
router.post('/book/:id/delete', book_controller.book_delete_post);

// GET REQUEST TO UPDATE BOOK.
router.get('/book/:id/update', book_controller.book_update_get);

// POST REQUEST TO UPDATE BOOK.
router.post('/book/:id/update', book_controller.book_update_post);

// GET REQUEST FOR ONE BOOK.
router.get('/book/:id', book_controller.book_detail);

// GET REQUEST FOR LIST OF ALL BOOK ITEMS.
router.get('/books', book_controller.book_list);

/// AUTHOR ROUTES ///

// GET REQUEST FOR CREATING AUTHOR. MUST COME BEFORE CREATING ID FOR AUTHOR
router.get('/author/create', author_controller.author_create_get);

// POST REQUEST FOR CREATING AUTHOR.
router.post('/author/create', author_controller.author_create_post);

// GET REQUEST TO DELETE AUTHOR.
router.get('/author/:id/delete', author_controller.author_delete_get);

// POST REQUEST TO DELETE AUTHOR.
router.post('/author/:id/delete', author_controller.author_delete_post);

// GET REQUEST TO UPDATE AAUTHOR.
router.get('/author/:id/update', author_controller.author_update_get);

// POST REQUEST TO UPDATE AAUTHOR.
router.post('/author/:id/update', author_controller.author_update_post);

// GET REQUEST FOR ONE AUTHOR.
router.get('/author/:id', author_controller.author_detail);

// GET REQUEST FOR LIST OF ALL AUTHORS.
router.get('/authors', author_controller.author_list);

/// GENRE ROUTES ///

// GET REQUEST FOR CREATING A GENRE. MUST COME BEFORE ROUTE THAT CREATES ID
router.get('/genre/create', genre_controller.genre_create_get);

//POST REQUEST FOR CREATING GENRE.
router.post('/genre/create', genre_controller.genre_create_post);

// GET REQUEST TO DELETE GENRE.
router.get('/genre/:id/delete', genre_controller.genre_delete_get);

// POST REQUEST TO DELETE GENRE.
router.post('/genre/:id/delete', genre_controller.genre_delete_post);

// GET REQUEST TO UPDATE GENRE.
router.get('/genre/:id/update', genre_controller.genre_update_get);

// POST REQUEST TO UPDATE GENRE.
router.post('/genre/:id/update', genre_controller.genre_update_post);

// GET REQUEST FOR ONE GENRE.
router.get('/genre/:id', genre_controller.genre_detail);

// GET REQUEST FOR LIST OF ALL GENRE.
router.get('/genres', genre_controller.genre_list);

/// BOOKINSTANCE ROUTES ///

// GET REQUEST FOR CREATING A BOOKINSTANCE. MUST COME BEFORE BOOK-INSSTANCE ID
router.get('/bookinstance/create', book_instance_controller.bookinstance_create_get);

// POST REQUEST FOR CREATING BOOK-INSTANCE.
router.post('/bookinstance/create', book_instance_controller.bookinstance_create_post);

// GET REQUEST TO DELETE BOOK-INSTANCE.
router.get('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_get);

// POST REQUEST TO DELETE BOOK-INSTANCE.
router.post('/bookinstance/:id/delete', book_instance_controller.bookinstance_delete_post);

// GET REQUEST TO UPDATE BOOK-INSTANCE.
router.get('/bookinstance/:id/update', book_instance_controller.bookinstance_update_get);

// POST REQUEST TO UPDATE BOOK-INSTANCE
router.post('/bookinstance/:id/update', book_instance_controller.bookinstance_update_post);

// GET REQUEST FOR ONE BOOK-INSTANCE
router.get('/bookinstance/:id', book_instance_controller.bookinstance_detail);

// GET REQUEST FOR LIST OF ALL BOOK-INSTANCES.
router.get('/bookinstances', book_instance_controller.bookinstance_list);

module.exports = router;
