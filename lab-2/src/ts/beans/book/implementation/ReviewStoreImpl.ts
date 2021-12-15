import ReviewStore from "../ReviewStore";
import Review from "../Review";

class ReviewStoreImpl implements ReviewStore {

    getReview(id: number): Review {
        let author: string = 'Antony';
        let text: string = 'Bla-bla-bla';
        let grade: number = 10;

        // implementation

        return new Review(author, grade, text);
    }

}

export default ReviewStoreImpl;