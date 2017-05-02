SystemJS.config({
 transpiler: 'plugin-babel',
 map: {
  'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
  'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
  // app start script
  'main': 'scripts/main.js',
  'router' : 'scripts/routing.js',
  'data' : 'scripts/data.js',
  'requester' : 'scripts/requester.js',
  'templateLoader' : 'scripts/template-loader.js',
  'documentController' : 'scripts/controllers/document-controller.js',
  'categoriesController' : 'scripts/controllers/categories-controller.js',
  'logInController' : 'scripts/controllers/log-in-controller.js',
  'savedFilesController' : 'scripts/controllers/saved-files-controller.js',
  'registerController' : 'scripts/controllers/register-controller.js',
  'profileController': 'scripts/controllers/profile-controller.js',
  'sortesController': 'scripts/controllers/sortes-controller.js',
  'documentFile': 'scripts/document-file.js',
  'categoryFile': 'scripts/category-file.js',
  'documentFunctionality': 'scripts/document-functionality.js',
 }
});

System.import('main');