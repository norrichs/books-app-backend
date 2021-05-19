const { Schema, model } = require("mongoose");

//*	BOOK SCHEMA
const bookSchema = new Schema(
  {
    author: String,
    title: String,
    date: Date,
	cover: String,
	// series: {
	// 	serial: Boolean,
	// 	sequence: Number,
	// 	name: String
	// }
  },
  { timestamps: true }
);

//*	BOOK MODEL
const Book = model("book", bookSchema);

//*	EXPORT MODEL
module.exports = Book;
