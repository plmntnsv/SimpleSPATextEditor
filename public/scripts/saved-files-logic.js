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
    let $navTabs = $(".nav-item");
    $navTabs.removeClass("selected-nav");
    let $savedFilesTab = $("#nav-saved");
    $savedFilesTab.addClass("selected-nav");
}

export function savedFilesInit() {
    let $categorySelect = $("#show-category");
    let $previewButtons = $(".preview-btn");
    let $deleteButtons = $(".delete-btn");
    let $paragraphs = $(".paragraph");
    let $makePublicButtons = $(".make-public-btn");
    let $displayPreview = $("#display-perview");
    let $conformationForms = $(".conformation-form");
    let $dialog = $("#dialog");

    $("#accordion").accordion();

    $previewButtons.on("click", function () {
        let fileName = $(this).attr("name");
        let categoryName = $categorySelect.val();
        data.getSavedFile(fileName, categoryName).then((snap) => {
            $displayPreview.html(snap.val()._content);
        });
    });

    $makePublicButtons.on("click", function () {
        let fileName = $(this).attr("name");
        let categoryName = $categorySelect.val();
        data.getSavedFile(fileName, categoryName).then((snap) => {
            let file = snap.val();
            file.isPublic = true;
            data.postSaveFile(categoryName, file);
            data.postPublicFile(file);
        }).then(() => {
            console.log('successfully posted to public.');
        });
    });

    $dialog.dialog({
        autoOpen: false,
    });

    $deleteButtons.on("click", function (event) {
        let $clickedDelBtn = $(this);
        let fileName = $clickedDelBtn.attr("name");
        let categoryName = $categorySelect.val();
        let pToDelete = $paragraphs.filter('[name="' + fileName + '"]');        
        $clickedDelBtn.attr('disabled', 'disabled');

        $dialog.dialog("open");
        event.preventDefault();
        $dialog.dialog({
            autoOpen: false,
            width: 400,
            draggable: true,
            resizable: false,
            close: function (event, ui) {
                $clickedDelBtn.removeAttr("disabled");
            },
            buttons: [{
                    text: "Ok",
                    click: function () {
                        $clickedDelBtn.closest("form").remove();
                        pToDelete.remove();
                        data.getSavedFile(fileName, categoryName).then((snap) => data.deleteFile(fileName, categoryName));
                        $(this).dialog("close");
                    }
                },
                {
                    text: "Cancel",
                    click: function () {
                        $clickedDelBtn.removeAttr("disabled");
                        $(this).dialog("close");
                    }
                }
            ]
        });
    });
}