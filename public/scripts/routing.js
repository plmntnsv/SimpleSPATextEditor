import * as documentController from 'documentController';
import * as savedFilesController from 'savedFilesController';
import * as categoriesController from 'categoriesController';
import * as sortesController from 'sortesController';
import * as profileController from 'profileController';
import * as logInController from 'logInController';
import * as registerController from 'registerController';
import * as logoutLogic from "logoutLogic";
import * as homeController from "homeController";
import * as publicTabController from "publicTabController";
import * as publicViewController from "publicViewController";

const router = (() => {
  const root = null;
  const useHash = true;
  const hash = '#';
  let router;

  function loggedOutInit() {
    router = new Navigo(root, useHash, hash);

    router
      .on(() => { router.navigate("#/home"); })    
      .on('/home',  () => { homeController.get(); })
      .on('/log-in',  () => { logInController.get(); })
      .on('/register', () => { registerController.get(); })
      .on('/public', () => { publicTabController.get(); })
      .on("/public/:name", (file) => { publicViewController.get(file.name);} )
      .resolve();
  }

  function destroy() {
    if (router) {
      router.destroy();
    } else {
      console.log("there is no routing to be destroyed.");
    }
  }

  function loggedInInit() {
    router = new Navigo(root, useHash, hash);

    router
      .on(() => { router.navigate("#/document"); })
      .on('/document', () => { documentController.get(); })
      .on('/saved-files', () => { categoriesController.get(); })
      .on('/public', () => { publicTabController.get(); })
      .on("/public/:name", (file) => { publicViewController.get(file.name);} )
      .on('/sortes', () => { sortesController.get(); })
      .on('/profile', () => { profileController.get(); })
      .on('/log-out', () => { logoutLogic.init(); })
      .resolve();
  }

  return {
    loggedOutInit,
    destroy,
    loggedInInit
  }
})();

export { router };