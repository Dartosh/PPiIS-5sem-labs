import User from "../../beans/user/User";
import AdminDAO from "../AdminDAO";

class SQLAdminDAO implements AdminDAO {

    signIn(login: string, password: string): void {
        // implementation
    }

    registration(user: User): void {
        // implementation
    }

}

export default SQLAdminDAO;