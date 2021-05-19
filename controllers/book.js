const Book = require("../models/book");
const { Router } = require("express");
const router = Router();

// get Seed Data
const bookSeed = require('../db/seedData.json') 
// console.log(bookSeed)

//index route
router.get("/", async (req, res) => {
  res.json(await Book.find({}));
});

//create route
router.post("/", async (req, res) => {
  res.json(await Book.create(req.body));
});

//update route
router.put("/:id", async (req, res) => {
  console.log(req.params.id, req.body)
  res.json(await Book.findByIdAndUpdate(req.params.id, req.body, { new: true }));
});

//delete route
router.delete("/:id", async (req, res) => {
  res.json(await Book.findByIdAndRemove(req.params.id));
});


// Seed Route for Seeding Database
router.get("/seed", async (req, res) => {
	// try block for catching errors
	try {
	  // remove all books from database
	  await Book.remove({});
	  // add the seed data to the database
	  await Book.create(bookSeed);
	  // get full list of books to confirm seeding worked
	  const books = await Book.find({});
	  // return full list of books as JSON
	  res.json(books);
	} catch (error) {
	  // return error as JSON with an error status
	  res.status(400).json(error);
	}
  });

// EXPORT ROUTER
module.exports = router;
