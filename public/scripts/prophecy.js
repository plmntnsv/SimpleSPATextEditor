class Prophecy {
    constructor(user, text) {
        this._user = user;
        this._text = text;
        this.date = new Date().toLocaleString();
    }

    get user() {
        return this._user;
    }
    get text() {
        return this._text;
    }
}