define(['angular'], function (angular) {
  return angular.module('fastClick', [])
    .directive('fastClick', ['$parse', function ($parse) {
      return {
        restrict: 'A',
        link: function (scope, element, attrs) {
          // Parsed function from the directive
          var fn = $parse(attrs.fastClick),
              // Track the start points
              startX,

              startY,

              // Whether or not we have for some reason cancelled the event.
              canceled,

              // Our click function
              clickFunction = function (event) {
                if (!canceled) {
                  scope.$apply(function () {
                    fn(scope, {$event: event});
                  });
                }
              };

            // If we are actually on a touch device lets setup our fast clicks
            if ('ontouchstart' in window) {
              element.on('touchstart', function (event) {
                event.stopPropagation();

                var touches = event.originalEvent.touches;

                startX = touches[0].clientX;
                startY = touches[0].clientY;

                canceled = false;
              });

              element.on('touchend', function (event) {
                event.stopPropagation();
                clickFunction();
              });

              element.on('touchmove', function (event) {
                var touches = event.originalEvent.touches;

                // handles the case where we've swiped on a button
                if (Math.abs(touches[0].clientX - startX) > 10 ||
                  Math.abs(touches[0].clientY - startY) > 10) {
                  canceled = true;
                }
              });

              return;
            }

            element.on('click', function (event) {
              clickFunction(event);
            });
        }
      };
    }]);
});
