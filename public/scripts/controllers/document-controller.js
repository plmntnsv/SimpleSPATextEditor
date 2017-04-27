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
            let textContent;
            let searchContent;

            if ($dumpster.html() !== '') {
                $txtArea.textContent($dumpster.html());
            }

            $txtArea.on("input", function () {
                $dumpster.html($txtArea.val());
                if ($txtArea.val() === '') {
                    $saveFileBtn.attr('disabled', 'disabled');
                    $clearBtn.attr('disabled', 'disabled');
                } else {
                    $saveFileBtn.removeAttr('disabled');
                    $clearBtn.removeAttr('disabled');
                }
            });

            $searchBtn.on("click", function () {
                searchContent = $inputSearchVal.val();
                let foundMatch = $txtArea.val().indexOf(searchContent);

                while (foundMatch > 0) {
                    

                    foundMatch = $txtArea.val().indexOf(searchContent, foundMatch + 1);
                }

            });

            $saveFileBtn.on("click", function () {
                $saveContainer.toggleClass("hidden");
            });

            $cancelBtn.on("click", function () {
                $saveContainer.toggleClass("hidden");
            });

            $saveBtn.on("click", function () {
                $saveContainer.toggleClass("hidden");
                textContent = $txtArea.val();
                let newFile = new DocumentFile("name", "author", textContent);
                console.log(newFile);
                $dumpster.html(textContent);
            });

            $clearBtn.on("click", function () {
                $saveFileBtn.attr('disabled', 'disabled');
                $clearBtn.attr('disabled', 'disabled');
                $txtArea.val('');
                $dumpster.html('');
            });
        });
}