const express = require("express");

const booksController = require("../controllers/booksController");

const router = express.Router();

router.get("/", booksController.getAllBooks);
router.get("/available", booksController.getAllAvailableBooks);
router.post("/add", booksController.addBook);
router.patch("/borrow/:id", booksController.borrowBook);
router.patch("/return/:id", booksController.returnBook);

module.exports = router;
