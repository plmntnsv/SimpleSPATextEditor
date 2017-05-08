SystemJS.config({
 transpiler: 'plugin-babel',
 map: {
  'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
  'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
  // app start script
  'main': 'scripts/main.js',
  'router' : 'scripts/routing.js',
  'data' : 'scripts/data.js',
  'templateLoader' : 'scripts/template-loader.js',
  // controllers
  'documentController' : 'scripts/controllers/document-controller.js',
  'categoriesController' : 'scripts/controllers/categories-controller.js',
  'logInController' : 'scripts/controllers/log-in-controller.js',
  'savedFilesController' : 'scripts/controllers/saved-files-controller.js',
  'registerController' : 'scripts/controllers/register-controller.js',
  'profileController': 'scripts/controllers/profile-controller.js',
  'sortesController': 'scripts/controllers/sortes-controller.js',
  'loggedInNavController': 'scripts/controllers/logged-in-nav-controller.js',
  'loggedOutNavController': 'scripts/controllers/logged-out-nav-controller.js',
  'homeController': 'scripts/controllers/home-controller.js',
  'publicTabController': 'scripts/controllers/public-controller.js',
  'publicViewController': 'scripts/controllers/public-view-controller.js',
  // classes
  'workFile': 'scripts/work-file.js',
  'documentFile': 'scripts/document-file.js',
  'categoryFile': 'scripts/category-file.js',
  'user' : 'scripts/user.js',
  'admin' : 'scripts/admin-user.js',
  // app functionality
  'documentLogic': 'scripts/document-logic.js',
  'savedFilesLogic': 'scripts/saved-files-logic.js',
  'registerLogic' : 'scripts/register-logic.js',
  'loginLogic' : 'scripts/log-in-logic.js',
  'logoutLogic' : 'scripts/log-out-logic.js',
  'profileLogic' : 'scripts/profile-logic.js',
  'utils': 'scripts/utils.js',
 }
});

System.import('main');