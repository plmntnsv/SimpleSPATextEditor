import { templateLoader } from './template-loader.js';

var router = (() => {
  var root = null;
  var useHash = false;
  var hash = '#';
  let router;
  let $contentContainer = $("#contents-container");

  function init(params) {
    router = new Navigo(root, useHash, hash);

    // Implement routing logic here
    router
      .on('/workbench', function () {
        templateLoader.get('/workbench')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        });
      })
      .on('/saved-files', function () {
       templateLoader.get('/saved-files')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        });
      })
      // .on('/saved-files/:id', function (file) {
      //   Promise.all([savedFiles.getById(file.id), templateLoader.get('/doc-file')])
      //   .then(([data, template]) => {
      //     $contentContainer.append(template(data));
      //   });
      // })
      .on('/options', function () {
        templateLoader.get('/options')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        });
      })
      .on('/profile', function () {
        templateLoader.get('/profile')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        });
      })
      .on('/log-in', function () {
        templateLoader.get('/log-in')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        });
      })
      .on('/register', function () {
        templateLoader.get('/register')
        .then((template) => {
          let html = template;
          $contentContainer.html(html);
        });
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