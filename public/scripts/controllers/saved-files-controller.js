import {
    templateLoader
} from 'templateLoader';
import * as data from 'data';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('saved-files')
        .then((template) => {
            let html = template;
            let context = data.getSavedFiles()
                .then(function (snapshot) {
                    let files = snapshot.val();
                    let theCompiledHtml = html(files);
                    $contentContainer.html(theCompiledHtml);
                 });
        });
}