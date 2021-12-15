import User from "../beans/user/User";

interface UserService {
    signIn(login: string, password: string): void;
    signOut(login: string): void;
    registration(user: User): void;
}

export default UserService;