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
1. **Clone the repository**:
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
## 1. Add a Book
- Method: POST
- Endpoint: /api/books/add
- Request Body:
      {
         "title": "Book Title",
          "author": "Author Name"
      }
   ### Description: Adds a new book to the library.

## 2. Borrow a Book
- Method: PATCH 
- Endpoint: /api/books/borrow/:id
### Description: Marks a book as borrowed using its unique ID.

## 3. Return a Book
- Method: PATCH
- Endpoint: /api/books/return/:id
  ### Description: Marks a borrowed book as returned.

## 4. View All Available Books
- Method: GET
- Endpoint: /api/books/available
   ### Description: Retrieves a list of all books currently available in the library.

   
# Running Locally
- Ensure MongoDB is set up and the connection string is correct.

- Start the server:
```bash
npm run dev
```
- Use a tool like Postman or cURL to interact with the API.
