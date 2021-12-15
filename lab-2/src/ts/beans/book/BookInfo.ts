
abstract class BookInfo {

    public title: string;
    public author: string;
    public rating: number;
    public date: Date;

    constructor(title: string, author: string, rating: number, date: Date) {
        this.title = title;
        this.author = author;
        this.rating = rating;
        this.date = date;
    }

    calcRating(): number {
        // implementation
        return 0;
    };
}

export default BookInfo;