import Review from "./Review";

interface ReviewStore {

    getReview(id: number): Review;

}

export default ReviewStore;