import { router } from 'router';

router.init();

// Initializes the database
var database = firebase.database();

// This method directs your function to handle writes at a certain path within your database
var savedFilesDbRef = database.ref('/saved-files');

//Listents for any changes at the location and logs the change
// savedFilesDbRef.on('value', function(snap) {
//   console.log(snap.val());
// });



//overrites data - use it with registered users - change password for example
// function writeUserData(userId, name) {
//   firebase.database().ref('profile/' + userId).set({
//     username: name,
//   });
// }

// let userId = 1;
// let name = "Lol";

// writeUserData(userId, name);
