import UserDAO from '../UserDAO';
import User from "../../beans/user/User";
import exp from "constants";

class SQLUserDAO implements UserDAO {
    signIn(login: string, password: string): void {
        // implementation
    }
    registration(user: User): void {
        // implementation
    }
}

export default SQLUserDAO;