// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function findAccountById(accounts, id) {
  
  return  accounts.find((data) => data.id === id);

  };

function sortAccountsByLastName(accounts) {
 // console.log(accounts.name.lastname)
  return  accounts.sort((lastname1, lastname2) => (lastname1.name.last > lastname2.name.last ? 1 : -1));
//console.log(result);
}

function getTotalNumberOfBorrows(account, books) {

let total = 0; 
books.forEach((novel) => { novel.borrows.forEach((value) => {if ( value.id === account.id) total = total + 1})});
return total; 
}


//////////////////////////////////////////////////////////////////////
function getBooksPossessedByAccount(account, books, authors) {
  // return an array of books and authors which represents all books currently checked out by the account
  return books.filter(book =>{
    const recent = book.borrows[0];
    return !recent.returned&&recent.id===account.id;
  })
  .map(book=>{
    const author = authors.find(author => author.id==book.authorId)
    return {...book, author}
  })
}
module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
///////////////////////////////////////////////////////////////