import BookInfo from "../BookInfo";
import RatingCalc from "../RatingCalc";

class BookInfoImpl extends BookInfo {
    private ratingCalc: RatingCalc;

    constructor(title: string, author: string, rating: number, date: Date, ratingCalc: RatingCalc) {
        super(title, author, rating, date);
        this.ratingCalc = ratingCalc;
    }
}