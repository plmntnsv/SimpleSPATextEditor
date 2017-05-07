import { DocumentFile } from 'documentFile';
import { CategoryFile } from 'categoryFile';
import * as data from 'data';

export function init() {
    let $saveBtn = $("#save-btn");
    let $saveFileBtn = $("#save-file-btn");
    let $cancelBtn = $("#cancel-btn");
    let $inputSearchVal = $("#input-search");
    let $searchBtn = $("#search-btn");
    let $saveContainer = $(".save-window");
    let $clearBtn = $("#clear-btn");
    let $txtArea = $("#txt-area");
    let $fileNameInput = $("#file-name");

    let $fontFamilySelect = $("#font-family-select");
    let $fontSizeSelect = $("#font-size-select");
    let $boldBtn = $(".bold-btn");
    let $italicBtn = $(".italic-btn");
    let $underLineBtn = $(".underline-btn");

    let searchContent;
    let user = firebase.auth().currentUser;

    $txtArea.focus();

    if (sessionStorage.getItem("currentDoc")) {
        $txtArea.html(sessionStorage.getItem("currentDoc"));
        $saveFileBtn.removeAttr('disabled');
        $clearBtn.removeAttr('disabled');
    }

    $txtArea.on("input", function () {
        sessionStorage.setItem("currentDoc", $txtArea.html());
        if ($txtArea.text().length <= 0) {
            $saveFileBtn.attr('disabled', 'disabled');
            $clearBtn.attr('disabled', 'disabled');
        } else {
            $saveFileBtn.removeAttr('disabled');
            $clearBtn.removeAttr('disabled');
        }
    });

    $txtArea.on("focus", function () {
        let text = $txtArea.html();

        var regexpStart = new RegExp('<span class="search-result">', "g");
        var regexpEnd = new RegExp('</span>', "g");
        text = text.replace(regexpStart, '');
        text = text.replace(regexpEnd, '');
        $txtArea.html(text);
    });

    // TODO: implement more decent search if time...
    $searchBtn.on("click", function () {
        searchContent = $inputSearchVal.val();
        let text = $txtArea.html();

        var regexp = new RegExp(searchContent, "g");
        text = text.replace(regexp, `<span class="search-result">${searchContent}</span>`);
        $txtArea.html(text);
    });

    $saveFileBtn.on("click", function () {
        $saveContainer.toggleClass("hidden");
    });

    $cancelBtn.on("click", function () {
        $saveContainer.toggleClass("hidden");
    });

    let $chooseCategory = $("#choose-category");
    let $createCategoryStartBtn = $("#create-category-btn");
    let $createCategoryName = $("#create-category-text");
    let newCategoryName = "";

    $createCategoryName.on("input", function () {
        newCategoryName = $createCategoryName.val();
    });

    $saveBtn.on("click", function () {
        $fileNameInput.focus();
        $saveContainer.toggleClass("hidden");
        let textAreaContent = $txtArea.html();
        let name = $fileNameInput.val();
        let categoryName;
        let newCategory;
        let category;

        if (name === "") {
            alert("Name cannot be empty!");
            return;
        }
        let author = user.displayName;
        // if no new category is provided the file is saved to the DB for the selected category else creates new category and saves it there
        if (newCategoryName === "") {
            categoryName = $chooseCategory.val();
            
            let newFile = new DocumentFile(name, author, categoryName, textAreaContent);
            data.postSaveFile(categoryName, newFile);
        } else {
            categoryName = $createCategoryName.val();
            let $newOption = $(`<option value="${categoryName}">${categoryName}</option>`);
            $newOption.appendTo($chooseCategory);
            category = new CategoryFile(categoryName, author);
            let newFile = new DocumentFile(name, author, category._name, textAreaContent);

            data.postCategory(category, newFile);
        }

        $createCategoryName.val("");
        newCategoryName = $createCategoryName.val();
        $fileNameInput.val("");
        $createCategoryName.addClass("hidden");
        //$txtArea.focus();
    });

    $createCategoryStartBtn.on("click", function () {
        $createCategoryName.removeClass("hidden").focus();
    });

    $clearBtn.on("click", function () {
        $saveFileBtn.attr('disabled', 'disabled');
        $clearBtn.attr('disabled', 'disabled');
        $txtArea.html('');
    });

    // text decoration events below
    $boldBtn.on("click", function () {
        document.execCommand('bold');
    });

    $italicBtn.on("click", function () {
        document.execCommand('italic');
    });

    $underLineBtn.on("click", function () {
        document.execCommand('underline');
    });

    $fontFamilySelect.change(function () {
        let family = $(this).val();
        let text = $txtArea.html();
        $txtArea.css("font-family", family);
        $txtArea.html(text);
    });

    $fontSizeSelect.change(function () {
        let size = $(this).val();
        let text = $txtArea.html();
        $txtArea.css("font-size", `${size}px`);
        $txtArea.html(text);
    });
}