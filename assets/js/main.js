(function (document) {
  requirejs.config({
    paths: {
      angular: '../../bower_components/angular/angular.min',
      router:  '../../bower_components/angular-ui-router/release/angular-ui-router.min',
      animate: '../../bower_components/angular-animate/angular-animate.min',
      marked:  '//cdnjs.cloudflare.com/ajax/libs/marked/0.3.2/marked.min'
    },
    shim: {
      angular: {
        exports: 'angular'
      },
      router: {
        deps: ['angular']
      }
    }
  });

  require(['angular', 'app'], function (angular, app) {
    angular.element(document).ready(function () {
      angular.bootstrap(document, [app.name]);
    });
    angular.element(document.getElementsByClassName('loading-indicator')).removeClass('loading');
  });

  require(['styleloader'], function (styleloader) {
    styleloader('/css/secondary.css');
  });
}(document));
