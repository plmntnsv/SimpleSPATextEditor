import { templateLoader } from 'templateLoader';
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
    let $displayPreview = $("#display-perview");
    let $conformationForms = $(".conformation-form");
    let $yesBtn = $(".yes-btn");
    let $noBtn = $(".no-btn");

    $previewButtons.on("click", function () {
        let fileName = $(this).attr("name");
        let categoryName = $categorySelect.val();
        data.getSavedFile(fileName, categoryName).then((snap) => $displayPreview.html(snap.val()._content));
    });

    $deleteButtons.on("click", function () {
        let $this = $(this);
        $this.attr('disabled', 'disabled');
        let fileName = $this.attr("name");
        
        let $selectedConformationForm = $conformationForms.filter('[name="'+fileName+'"]');

        $selectedConformationForm.removeClass("hidden");
    });

    $yesBtn.on("click", function () {
        let $this = $(this);
        let fileName = $this.attr("name");
        let categoryName = $categorySelect.val();
        let $selectedConformationForm = $conformationForms.filter('[name="'+fileName+'"]');
        $selectedConformationForm.closest("div").remove();

        data.getSavedFile(fileName, categoryName).then((snap) => data.deleteFile(fileName, categoryName));
    });

     $noBtn.on("click", function () {
        let $this = $(this);
        let fileName = $this.attr("name");
        let $selectedConformationForm = $conformationForms.filter('[name="'+fileName+'"]');
        let $deleteBtn = $deleteButtons.filter('[name="'+fileName+'"]');
        $deleteBtn.removeAttr("disabled");
        $selectedConformationForm.addClass("hidden");
    });
}