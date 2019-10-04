(function () {
    'use strict';

    angular.module('todoApp').directive('dniValidator', [dniValidator]);

    function dniValidator() {

        // Usage:
        // <input ng-model="value1" validate-equals="value2" />

        var directive = {
            restrict: 'A',
            require: 'ngModel',
            link: link
        };

        return directive;

        function link(scope, element, attrs, ngModel) {

            var dniPattern = /^\d{8}[a-zA-Z]$/;

            ngModel.$validators.dni = function (value) {
                return value.match(dniPattern);
            };
            // scope.$watch(attrs.ngModel,
            //     function( newValue, oldValue ) {
            //        if(newValue.match(dniPattern)) {
            //         ngModel.$setValidity('dni', true)
            //        } else {
            //         ngModel.$setValidity('dni', false)
            //        }
            //     }
            // );

        }
    }

})();