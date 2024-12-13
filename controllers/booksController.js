const Book = require("../models/Book");

//1. Add a book
exports.addBook = async (req, res) => {
  // Add a new book to the library database
  try {
    const book = await Book.create({
      title: req.body.title,
      author: req.body.author,
    });
    res.status(200).json({
      status: "success",
      message: "Book added successfully",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to add book",
      err,
    });
  }
};

//2. Borrow a book
exports.borrowBook = async (req, res) => {
  // Borrow a new book from the library database
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book not found" });
    if (book.isBorrowed)
      return res.status(400).json({ message: "Book is already borrowed" });
    book.isBorrowed = true;
    res.status(200).json({
      status: "success",
      message: "Book borrowed successfully",
      data: {
        book,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: "Failed to borrow book",
      err,
    });
  }
};

//3. Return a book
exports.returnBook = async (req, res) => {
  // Add a new book to the library database
  res.status(200).json({
    status: "success",
    message: "Book added successfully",
  });
};

// View all available books
exports.getAllAvailableBooks = async (req, res) => {
  // Add a new book to the library database
  res.status(200).json({
    status: "success",
    message: "Book added successfully",
  });
};

// View all books
exports.getAllBooks = async (req, res) => {
  // Add a new book to the library database
  res.status(200).json({
    status: "success",
    message: "Book added successfully",
  });
};
