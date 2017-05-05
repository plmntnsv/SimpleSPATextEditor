import { templateLoader } from 'templateLoader';
import * as data from 'data';
import * as savedFilesFunctionality from 'savedFilesFunctionality';

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
                 .then(() => savedFilesFunctionality.categoryFilesInit());
        });
}