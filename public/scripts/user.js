import * as utils from "utils";

class User {
    constructor(name, email, country) {
        this.name = name;
        this.email = email;
        this.country = country;
        this.role = "user";
        this.createdOn = utils.getDate();
        this.id = utils.userIdGenerator.next();
    }

    get name() {
        return this._name;
    }
    set name(name) {
        if (!name) {
            throw "User name cannot be null";
        }

        if (name.length === 0) {
            throw "User name cannot be empty";
        }

        this._name = name;
    }

    get email() {
        return this._email;
    }
    set email(mail) {
        this._email = mail;
    }

    get country() {
        return this._country;
    }
    set country(country) {
        this._country = country;
    }
}

export {
    User
};