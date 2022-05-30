function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
  return accounts.map((account) => account.name)
}

function getTotalNumberOfBorrows(account, books) {
  let id = account.id
  let tally = 0

  for(let i =0 ; i < books.length ; i++) {
    if (id === books.borrows[i].id) tall++
}
return tally
console.log(tally)
}

function getBooksPossessedByAccount(account, books, authors) {}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
