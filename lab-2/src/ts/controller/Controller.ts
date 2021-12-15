import CommandProvider from './CommandProvider';

class Controller {
    private commandProvider: CommandProvider;

    constructor() {
        this.commandProvider = new CommandProvider();
    }

    public executeRequest(): string {
        return ' ';
    }
}