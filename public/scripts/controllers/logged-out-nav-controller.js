import { templateLoader } from 'templateLoader';

let $navContainer = $("#main-nav");

export function get() {
    templateLoader.get('logged-out-nav')
        .then((template) => {
          let html = template;
          $navContainer.html(html);
        });
}