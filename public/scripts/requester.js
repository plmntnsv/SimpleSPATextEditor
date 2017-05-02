function request(url, type, file) {
    const promise = new Promise((resolve, reject) => {
        if (type === "POST") {
            let updates = {};
            updates[url + file.id] = file;

            resolve(firebase.database().ref().update(updates));
        } else if (type === "GET") {
            resolve(firebase.database().ref(url).once('value')
                .then(function (snapshot) {
                    console.log(snapshot.val());
                }));
        } else if (type === "SET") {

        } else if (type === "DELETE") {
            
        }
    });

    return promise;
}

function get(url) {
    return request(url, 'GET');
}

function post(url, file) {
    return request(url, 'POST', file);
}

function set(url, file) {
    return request(url, 'SET', file);
}

function del(url, file) {
    return request(url, 'DELETE', file);
}

const requester = {
    get,
    post,
    set,
    del
};

export {
    requester
};