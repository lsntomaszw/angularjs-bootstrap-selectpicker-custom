'use strict';



function dropdownToggleDirective() {
  return {
    restrict: 'ACE',
    link    : function (scope, element) {
      var hideFn = function () {
        angular.element('.bootstrap-select', element).removeClass('open');
      };

      var toggleFn = function (e) {
        hideFn();
        e.stopPropagation();
        angular.element(this).toggleClass('open');
      };

      var doc = angular.element(document);

      element.on('click.bootstrapSelect', '.bootstrap-select', toggleFn);
      doc.on('click.bootstrapSelect', hideFn);

      scope.$on('$destroy', function () {
        element.off();
        doc.off('.bootstrapSelect');
      });
    }
  };
}


function selectpickerDirective($parse, $timeout) {
  return {
    restrict: 'A',
    link    : function (scope, element, attrs) {
      element.selectpicker($parse(attrs.selectpicker)());

      var refreshSelectpicker = function () {
        // just to give browser a chance to finish its render before asking for a new one
        $timeout(function () {
          element.selectpicker('refresh');
        }, 0);
      };

      if (attrs.ngModel) {
        scope.$watch(attrs.ngModel, refreshSelectpicker);
      }

      if (attrs.ngDisabled) {
        scope.$watch(attrs.ngDisabled, refreshSelectpicker);
      }

      if (attrs.ngOptions) {
        var list = attrs.ngOptions.match(/ in ([^ ]*)/)[1];
        scope.$watch(list, refreshSelectpicker);
      }

      scope.$on('$destroy', function () {
        scope.$evalAsync(function () {
          element.selectpicker('destroy');
        });
      });
    }
  };
}

angular.module('angular-bootstrap-select.extra', [])
  .directive('dropdownToggle', [dropdownToggleDirective]);

angular.module('angular-bootstrap-select', [])
  .directive('selectpicker', ['$parse', '$timeout', selectpickerDirective]);
