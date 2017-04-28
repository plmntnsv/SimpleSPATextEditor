//import { templateLoader } from './template-loader.js';
import * as documentController from 'documentController';
import * as savedFilesController from 'savedFilesController';
import * as categoriesController from 'categoriesController';
import * as sortesController from 'sortesController';
import * as profileController from 'profileController';
import * as logInController from 'logInController';
import * as registerController from 'registerController';

var router = (() => {
  var root = null;
  var useHash = true;
  var hash = '#';
  let router;

  function init(params) {
    router = new Navigo(root, useHash, hash);

    // Implement routing logic here
    router
      .on(() => { router.navigate("#/document"); })
      .on('/document', () => { documentController.get(); })
      .on('/saved-files', () => { savedFilesController.get(); })
      .on('/categories', () => { categoriesController.get(); })
      // .on('/saved-files/:id', function (file) {
      //   Promise.all([savedFiles.getById(file.id), templateLoader.get('/doc-file')])
      //   .then(([data, template]) => {
      //     $contentContainer.append(template(data));
      //   });
      // })
      .on('/sortes', () => { sortesController.get(); })
      .on('/profile', () => { profileController.get(); })
      .on('/log-in',  () => { logInController.get(); })
      .on('/register', () => { registerController.get(); })
      .resolve();
  }

  return {
    init
  }
})();



export { router };