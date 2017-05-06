import { User } from "user";
import * as data from 'data';

export function init() {
    var $logInBtn = $("#log-in-submit");
    var $logInPassword = $("#log-in-password");
    var $logInUsername = $("#log-in-username");
    

    $logInBtn.on("click", function () {
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
        // push new user to DB

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            alert(`${errorCode} - ${errorMessage}`);
        });
    });
}