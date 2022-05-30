function getTotalBooksCount(books) {
  let total = 0
  for (let i = 0; i < books.length; i++) {
    total++
  }
  return total;
}

function getTotalAccountsCount(accounts) {}

function getBooksBorrowedCount(books) {}

function getMostCommonGenres(books) {}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
