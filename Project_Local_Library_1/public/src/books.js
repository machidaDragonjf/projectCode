// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAuthorById(authors, id) {
  for (let author of authors) {
    if (author.id === id) {
      return author;
    }
  }
}

function findBookById(books, id) {
  for (let book of books) {
    if (book.id === id) {
      return book;
    }
  }
}
/////////////////////////////////////////////////////////////
function partitionBooksByBorrowedStatus(books) {
  let borrowed = books.filter((book) => !book.borrows[0].returned);
  let returned = books.filter((book) => book.borrows[0].returned);
  return [borrowed, returned];
}

///////////////////////////////////////////////

function getBorrowersForBook(book, accounts) {
  let result = book.borrows.map(borrower => {
  let result = accounts.find(account => borrower.id === account.id )
  result.returned = borrower.returned
  return result })
  console.log(result)
  return result.filter((borrower, i)=> result.findIndex(item => item.id === borrower.id) === i) 
  }

  




module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
