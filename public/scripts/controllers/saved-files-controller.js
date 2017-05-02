import { templateLoader } from 'templateLoader';
import * as data from 'data';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('saved-files')
        .then((template) => {
            let html = template;
            $contentContainer.html(html);
            data.getSavedFiles();
        });
}