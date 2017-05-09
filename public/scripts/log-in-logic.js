import { User } from "user";
import * as data from 'data';
import * as loggedInNavController from 'loggedInNavController';
import { router } from 'router';

export function init() {
    let $logInEmail = $("#log-in-email");
    let $logInPassword = $("#log-in-password");
    let $logInBtn = $("#log-in-submit");
    let $navTabs = $(".nav-item");
    $navTabs.removeClass("selected-nav");
    let $logInTab = $("#nav-login");
    $logInTab.addClass("selected-nav");

    $logInBtn.on("click", function () {
        let email = $logInEmail.val();
        let password = $logInPassword.val();

        if (validateLogIn()) {
            firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
                let errorCode = error.code;
                let errorMessage = error.message;
                alert(`${errorCode} - ${errorMessage}`);
            }).then(function () {
                let user = firebase.auth().currentUser;
                let $sideInfo = $("#side-info");
                $sideInfo.html(`Hello, ${user.displayName}!`);
                sessionStorage.setItem("userLogged", user.displayName);
                location.hash = "/profile";
                console.log(user.displayName + ' successfully logged-in.');
            });
        }

    });
}

function validateLogIn() {
    let $logInEmail = $("#log-in-email");
    let $logInPassword = $("#log-in-password");

    if (!(/^[0-9a-zA-Z]+$/).test($logInPassword.val())) {
        alert("Passwords must contain only latin letters.");
        return false;
    }

    if ($logInPassword.val() === "") {
        alert("Password cannot be empty.");
        return false;
    }

    if ($logInPassword.val().length < 6) {
        alert("Password is too short.");
        return false;
    }
    
    if (!(/^[0-9a-zA-Z@.]+$/).test($logInEmail.val())) {
        alert("Email must contain only latin letters.");
        return false;
    }

    if ($logInEmail.val() === "") {
        alert("E-mail cannot be empty.");
        return false;
    }

    if ($logInEmail.val().indexOf('@') === -1) {
        alert("E-mail is not valid.");
        return false;
    }

    return true;
}