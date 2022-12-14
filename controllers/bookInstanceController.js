const BookInstance = require("../models/book_instance");

// DISPLAY LIST OF ALL BOOK-INSTANCES.
exports.bookinstance_list = function(req, res, next) {

  BookInstance.find()
    .populate('book')
    .exec(function (err, list_bookinstances) {
      if (err) { return next(err); }

      // SUCCESSFUL, THEREFORE, RENDER
      res.render('bookInstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances });
    });

};

// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function (req, res) {
  res.send("NOT IMPLEMENTED: Book-Instance detail: " + req.params.id);
};

// Display BookInstance create form on GET.
exports.bookinstance_create_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book-Instance create GET");
};

// Handle BookInstance create on POST.
exports.bookinstance_create_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book-Instance create POST");
};

// Display BookInstance delete form on GET.
exports.bookinstance_delete_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book-Instance delete GET");
};

// Handle BookInstance delete on POST.
exports.bookinstance_delete_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book-Instance delete POST");
};

// Display BookInstance update form on GET.
exports.bookinstance_update_get = function (req, res) {
  res.send("NOT IMPLEMENTED: Book-Instance update GET");
};

// Handle bookinstance update on POST.
exports.bookinstance_update_post = function (req, res) {
  res.send("NOT IMPLEMENTED: Book-Instance update POST");
};
