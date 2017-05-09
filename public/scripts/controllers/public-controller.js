import { templateLoader } from 'templateLoader';
import * as data from 'data';

let $contentContainer = $("#contents-container");

export function get() {
    templateLoader.get('public')
        .then((template) => {
            let html = template;
            let context = data.getPublicFiles()
                .then(function (snapshot) {
                    let publicFiles = snapshot.val();
                    let theCompiledHtml = html(publicFiles);
                    $contentContainer.html(theCompiledHtml);
                })
                .then(() => {
                    let $navTabs = $(".nav-item");
                    $navTabs.removeClass("selected-nav");
                    let $publicTab = $("#nav-public");
                    $publicTab.addClass("selected-nav");
                    $(".tooltip").tooltip();
                });
        });
}