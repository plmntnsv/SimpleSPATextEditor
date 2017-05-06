import { templateLoader } from 'templateLoader';
import * as data from 'data';
import * as savedFilesLogic from 'savedFilesLogic';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('categories')
        .then((template) => {
            let html = template;
            let context = data.getCategories()
                .then(function (snapshot) {
                    let categories = snapshot.val();
                    let theCompiledHtml = html(categories);
                    $contentContainer.html(theCompiledHtml);
                 })
                 .then(() => savedFilesLogic.categoryFilesInit());
        });
}