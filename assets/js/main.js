(function (document) {
  requirejs.config({
    paths: {
      angular: '//ajax.googleapis.com/ajax/libs/angularjs/1.2.19/angular.min'
    },
    shim: {
      angular: {
        exports: 'angular'
      }
    }
  });

  require(['angular', 'app'], function (angular, app) {
    angular.element(document).ready(function () {
      angular.bootstrap(document, [app.name]);
    });
  });

  require(['styleloader'], function (styleloader) {
    styleloader('/css/secondary.css');
  });
}(document));
