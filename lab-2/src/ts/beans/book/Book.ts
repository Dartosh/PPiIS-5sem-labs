import BookInfo from "./BookInfo";

abstract class Book {

    public info: BookInfo;
    public file: File;
    private id: number;

    constructor(info: BookInfo, file: File, id: number) {
        this.info = info;
        this.file = file;
        this.id = id;
    }

}

export default Book;