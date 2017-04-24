var root = null;
var useHash = true;
var hash = '#';
var router = new Navigo(root, useHash, hash);

router
  .on('/saved-files', function () {
    console.log('saved files dir');
  })
  .resolve();

  //export { router };