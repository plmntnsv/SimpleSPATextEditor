let date = (function() {
    function getDate(params) {
        let today = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();
        let hours = today.getHours();
        let minutes = today.getMinutes();

        if (hours < 10) {
            hours = "0" + hours;
        }

         if (minutes < 10) {
            minutes = "0" + minutes;
        }

        if (day < 10) {
            day = "0" + day;
        }

        if (month < 10) {
            month = "0" + month;
        }

        today = `${day}/${month}/${year} - ${hours}:${minutes}h`;

        return today;
    }
    
    return {
        getDate
    }
})();

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
    date,
    fileIdGenerator,
    categoryIdGenerator,
    userIdGenerator
}