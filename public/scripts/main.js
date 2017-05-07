import { router } from 'router';

router.loggedOutInit();

// firebase.auth().onAuthStateChanged(function(user) {
//         if (user) {
//           var displayName = user.displayName;
//           var email = user.email;
//           $("#nav-register").addClass("hidden");
//                 $("#nav-log-in").addClass("hidden");
//                 $("#nav-log-out").removeClass("hidden");
//                 $("#nav-profile").removeClass("hidden");
//         } else {
//           console.log('no logged user');
//         }
// });
