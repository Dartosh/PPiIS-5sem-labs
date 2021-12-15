import Bookmark from './Bookmark';

abstract class BookmarkSet {

    public bookmarkSet: Map<number, Bookmark>;

    constructor(bookmarkSet: Map<number, Bookmark>) {
        this.bookmarkSet = bookmarkSet;
    }

}

export default BookmarkSet;