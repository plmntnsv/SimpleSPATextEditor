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
    let $deleteButtons = $(".delete-btn");
    let $paragraphs = $(".paragraph");
    let $makePublicButtons = $(".make-public-btn");
    let $displayPreview = $("#display-perview");
    let $conformationForms = $(".conformation-form");
    let $yesBtn = $(".yes-btn");
    let $noBtn = $(".no-btn");

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

    let fileName;
    let categoryName;
    let $clickedDelBtn;
    let $formToDel;
    let pToDelete;

    $deleteButtons.on("click", function () {
        $clickedDelBtn = $(this);
        fileName = $clickedDelBtn.attr("name");
        categoryName = $categorySelect.val();
        $clickedDelBtn.attr('disabled', 'disabled');
        pToDelete = $paragraphs.filter('[name="' + fileName + '"]');
    });

    $(".dialog-link").click(function (event) {
            $("#dialog").dialog("open");
            console.log(event);
            event.preventDefault();
        });

        $("#dialog").dialog({
            autoOpen: false,
            width: 400,
            draggable: true,
            resizable: false,
            beforeClose: function (event, ui) {
                $clickedDelBtn.removeAttr("disabled");
            },
            buttons: [{
                    text: "Ok",
                    click: function () {
                        $clickedDelBtn.closest("form").remove();
                        pToDelete.remove();
                        data.getSavedFile(fileName, categoryName).then((snap) => data.deleteFile(fileName, categoryName));
                        $( this ).dialog("close");
                    }
                },
                {
                    text: "Cancel",
                    click: function () {
                        $clickedDelBtn.removeAttr("disabled");
                        $( this ).dialog("close");
                    }
                }
            ]
        });
}