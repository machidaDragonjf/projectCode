// Note: Please do not change the name of the functions. The tests use those names to validate your code.

function getTotalBooksCount(books) {
  return books.length;
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let result = books.filter((book) => book.borrows[0].returned === false);
  return result.length;
}

function getMostCommonGenres(books) {
  let newArray = [];
  const myObject = {};
  for (book of books) {
    // console.log(book)
    if (myObject[book.genre]) {
      myObject[book.genre] = myObject[book.genre] + 1;
    } else {
      myObject[book.genre] = 1;
    }
  }
  // console.log(myObject)
  let myKey = Object.keys(myObject);
  for (key of myKey) {
    newArray.push({ name: key, count: myObject[key] });
  }
  newArray.sort((genreA, genreB) => (genreA.count < genreB.count ? 1 : -1));
  newArray = newArray.splice(0, 5);

  return newArray;
}

function getMostPopularBooks(books) {
  let object = {};
  let array = [];
  for (book of books) {
    object[book.title] = book.borrows.length;
    array.push({ name: book.title, count: object[book.title] });
  }
  //console.log(array)
  array.sort((bookA, bookB) => (bookA.count < bookB.count ? 1 : -1));
  array = array.splice(0, 5);
  return array;
}

function getMostPopularAuthors(books, authors) {
  let array = [];
  let object = {};

 function getCount(authorId){
  // console.log(authorId)
   let count = 0;
     for (book of books)
     {
       if (authorId === book.authorId )
       {
      count = count + book.borrows.length
       }
     }
     return count; 
 }

  for (author of authors)
  {
    let value = getCount(author.id)
    array.push({name: `${author.name.first} ${author.name.last}`, count: value})

  }
  array.sort((authorA,authorB)=>(authorA.count < authorB.count)? 1:-1)
  array = array.slice(0,5); 
  return(array); 
}
module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
