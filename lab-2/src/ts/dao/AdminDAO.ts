import User from "../beans/user/User";

interface AdminDAO {
    signIn(login: string, password: string): void;
    registration(admin: User): void;
}

export default AdminDAO;