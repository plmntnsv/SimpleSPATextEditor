import {
    User
} from "user";
import * as data from 'data';

export function init() {
    let $registerBtn = $("#register-btn");
    let $enterPasswordField = $("#enter-password");
    let $repeatPasswordField = $("#repeat-password");
    let $enterUsername = $("#enter-username");
    let $chooseCountry = $("#choose-country");
    let $enterEmail = $("#enter-email");

    $registerBtn.on("click", function () {
        if ($enterPasswordField.val() !== $repeatPasswordField.val()) {
            alert("Passwords are not equal.");
        }

        if ($enterPasswordField.val() === "") {
            alert("Password cannot be empty.");
        }

        if ($enterUsername.val() === "") {
            alert("Username cannot be empty.");
        }

        if ($enterEmail.val() === "") {
            alert("E-mail cannot be empty.");
        }

        if ($chooseCountry.val() === "None") {
            alert("Please choose a country.");
        }

        if ($enterEmail.val().indexOf('@') === -1) {
            alert("E-mail is not valid.");
        }

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
                location.hash = "/document";
                $("#nav-register").addClass("hidden");
                $("#nav-log-in").addClass("hidden");
                $("#nav-log-out").removeClass("hidden");
                $("#nav-profile").removeClass("hidden");
            });
    });
}