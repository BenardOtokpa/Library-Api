# Library Management API

## Description
This is a simple REST API for managing books in a library system.

## Features
- Add a book.
- Borrow a book.
- Return a book.
- View all available books.

## Technology Stack
- Node.js with Express.js
- MongoDB (Database)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd library-management-api

2. Install dependencies:
   ```bash
   npm install
   
3. Create a .env file with the following content:
   ```bash
   DATABASE=mongodb+srv://benzy:xv1dtcDR5GC3ISZp@cluster0.2xovj.mongodb.net/Library_DB?retryWrites=true&w=majority
   PORT=3000

4. Start the application:
   ```bash
   npm run dev

# API Endpoints
## Add a Book
POST /api/books/add
Body:
   ```bash
   {
      "title": "Book Title",
       "author": "Author Name"
   }


## Borrow a Book
PATCH /api/books/borrow/:id

## Return a Book
PATCH /api/books/return/:id

## View All Available Books
GET /api/books/available

# Running Locally
Ensure MongoDB is set up and the connection string is correct.
Start the server: npm run dev.
Use a tool like Postman or cURL to interact with the API.
