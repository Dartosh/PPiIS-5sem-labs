
abstract class AboutMe {

    public name: string;
    public numberOfReadBooks: number;
    public info: string;

    constructor(name: string, numberOfReadBooks: number, info: string) {
        this.name = name;
        this.numberOfReadBooks = numberOfReadBooks;
        this.info = info;
    }

    // Mistake
    changeColor(id: number): void {
        // implementation
    }

}

export default AboutMe;