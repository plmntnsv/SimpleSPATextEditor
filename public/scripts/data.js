// Saved files
export function getSavedFiles(categoryName) {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/categories/${categoryName}`;

    return firebase.database().ref(url).once('value');
}

export function getSavedFile(fileName, categoryName) {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/categories/${categoryName}/files/${fileName}`;
    return firebase.database().ref(url).once('value');
}

export function postSaveFile(categoryName, fileObj) {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/categories/${categoryName}/files/`;
    let updates = {};
    updates[url + fileObj._name] = fileObj;
    return firebase.database().ref().update(updates);
}

export function deleteFile(fileName, categoryName) {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/categories/${categoryName}/files/${fileName}`;
    return firebase.database().ref(url).remove();
}

// Categories
export function getCategories() {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/`;
    return firebase.database().ref(url).once('value');
}

export function postCategory(categoryObj, fileObj) {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/categories/`;
    let updates = {};
    updates[url + categoryObj._name + "/category/"] = categoryObj;
    updates[url + categoryObj._name + "/files/" + fileObj._name] = fileObj;
    return firebase.database().ref().update(updates);
}

// Users
export function postUser(newUserObj) {
    let user = firebase.auth().currentUser;
    let url = `/data/users/${user.uid}`;
    let updates = {};
    updates[url] = newUserObj;
    return firebase.database().ref().update(updates);
}

export function getUser() {
    let user = firebase.auth().currentUser;
    let url = `/data/users/${user.uid}`;
    let result = firebase.database().ref(url).once('value');
    return result;
}

export function getUsers() {
    let url = `/data/users/`;
    return firebase.database().ref(url).once('value');
}

// Public files
export function postPublicFile(file) {
    let user = firebase.auth().currentUser;
    let url = `/data/public/files/${file._name}`;
    let updates = {};
    updates[url] = file;
    return firebase.database().ref().update(updates);
}

export function getPublicFiles() {
    let url = `/data/public/`;
    return firebase.database().ref(url).once('value');
}