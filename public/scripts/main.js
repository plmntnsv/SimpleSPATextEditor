import { router } from 'router';
import * as loggedInNavController from 'loggedInNavController';
import * as loggedOutNavController from 'loggedOutNavController';

let $sideInfo = $("#side-info");

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let displayName = user.displayName;
        let email = user.email;
        //console.log(displayName + ' logged in.');
        loggedInNavController.get();
        location.hash = "/profile"; 
        router.destroy();
        router.loggedInInit();
        //$sideInfo.html(`Hello, ${displayName}!`);
    } else {
        console.log("no logged user.");
        loggedOutNavController.get();        
        location.hash = "/log-in";         
        router.destroy();        
        router.loggedOutInit();
        $sideInfo.html(`Please log-in or register.`);
    }
});