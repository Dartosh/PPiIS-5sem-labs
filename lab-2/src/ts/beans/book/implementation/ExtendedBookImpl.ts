import Book from "../Book";
import BookInfo from "../BookInfo";
import BookmarkSet from "../BookmarkSet";

class ExtendedBookImpl extends Book {
    private audiofile: File;
    private bookmarks: BookmarkSet;

    constructor(info: BookInfo, file: File, id: number, audiofile: File, bookmarks: BookmarkSet) {
        super(info, file, id);
        this.audiofile = audiofile;
        this.bookmarks = bookmarks;
    }

    playAudio(): void {
        // implementation
    }

}

export default ExtendedBookImpl;