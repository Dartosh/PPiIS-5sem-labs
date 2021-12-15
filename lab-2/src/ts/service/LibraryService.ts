import Book from "../beans/book/Book";

interface LibraryService {
    addNewBook(book: Book): void;
    addEditedBook(book: Book): void;
    findBook(/*Критерий*/): Book;
    deleteBook(): void;
}

export default LibraryService;