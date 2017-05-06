import { templateLoader } from 'templateLoader';
import * as loginLogic from "loginLogic";

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('log-in')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        })
        .then(() => loginLogic.init());
}