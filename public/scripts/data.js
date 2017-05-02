import {
    requester
} from 'requester';

export function getSavedFiles(categoryName) {
    let url = "/saved-files/data/categories/"+categoryName+"/files";
    return firebase.database().ref(url).once('value');
}

export function postSaveFile(categoryName, file) {
    let url = "/saved-files/data/categories/"+categoryName+"/files/";
    let updates = {};
    updates[url + file._name] = file;
    return firebase.database().ref().update(updates);
}

export function postCategory(category, file) {
    let url = "/saved-files/data/categories/";
    let updates = {};
    updates[url + category._name + "/category/"] = category;
    updates[url + category._name + "/files/" + file._name] = file;
    return firebase.database().ref().update(updates);
}

export function getCategory(name) {
let url = "/saved-files/data/categories/" + name;
    return firebase.database().ref(url+name).once('value');
}

export function postUser(params) {

}

export function getUsers(params) {

}