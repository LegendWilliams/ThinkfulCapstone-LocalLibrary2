The `getTotalNumberOfBorrows()` function in `public/src/accounts.js` has two parameters, in the following order:

- An account object.
- An array of all book objects.

It returns a _number_ that represents the number of times the account's ID appears in any book's `borrows` array.

Solution Steps
First stored the id that we are checking for in it's own variable.
Then we needs to search every book borrow array for the id.
Ever time the users account id is found we tally
return the tally. 
I think??!