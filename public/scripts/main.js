import { router } from 'router';
import * as loggedInNavController from 'loggedInNavController';
import * as loggedOutNavController from 'loggedOutNavController';

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        let displayName = user.displayName;
        let email = user.email;
        console.log(displayName + ' logged in.');
        loggedInNavController.get();
        location.hash = "/profile"; 
        router.destroy();
        router.loggedInInit();
    } else {
        console.log("no logged user.");
        loggedOutNavController.get();        
        location.hash = "/log-in";         
        router.destroy();        
        router.loggedOutInit();
    }
});