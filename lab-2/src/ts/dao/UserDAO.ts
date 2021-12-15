import User from '../beans/user/User';

interface UserDAO {
    signIn(login: string, password: string): void;
    registration(user: User): void;
}

export default UserDAO;