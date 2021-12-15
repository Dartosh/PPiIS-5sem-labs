import BookInfo from "./BookInfo";


interface RatingCalc {
    calcGrade(bookInfo: BookInfo): number;
}

export default RatingCalc;