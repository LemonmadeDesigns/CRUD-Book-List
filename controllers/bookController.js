// const Book = require("../models/book");

// exports.index = function (req, res, next) {
//   res.send("NOT IMPLEMENTED: Site Home Page");
// };


const Book = require('../models/book');
const Author = require('../models/author');
const Genre = require('../models/genre');
const BookInstance = require('../models/book_instance');

const async = require('async');

exports.index = function(req, res) {

    async.parallel({
        book_count(callback) {
            Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count(callback) {
            BookInstance.countDocuments({}, callback);
        },
        book_instance_available_count(callback) {
            BookInstance.countDocuments({status:'Available'}, callback);
        },
        author_count(callback) {
            Author.countDocuments({}, callback);
        },
        genre_count(callback) {
            Genre.countDocuments({}, callback);
        }
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
    });
};


// DISPLAY A LIST OF ALL BOOKS.
exports.book_list = function(req, res, next) {

  Book.find({}, 'title author')
    .sort({title : 1})
    .populate('author')
    .exec(function (err, list_books) {
      if (err) { return next(err); }

      // SUCCESSFUL, THEREFORE... RENDER
      res.render('book_list', { title: 'Book List', book_list: list_books });
    });

};



// Display detail page for a specific book.
exports.book_detail = function (req, res) {
  res.send(`NOT IMPLEMENTED: Book detail: ${req.params.id}`);
};

// Display book create form on GET.
exports.book_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book create GET");
};

// Handle book create on POST.
exports.book_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book create POST");
};

// Display book delete form on GET.
exports.book_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete GET");
};

// Handle book delete on POST.
exports.book_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book delete POST");
};

// Display book update form on GET.
exports.book_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book update GET");
};

// Handle book update on POST.
exports.book_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book update POST");
};
