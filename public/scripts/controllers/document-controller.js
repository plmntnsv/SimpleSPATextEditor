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

            // TODO: implement more decent search...
            $searchBtn.on("click", function () {
                searchContent = $inputSearchVal.val();
                let text = $txtArea.text();

                var regexp = new RegExp(searchContent, "g");
                console.log(regexp);
                text = text.replace(regexp, `<span style="color:red">${searchContent}</span>`);
                console.log(text);
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
                textContent = $txtArea.html();
                let newFile = new DocumentFile("name", "author", textContent);
                console.log(newFile);
                $dumpster.html(textContent);
            });

            $clearBtn.on("click", function () {
                $saveFileBtn.attr('disabled', 'disabled');
                $clearBtn.attr('disabled', 'disabled');
                $txtArea.html('');
                $dumpster.html('');
            });
        });
}