const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const GenreSchema = new Schema({
  book: {
    // reference to the associated book
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  name: {
    type: String,
    required: true,
    minLength: 100,
    maxLength: 100
  },
});

// Virtual for Genre's URL
GenreSchema.virtual("url").get(function () {
  return `/catalog/genre/${this._id}`;
});

//Export model
module.exports = mongoose.model("Genre", GenreSchema);
