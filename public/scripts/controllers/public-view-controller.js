import { templateLoader } from 'templateLoader';
import * as data from "data";

let $contentContainer = $("#contents-container");

export function get(fileName) {
    console.log(fileName);
    templateLoader.get('public-view')
        .then((template) => {
            let html = template;
            let context = data.getPublicFile(fileName)
                .then(function (snapshot) {
                    let publicFile = snapshot.val();
                    let theCompiledHtml = html(publicFile);
                    $contentContainer.html(theCompiledHtml);
                });
        });
}