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

export function postSaveFile(categoryName, file) {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/categories/${categoryName}/files/`;
    let updates = {};
    updates[url + file._name] = file;
    return firebase.database().ref().update(updates);
}

export function deleteFile(fileName, categoryName) {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/categories/${categoryName}/files/${fileName}`;
    return firebase.database().ref(url).remove();
}

export function getCategories() {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/`;
    return firebase.database().ref(url).once('value');
}

export function postCategory(category, file) {
    let user = firebase.auth().currentUser;
    let url = `/data/saved-files/${user.uid}/categories/`;
    let updates = {};
    updates[url + category._name + "/category/"] = category;
    updates[url + category._name + "/files/" + file._name] = file;
    return firebase.database().ref().update(updates);
}

export function postUser(newUser) {
    let user = firebase.auth().currentUser;
    let url = `/data/users/${user.uid}`;
    let updates = {};
    updates[url] = newUser;
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