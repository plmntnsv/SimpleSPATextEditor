import { templateLoader } from 'templateLoader';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('saved-files')
        .then((template) => {
            let html = template;
            $contentContainer.html(html);
        });
}