import {
    templateLoader
} from 'templateLoader';
import {
    DocumentFile
} from 'documentFile';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('/document')
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
            let $dumpster = $("#dumpster");
            let $fileNameInput = $("#file-name");
            let textAreaContent;
            let searchContent;


            $txtArea.focus();

            if ($dumpster.html() !== '') {
                $txtArea.html($dumpster.html());
            }

            $txtArea.on("input", function () {
                $dumpster.html($txtArea.text());

                if ($txtArea.html() === '') {
                    $saveFileBtn.attr('disabled', 'disabled');
                    $clearBtn.attr('disabled', 'disabled');
                } else {
                    $saveFileBtn.removeAttr('disabled');
                    $clearBtn.removeAttr('disabled');
                }
            });

            // TODO: implement more decent search if time...
            $searchBtn.on("click", function () {
                searchContent = $inputSearchVal.val();
                let text = $txtArea.text();

                var regexp = new RegExp(searchContent, "g");
                text = text.replace(regexp, `<span style="color:red">${searchContent}</span>`);
                $txtArea.html(text);
            });

            $txtArea.on("focus", function () {
                let text = $txtArea.text();

                var regexpStart = new RegExp('<span style="color:red">', "g");
                var regexpEnd = new RegExp('</span>', "g");
                text = text.replace(regexpStart, '');
                text = text.replace(regexpEnd, '');
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

                let newFile = new DocumentFile(name, "author", textAreaContent);
                console.log(newFile); // remove later
                $dumpster.html(textAreaContent);
                $txtArea.focus();
            });

            $clearBtn.on("click", function () {
                $saveFileBtn.attr('disabled', 'disabled');
                $clearBtn.attr('disabled', 'disabled');
                $txtArea.html('');
                $dumpster.html('');
            });

            // TODO: fix selection to work with B U I
            $txtArea.on('selectstart', function () {
                $(document).one('mouseup', function () {
                    console.log(this.getSelection());
                });
            });

        });
}