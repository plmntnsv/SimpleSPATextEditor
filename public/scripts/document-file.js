class DocumentFile {
    constructor(name, author, category, content) {
        this.name = name;
        this.author = author;
        this.content = content;
        this.createdOn = getDate();
        this.id = id.next();
    }

    get name() {
        return this._name;
    }
    set name(n) {
        //validate
        this._name = n;
    }

    get createdOn() {
        return this._createdOn;
    }
    set createdOn(cr) {
        this._createdOn = cr;
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

function getDate() {
    let today = new Date();
    let day = today.getDate();
    let month = today.getMonth() + 1;
    let year = today.getFullYear();
    let hours = today.getHours();
    let minutes = today.getMinutes();

    if (day < 10) {
        day = '0' + day;
    }

    if (month < 10) {
        month = '0' + month;
    }

    today = `${day}/${month}/${year} - ${hours}:${minutes}h`;

    return today;
}

let id = (function () {
    let id = 0;

    function next() {
        id += 1;
        return id;
    }
    return {
        next: next
    };
})();

export {
    DocumentFile
};