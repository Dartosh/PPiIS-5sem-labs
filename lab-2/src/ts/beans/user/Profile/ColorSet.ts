import exp from "constants";

abstract class ColorSet {

    public colorRepository: Map<string, number>;

    constructor() {
        this.colorRepository = new Map<string, number>();
        // implementation of filling colorRepository
    }

    changeColor(id: number): void {
        // implementation
    }

}

export default ColorSet;