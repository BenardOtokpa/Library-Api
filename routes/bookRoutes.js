const express = require("express");

const booksController = require("../controllers/booksController");

const router = express.Router();

router.get("/available", booksController.getAllAvailableBooks);

module.exports = router;
