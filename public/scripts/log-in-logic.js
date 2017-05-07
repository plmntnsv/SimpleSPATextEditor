import { User } from "user";
import * as data from 'data';
import * as loggedInNavController from 'loggedInNavController';
import { router } from 'router';

export function init() {
    let $logInEmail = $("#log-in-email");
    let $logInPassword = $("#log-in-password");    
    let $logInBtn = $("#log-in-submit");

    $logInBtn.on("click", function () {
        let email = $logInEmail.val();
        let password = $logInPassword.val();
        
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
            let errorCode = error.code;
            let errorMessage = error.message;
            alert(`${errorCode} - ${errorMessage}`);
        }).then(function () {
            let user = firebase.auth().currentUser;
            let $sideInfo = $("#side-info");
            $sideInfo.html(`Hello, ${user.displayName}!`);
            sessionStorage.setItem("userLogged", user.displayName);
            console.log(user.displayName + ' successfully logged-in.');
        });
    });
}