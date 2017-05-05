import * as utils from "utils";

class CategoryFile {
    constructor(name, author) {
        this.name = name;
        this.author = author;
        this.createdOn = utils.getDate();
        this.id = utils.categoryIdGenerator.next();
    }

    get name() {
        return this._name;
    }
    set name(categoryName) {
        if (!categoryName) {
            throw "Category name cannot be null";
        }

        if (categoryName.length === 0) {
            throw "Category name cannot be empty";
        }

        this._name = categoryName;
    }

    get author() {
        return this._author;
    }
    set author(a) {
        this._author = a;
    }
}

export {
    CategoryFile
};