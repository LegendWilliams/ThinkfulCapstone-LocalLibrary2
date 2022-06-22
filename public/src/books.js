function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
  }
  
  function findBookById(books, id) {

    for (let index = 0; index <books.length; index++) {
      const element = books[index];
      if(books[index].id === id) {
        return element
      }
    } 
  }
  
  function partitionBooksByBorrowedStatus(books) {

  }
  
  function getBorrowersForBook(book, accounts) {

  }
  
  module.exports = {
    findAuthorById,
    findBookById,
    partitionBooksByBorrowedStatus,
    getBorrowersForBook,
  };
  