import { templateLoader } from 'templateLoader';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('log-in')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        });
}