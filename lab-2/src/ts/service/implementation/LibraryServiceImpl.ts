import LibraryService from "../LibraryService";
import Book from "../../beans/book/Book";


class LibraryServiceImpl implements LibraryService {

    addNewBook(book: Book): void {
        // implementation
    }

    addEditedBook(book: Book): void {
        // implementation
    }

    deleteBook(): void {
        // implementation
    }

    findBook(): Book {
        let book: Book = new Book();

        // implementation

        return book;
    }

}

export default LibraryServiceImpl;