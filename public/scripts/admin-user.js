import User from "user";

class Admin extends User {
    constructor(){
        super(name, password, email, country);
        this.role = "admin";
    }
}

export {
    Admin
}