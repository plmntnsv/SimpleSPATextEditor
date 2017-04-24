var root = null;
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);

router
    .on('/workbench', function () {
    console.log('workbench dir');
  })
  .on('/saved-files', function () {
    console.log('saved files dir');
  })
  .on('/profile', function () {
    console.log('profile');
  })
  .on('/options', function () {
    console.log('options');
  })
   .on('/log-in', function () {
    console.log('login');
  })
   .on('/regiseter', function () {
    console.log('register');
  })
  .resolve();