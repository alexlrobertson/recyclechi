(function (document) {
  requirejs.config({
    paths: {
      angular: '../../bower_components/angular/angular'
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
