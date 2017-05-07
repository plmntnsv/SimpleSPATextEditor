import { templateLoader } from 'templateLoader';
import * as profileLogic from "profileLogic";

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('profile')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        })
        .then(() => { profileLogic.init(); });
}