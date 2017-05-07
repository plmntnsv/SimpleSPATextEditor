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
        let userName = $enterUsername.val();
        let password = $enterPasswordField.val();
        let email = $enterEmail.val();
        let country = $chooseCountry.val();

        if (validate()) {
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

    function validate() {
        if ($enterPasswordField.val() !== $repeatPasswordField.val()) {
            alert("Passwords are not equal.");
            return false;
        }

        if ($enterPasswordField.val() === "") {
            alert("Password cannot be empty.");
            return false;
        }

        if ($enterUsername.val() === "") {
            alert("Username cannot be empty.");
            return false;
        }

        if ($enterEmail.val() === "") {
            alert("E-mail cannot be empty.");
            return false;
        }

        if ($chooseCountry.val() === "None") {
            alert("Please choose a country.");
            return false;
        }

        if ($enterEmail.val().indexOf('@') === -1) {
            alert("E-mail is not valid.");
            return false;
        }

        return true;
    }
}