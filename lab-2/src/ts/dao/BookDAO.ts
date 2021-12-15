import Book from "../beans/book/Book";
import Review from "../beans/book/Review";


interface BookDAO {
    addBook(): void;
    deleteBook(book: Book): void;
    findBook(): void;
    changeBook(): void;
    addReview(review: Review): void;
}

export default BookDAO;