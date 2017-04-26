import { requester } from './requester';

function getSaveFiles() {
    //add auth
    return requester.get("/saved-files");
}