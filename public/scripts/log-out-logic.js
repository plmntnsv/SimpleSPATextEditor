import { router } from 'router';

export function init() {
    let user = firebase.auth().currentUser;
    firebase.auth().signOut().then(function() {
        console.log(user.displayName + ' logged out successfully');
        sessionStorage.removeItem("currentDoc");
    }).catch(function(error) {
  alert(error.message);
});
}