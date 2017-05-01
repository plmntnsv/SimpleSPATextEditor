import { router } from 'router';

router.init();

var database = firebase.database();

var starCountRef = database.ref('/document');

starCountRef.on('value', function(snap) {
  console.log(snap.val());
});

