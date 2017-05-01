import { templateLoader } from 'templateLoader';
import * as documentFunctionality from 'documentFunctionality';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('document')
        .then((template) => {
            let html = template;
            $contentContainer.html(html);
        })
        .then(() => documentFunctionality.init());
}