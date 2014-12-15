Package.describe({
  name: "cyclum:meteor-validate",
  summary: 'Validation Package with jquery libs',
  version: '0.0.1'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use("jquery", "client");
  api.use("templating", "client");


  api.addFiles([
    'libs/jquery.validate.min.js',
    'libs/maskedinput.js',
    'libs/additional-methods.min.js'
  ], 'client');
});
