import { templateLoader } from "templateLoader";
import * as registerLogic from "registerLogic";

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('register')
        .then((template) => {
            let html = template;
            $contentContainer.html(html);
        })
        .then(() => registerLogic.init());
}
