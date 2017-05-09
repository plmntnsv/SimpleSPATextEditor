import * as data from 'data';

export function init() {
    let $profileUsername = $("#profile-username");
    let $profileEmail = $("#profile-email");
    let $profileCreation = $("#profile-date-created");
    let $navTabs = $(".nav-item");
    $navTabs.removeClass("selected-nav");
    let $profileTab = $("#nav-profile");
    $profileTab.addClass("selected-nav");
    data.getUser()
        .then(function (snapUser) {
            let user = snapUser.val();
            $profileUsername.html(user._name);
            $profileEmail.html(user._email);
            $profileCreation.html(user.createdOn);
        });

}