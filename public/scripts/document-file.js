class DocumentFile {
    constructor(name) {
        this.name = name;
        this.createdOn = getDate();
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
    set createdOn(c) {
        this._createdOn = c;
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
export { DocumentFile };