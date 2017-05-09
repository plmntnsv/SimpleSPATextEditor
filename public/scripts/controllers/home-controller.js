import { templateLoader } from 'templateLoader';

let $contentContainer = $("#contents-container");

export function get() {
    let $navTabs = $(".nav-item");
    $navTabs.removeClass("selected-nav");
    let $homeTab = $("#nav-home");
    $homeTab.addClass("selected-nav");
    templateLoader.get('home')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        });
}