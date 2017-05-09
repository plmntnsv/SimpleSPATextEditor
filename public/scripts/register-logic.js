import { User } from "user";
import * as data from 'data';
import * as loggedInNavController from 'loggedInNavController';
import { router } from 'router';
import { DocumentFile } from 'documentFile';
import { CategoryFile } from 'categoryFile';

export function init() {
    let $registerBtn = $("#register-btn");
    let $enterPasswordField = $("#enter-password");
    let $repeatPasswordField = $("#repeat-password");
    let $enterUsername = $("#enter-username");
    let $chooseCountry = $("#choose-country");
    let $enterEmail = $("#enter-email");
    let $navTabs = $(".nav-item");
    $navTabs.removeClass("selected-nav");
    let $registerTab = $("#nav-register");
    $registerTab.addClass("selected-nav");

    $registerBtn.on("click", function () {
        let userName = $enterUsername.val();
        let password = $enterPasswordField.val();
        let email = $enterEmail.val();
        let country = $chooseCountry.val();

        if (validate()) {
            let newUser = new User(userName, email, country);

            firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(function (error) {
                    let errorCode = error.code;
                    let errorMessage = error.message;
                    alert(`${errorCode} - ${errorMessage}`);
                })
                .then(function () {
                    let user = firebase.auth().currentUser;
                    user.updateProfile({
                        displayName: userName
                    }).then(function () {
                        let $sideInfo = $("#side-info");
                        $sideInfo.html(`Hello, ${user.displayName}!`);
                        sessionStorage.setItem("userLogged", user.displayName);
                        console.log(user.displayName + ' registered successfully.');

                        let mainCategory = new CategoryFile("Main", "Admin");
                        let text = "This is your default category. Feel free to add, delete, preview and share files here or you can create your own categories.";
                        let greetingFile = new DocumentFile("Hello", "Admin", mainCategory._name, text);

                        data.postCategory(mainCategory, greetingFile).then(() => {console.log('successfully posted main file');});
                        data.postUser(newUser);
                    }, function (error) {
                        console.log(error);
                    }).then(function () {
                        console.log("successfully finalized profile");
                    });
                });
        }
    });

    function validate() {
        if ($enterPasswordField.val().match(/^[0-9a-zA-Z]+$/) === false) {
            alert("Passwords must contain only latin letters.");
            return false;
        }

        if ($enterPasswordField.val() !== $repeatPasswordField.val()) {
            alert("Passwords are not equal.");
            return false;
        }

        if ($enterPasswordField.val() === "") {
            alert("Password cannot be empty.");
            return false;
        }

        if ($enterUsername.val().match(/^[0-9a-zA-Z]+$/) === false) {
            alert("Username must contain only latin letters.");
            return false;
        }

        if ($enterUsername.val() === "") {
            alert("Username cannot be empty.");
            return false;
        }

        if ($enterEmail.val().match(/^[0-9a-zA-Z]+$/) === false) {
            alert("Email must contain only latin letters.");
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