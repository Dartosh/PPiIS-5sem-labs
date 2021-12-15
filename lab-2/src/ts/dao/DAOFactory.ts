import BookDAO from "./BookDAO";
import UserDAO from "./UserDAO";
import SQLBookDAO from "./implementation/SQLBookDAO";
import SQLUserDAO from "./implementation/SQLUserDAO";
import AdminDAO from "./AdminDAO";
import SQLAdminDAO from "./implementation/SQLAdminDAO";

class DAOFactory {
    private static instance: DAOFactory;

    private sqlBookDAO: BookDAO;
    private sqlUserDAO: UserDAO;
    private sqlAdminDAO: AdminDAO;

    constructor() {
        DAOFactory.instance = new DAOFactory();
        this.sqlBookDAO = new SQLBookDAO();
        this.sqlUserDAO = new SQLUserDAO();
        this.sqlAdminDAO = new SQLAdminDAO();
    }

    public static getInstance(): DAOFactory {
        return this.instance;
    }

    public getUserDAO(): UserDAO {
        return this.sqlUserDAO;
    }

    public getBookDAO(): BookDAO {
        return this.sqlBookDAO;
    }

    public getAdminDAO(): AdminDAO {
        return this.sqlAdminDAO;
    }

}