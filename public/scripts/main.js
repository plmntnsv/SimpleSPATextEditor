import { router } from 'router';
import * as loggedInNavController from 'loggedInNavController';
import * as loggedOutNavController from 'loggedOutNavController';

let $sideInfo = $("#side-info");
let loggedUser = sessionStorage.getItem('userLogged');
if (!loggedUser) {
    firebase.auth().signOut().then(function() {
        sessionStorage.removeItem("currentDoc");
    }).catch(function(error) {
  alert(error.message);
});
}

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        console.log("a user logged-in.");
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
        $sideInfo.html(`Please log-in or register.`);
    }
});