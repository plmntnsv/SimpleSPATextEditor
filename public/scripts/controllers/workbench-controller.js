import {
    templateLoader
} from 'templateLoader';

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

            $saveBtn.on("click", function () {
                val = $txtArea.val();
                $dumpster.html(val);
            });

            $clearBtn.on("click", function () {
               $txtArea.val('');
            });
        });
}