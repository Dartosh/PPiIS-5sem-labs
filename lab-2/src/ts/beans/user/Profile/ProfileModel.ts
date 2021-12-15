import ColorSet from "./ColorSet";
import Book from "../../book/Book";
import exp from "constants";

abstract class ProfileModel {

    public colorSet: ColorSet;
    public bookList: Array<Book>;
    public avatar: File;

    constructor(colorSet: ColorSet, bookList: Array<Book>, avatar: File) {
        this.colorSet = colorSet;
        this.bookList = bookList;
        this.avatar = avatar;
    }

}

export default ProfileModel;