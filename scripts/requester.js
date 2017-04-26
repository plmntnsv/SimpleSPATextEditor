function request(url, type, options, headers) {
    const promise = new Promise((resolve, reject) => $.ajax({
        url,
        type,
        headers,
        options,
        success: resolve,
        error: reject
    }));

    return promise;
}

function get(url) {
    return request(url, 'GET', {}, {});
}

function post(url) {
    return request(url, 'POST', {}, {});
}

const requester = {
    get,
    post
};

export { requester };