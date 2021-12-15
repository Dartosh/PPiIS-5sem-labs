import ProfileModel from "./Profile/ProfileModel";

class User {

    private profileLog: ProfileModel;

    constructor(profileLog: ProfileModel) {
        this.profileLog = profileLog;
    }

}

export default User;