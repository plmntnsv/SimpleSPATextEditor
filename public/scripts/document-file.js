import * as utils from "utils";

class DocumentFile {
    constructor(name, author, category, content) {
        this.name = name;
        this.category = category;
        this.author = author;
        this.content = content;
        this.createdOn = utils.getDate();
        this.id = utils.fileIdGenerator.next();
    }

    get name() {
        return this._name;
    }
    set name(documentName) {
        if (!documentName) {
            throw "Document name cannot be null";
        }

        if (documentName.length === 0) {
            throw "Document name cannot be empty";
        }

        this._name = documentName;
    }

    get category() {
        return this._category;
    }
    set category(ca) {
        this._category = ca;
    }

    get content() {
        return this._content;
    }
    set content(c) {
        this._content = c;
    }

    get author() {
        return this._author;
    }
    set author(a) {
        this._author = a;
    }
}

export {
    DocumentFile
};