import ReviewStore from "../ReviewStore";
import ReviewStoreImpl from "./ReviewStoreImpl";
import RatingCalc from "../RatingCalc";
import BookInfo from "../BookInfo";

class RatingCalcImpl implements RatingCalc{

    private reviewStore: ReviewStore;

    constructor() {
        this.reviewStore = new ReviewStoreImpl();
    }

    calcGrade(bookInfo: BookInfo): number {
        // implementation
        return 0;
    }

}

export default RatingCalcImpl;