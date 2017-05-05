import {
    templateLoader
} from 'templateLoader';
import * as data from 'data';
import * as savedFilesController from 'savedFilesController';




export function categoryFilesInit() {
    let $categorySelect = $("#show-category");
    $categorySelect.change(function () {
        let category = $(this).val();
        savedFilesController.get(category);
    });
}

export function savedFilesInit() {
    let $categorySelect = $("#show-category");    
    let $previewButtons = $(".preview-btn");
    let $displayPreview = $("#display-perview");
    $previewButtons.on("click", function () {
        let fileName = $(this).attr("name");
        let categoryName = $categorySelect.val();
        data.getSavedFile(fileName, categoryName).then((snap) => $displayPreview.html(snap.val()._content));
    });
}