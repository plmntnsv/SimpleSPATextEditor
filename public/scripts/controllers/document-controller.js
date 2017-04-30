import {
    templateLoader
} from 'templateLoader';
import {
    DocumentFile
} from 'documentFile';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('document')
        .then((template) => {
            let html = template;
            $contentContainer.html(html);

            let $saveBtn = $("#save-btn");
            let $saveFileBtn = $("#save-file-btn");
            let $cancelBtn = $("#cancel-btn");
            let $inputSearchVal = $("#input-search");
            let $searchBtn = $("#search-btn");
            let $saveContainer = $(".save-window");
            let $clearBtn = $("#clear-btn");
            let $txtArea = $("#txt-area");
            let $previewPanel = $("#preview-panel");
            let $fileNameInput = $("#file-name");

            let $fontFamilySelect = $("#font-family-select");
            let $fontSizeSelect = $("#font-size-select");
            let $boldBtn = $(".bold-btn");
            let $italicBtn = $(".italic-btn");
            let $underLineBtn = $(".underline-btn");

            let textAreaContent;
            let searchContent;
            let selectedText;


            $txtArea.focus();

            if ($previewPanel.html() !== '') {
                $txtArea.html($previewPanel.html());
            }

            $txtArea.on("input", function () {
                $previewPanel.html($txtArea.html());
                if ($txtArea.html() === '') {
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

            $saveBtn.on("click", function () {
                $saveContainer.toggleClass("hidden");
                textAreaContent = $txtArea.html();
                let name = $fileNameInput.val();
                if (name === "") {
                    return;
                }

                let newFile = new DocumentFile(name, "author", category, textAreaContent);
                console.log(newFile); // remove later
                $previewPanel.html(textAreaContent);
                $txtArea.focus();
            });

            $clearBtn.on("click", function () {
                $saveFileBtn.attr('disabled', 'disabled');
                $clearBtn.attr('disabled', 'disabled');
                $txtArea.html('');
                $previewPanel.html('');
            });

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
                $previewPanel.css("font-family", family);
                $txtArea.html(text);
                $previewPanel.html(text);
            });

            $fontSizeSelect.change(function () {
                let size = $(this).val();
                let text = $txtArea.html();
                $txtArea.css("font-size", `${size}px`);
                $previewPanel.css("font-size", `${size}px`);
                $txtArea.html(text);
                $previewPanel.html(text);
            });
        });
}