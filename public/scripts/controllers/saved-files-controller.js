import { templateLoader } from 'templateLoader';
import * as data from 'data';
import * as savedFilesLogic from 'savedFilesLogic';

export function get(category) {
    templateLoader.get('saved-files')
        .then((template) => {
            let $contentContainer = $("#save-files-container");
            let html = template;
            let context = data.getSavedFiles(category)
                .then(function (snapshot) {
                    let files = snapshot.val();
                    if (files.files) {
                        let theCompiledHtml = html(files);
                        $contentContainer.html(theCompiledHtml);
                    } else {
                        $contentContainer.html("No files in that category yet.");
                    }
                })
                .then(() => savedFilesLogic.savedFilesInit());
        });
}