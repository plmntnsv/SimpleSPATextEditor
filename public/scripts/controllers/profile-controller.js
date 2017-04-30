import { templateLoader } from 'templateLoader';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('profile')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        });
}