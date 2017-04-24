var router = (() => {
  var root = null;
  var useHash = false;
  var hash = '#';
  let router;

  function init(params) {
    router = new Navigo(root, useHash, hash);

    // Implement routing logic here
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
      .on('/register', function () {
        console.log('register');
      })
      .resolve();
  }

  return {
    init
  }
})();



export {
  router
};