import Command from './Command'

class CommandProvider {
    private repository: Map<string, Command>;

    constructor() {
        this.repository = new Map<string, Command>();
    }

}

export default CommandProvider