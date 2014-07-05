define([
  'angular',
  'fastclick',
  'marked',
  'router',
  'animate'
], function (angular, fastclick, marked) {
  return angular.module('recycle', [fastclick.name, 'ui.router', 'ngAnimate'])
    .config([
      '$stateProvider',
      '$urlRouterProvider',
      '$locationProvider',
      function ($stateProvider, $urlRouterProvider, $locationProvider) {
        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/state1');

        $stateProvider.state('home', {
          url: '/',
          templateUrl: '/templates/drawers.html',
          controller: 'DrawerCtrl'
        })
        .state('about', {
          url: '/about',
          templateUrl: '/templates/about.html',
          controller: 'AboutCtrl',
          resolve: {
            content: ['$http', function ($http) {
              return $http.get('/md/about.md').then(function (response) {
                return marked(response.data);
              });
            }]
          }
        })
        .state('blog', {
          url: '/blog',
          templateUrl: '/templates/blog.html'
        });
      }
    ])
    .controller('AboutCtrl', ['$scope', '$http', '$sce', 'content', function ($scope, $http, $sce, content) {
      console.log(content);
      $scope.body = '';

      $http.get('/md/about.md').success(function (content) {
        $scope.body = $sce.trustAsHtml(marked(content));
      });
    }])
    .controller('DrawerCtrl', ['$scope', function ($scope) {
      $scope.drawers = [
        {
          label:       'Can you donate it?',
          explanation: 'Is it one of these?',
          name:        'donate',
          options:     [
            {
              label: 'Clothing',
              value: 'clothing'
            },
            {
              label: 'Diapers',
              value: 'diapers'
            },
            {
              label: 'Feminine hygeine products',
              value: 'feminine-hygeine-products'
            },
            {
              label: 'Paint',
              value: 'paint'
            },
            {
              label: 'Shopping bags',
              value: 'shopping-bags'
            },
            {
              label: 'None of the above',
              value: 'none'
            }
          ]
        },
        {
          label:       'What material is it?',
          explanation: 'Do you know what it is made of?',
          name:        'material',
          options: [
            {
              label: 'Plastic',
              value: 'plastic',
            },
            {
              label: 'Styrofoam',
              value: 'styrofoam',
            },
            {
              label: 'Paper',
              value: 'paper',
            },
            {
              label: 'Glass',
              value: 'glass',
            },
            {
              label: 'Metal',
              value: 'metal',
            },
            {
              label: 'Cardboard',
              value: 'cardboard',
            },
            {
              label: 'Don\'t quite know or some other material',
              value: 'other',
            },
          ]
        }
      ];
    }])
  .directive('rcylDrawers', function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/drawer.html'
    };
  });
});
