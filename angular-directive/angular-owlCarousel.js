/**
 * @description 尚無 GitHub
 */
(function () {
    'use strict';
    var app = angular.module('owlCarousel', []);
    app.directive('owlCarousel', owlCarousel);
    app.directive('owlCarouselItem', owlCarouselItem);
    function owlCarousel() {
        return {
            restrict: 'E',
            transclude: false,
            link: function (scope) {
                scope.initCarousel = function (element) {
                    // provide any default options you want
                    var defaultOptions = {
                    };
                    var customOptions = scope.$eval($(element).attr('data-options'));
                    // combine the two options objects
                    for (var key in customOptions) {
                        defaultOptions[key] = customOptions[key];
                    }
                    // init carousel
                    $(element).owlCarousel(defaultOptions);
                };
            }
        }
    }

    function owlCarouselItem() {
        return {
            restrict: 'A',
            transclude: false,
            link: function (scope, element) {
                // wait for the last item in the ng-repeat then call init
                if (scope.$last) {
                    scope.initCarousel(element.parent());
                }
            }
        };
    }

})()