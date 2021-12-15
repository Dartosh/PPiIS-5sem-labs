import LibraryService from "./LibraryService";
import LibraryServiceImpl from './implementation/LibraryServiceImpl';

import UserService from "./UserService";
import UserServiceImpl from "./implementation/UserServiceImpl";

import AdminService from "./AdminService";
import AdminServiceImpl from "./implementation/AdminServiceImpl";


class ServiceFactory {
    private static instance: ServiceFactory;

    private adminService: AdminService;
    private userService: UserService;
    private libraryService: LibraryService;

    constructor() {
        ServiceFactory.instance = new ServiceFactory();
        this.adminService = new AdminServiceImpl();
        this.userService = new UserServiceImpl();
        this.libraryService = new LibraryServiceImpl();
    }

    public static getInstance(): ServiceFactory {
        return this.instance;
    }

    public getClientService(): UserService {
        return this.userService;
    }

    public getLibraryService(): LibraryService {
        return this.libraryService;
    }

    public getAdminService(): AdminService {
        return this.adminService;
    }

}