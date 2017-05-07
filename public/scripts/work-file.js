import * as utils from "utils";

class WorkFile {
    constructor(name, author) {
        this.name = name;
        this.author = author;
        this.createdOn = utils.date.getDate();
        this.id = utils.fileIdGenerator.next();
    }

    get name() {
        return this._name;
    }
    set name(fileName) {
        if (!fileName) {
            throw "File name cannot be null";
        }

        if (fileName.length === 0) {
            throw "File name cannot be empty";
        }

        this._name = fileName;
    }

    get author() {
        return this._author;
    }
    set author(a) {
        this._author = a;
    }
}

export {
    WorkFile
};