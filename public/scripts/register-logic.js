import {
    User
} from "user";
import * as data from 'data';
import * as loggedInNavController from 'loggedInNavController';
import {
    router
} from 'router';

export function init() {
    let $registerBtn = $("#register-btn");
    let $enterPasswordField = $("#enter-password");
    let $repeatPasswordField = $("#repeat-password");
    let $enterUsername = $("#enter-username");
    let $chooseCountry = $("#choose-country");
    let $enterEmail = $("#enter-email");

    $registerBtn.on("click", function () {
        loggedInNavController.get();
        router.destroy();
        router.loggedInInit();
        location.hash = "/profile";
        if ($enterPasswordField.val() !== $repeatPasswordField.val()) {
            alert("Passwords are not equal.");
        } else if ($enterPasswordField.val() === "") {
            alert("Password cannot be empty.");
        } else if ($enterUsername.val() === "") {
            alert("Username cannot be empty.");
        } else if ($enterEmail.val() === "") {
            alert("E-mail cannot be empty.");
        } else if ($chooseCountry.val() === "None") {
            alert("Please choose a country.");
        } else if ($enterEmail.val().indexOf('@') === -1) {
            alert("E-mail is not valid.");
        } else {
            let userName = $enterUsername.val()
            let password = $enterPasswordField.val();
            let email = $enterEmail.val();
            let country = $chooseCountry.val();

            let newUser = new User(userName, email, country);

            firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    alert(`${errorCode} - ${errorMessage}`);
                })
                .then(function () {
                    var user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: userName
                    }).then(function () {
                        console.log("successfully updated profile");
                    }, function (error) {
                        console.log(error);
                    });
                })
                .then(function () {
                    //location.hash = "/document";
                });
        }
    });
}