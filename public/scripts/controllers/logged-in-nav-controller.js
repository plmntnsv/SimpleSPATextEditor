import { templateLoader } from 'templateLoader';
import * as loginLogic from "loginLogic";

let $navContainer = $("#main-nav");

export function get() {
    templateLoader.get('logged-in-nav')
        .then((template) => {
          let html = template;
          $navContainer.html(html);
        });
}