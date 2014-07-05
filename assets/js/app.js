define(['angular', 'fastclick', 'router', 'animate'], function (angular, fastclick) {
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
          templateUrl: '/templates/about.html'
        })
        .state('blog', {
          url: '/blog',
          templateUrl: '/templates/blog.html'
        });
      }
    ])
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
