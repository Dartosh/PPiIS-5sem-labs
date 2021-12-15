class Review {

    public author: string;
    public grade: number;
    public text: string;

    constructor(author: string, grade: number, text: string) {
        this.author = author;
        this.text = text;
        this.grade = grade;
    }

}

export default Review;