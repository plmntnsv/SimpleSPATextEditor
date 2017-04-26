SystemJS.config({
 // tell SystemJS which transpiler to use
 transpiler: 'plugin-babel',
 // tell SystemJS where to look for the dependencies
 map: {
  'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
  'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
  // app start script
  'main': 'scripts/main.js',
  'router' : 'scripts/routing.js',
  'templateLoader' : 'scripts/template-loader.js',
  'requester' : 'scripts/requester.js',
  'workbenchController' : 'scripts/controllers/workbench-controller.js',
  'categoriesController' : 'scripts/controllers/categories-controller.js',
  'logInController' : 'scripts/controllers/log-in-controller.js',
  'savedFilesController' : 'scripts/controllers/saved-files-controller.js',
  'registerController' : 'scripts/controllers/register-controller.js',
  'profileController' : 'scripts/controllers/profile-controller.js',
 }
});

System.import('main');