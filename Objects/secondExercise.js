const books = [{
Title : `A`,
Autor : `a`,
Read : true},
{Title : `B`,
    Autor : `b`,
    Read : true},
    {Title : `C`,
    Autor : `c`,
    Read : false}];
    console.log(books[0]);
    console.log(books[1]);
    console.log(books[2]);

    for (i=0 ; i < books.length; i++ ){
        const book= books[i];
        const bookInfo = book.Title + ' by ' + book.Autor;
  if (book.Read){
     console.log(`you already read ${bookInfo}`);
  }else{
    console.log(`you still need to read ${bookInfo}`);
}
};

