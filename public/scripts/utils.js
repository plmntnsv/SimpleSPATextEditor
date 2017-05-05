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

let fileIdGenerator = (function () {
    let id = 0;

    function next() {
        id += 1;
        return id;
    }
    return {
        next: next
    };
})();

let categoryIdGenerator = (function () {
    let id = 0;

    function next() {
        id += 1;
        return id;
    }
    return {
        next: next
    };
})();

let userIdGenerator = (function () {
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
    getDate,
    fileIdGenerator,
    categoryIdGenerator,
    userIdGenerator
}