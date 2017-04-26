import { templateLoader } from 'templateLoader';
import { DocumentFile } from 'documentFile';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('/workbench')
        .then((template) => {
            let html = template;
            $contentContainer.html(html);

            let $saveBtn = $("#save-btn");
            let $clearBtn = $("#clear-btn");
            let $txtArea = $("#txt-area");
            let $dumpster = $("#dumpster");
            let val;

            if ($dumpster.html() !== '') {
                $txtArea.val($dumpster.html());
            }

            $txtArea.on("input", function () {
                $dumpster.html($txtArea.val());
            });

            $saveBtn.on("click", function () {
                val = $txtArea.val();
                let newFile = new DocumentFile("name", "author", val); 
                console.log(newFile);               
                $dumpster.html(val);
            });

            $clearBtn.on("click", function () {
               $txtArea.val('');
               $dumpster.html('');
            });
        });
}