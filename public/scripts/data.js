import { requester } from 'requester';

export function getSavedFiles() {
    return requester.get("/saved-files/files");
}

export function postSaveFile(file) {  
  return requester.post("/saved-files/files/file-", file);
}

function postCategory(name) {
}

function getCategories(params) {
    
}

function postUser(params) {
    
}

function getUsers(params) {
    
}
