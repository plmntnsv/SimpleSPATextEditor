import { templateLoader } from 'templateLoader';
import * as documentLogic from 'documentLogic';
import * as data from 'data';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('document')
        .then((template) => {
            let html = template;
            let context = data.getCategories()
                .then(function (snapshot) {
                    let files = snapshot.val();
                    let theCompiledHtml = html(files);
                    $contentContainer.html(theCompiledHtml);
                 })
                 .then(() => documentLogic.init());
        });
}